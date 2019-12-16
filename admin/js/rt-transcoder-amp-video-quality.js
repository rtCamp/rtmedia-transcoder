const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;
const InspectorControls = wp.blockEditor.InspectorControls;
const apiFetch = wp.apiFetch;

// Enable Transcoder settings on the following blocks
const enableTranscoderSettingsOnBlocks = [
	'amp/amp-story-page',
	'core/video',
];

const { rtTranscoderBlockEditorSupport } = window;

// Default Video Quality for for selection.
const defaultVideoQuality = typeof rtTranscoderBlockEditorSupport.rt_default_video_quality !== 'undefined' ?
	rtTranscoderBlockEditorSupport.rt_default_video_quality : 'high';

/**
 * Add background video quality attribute to block.
 *
 * @param {object} settings Current block settings.
 * @param {string} name Name of block.
 *
 * @returns {object} Modified block settings.
 */
const addBackgroundVideoQualityControlAttribute = ( settings, name ) => {
	if ( ! enableTranscoderSettingsOnBlocks.includes( name ) ) {
		return settings;
	}

	//check if object exists for old Gutenberg version compatibility
	if ( typeof settings.attributes !== 'undefined' ) {
		settings.attributes = Object.assign( settings.attributes, {
			rtBackgroundVideoQuality: {
				type: 'string',
				default: defaultVideoQuality,
			},
		} );
	}

	return settings;
};

addFilter( 'blocks.registerBlockType', 'transcoder/attribute/ampStoryBackgroundVideoQuality', addBackgroundVideoQualityControlAttribute );

/**
 * Create HOC to add Transcoder settings controls to inspector controls of block.
 */
const withTranscoderSettings = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		// Do nothing if it's another block than our defined ones.
		if ( ! enableTranscoderSettingsOnBlocks.includes( props.name ) ) {
			return ( <BlockEdit { ...props } /> );
		}

		const mediaAttributes = props.attributes;
		const isAMPStory = 'amp/amp-story-page' === props.name;
		const isVideoBlock = 'core/video' === props.name;
		const mediaId = isAMPStory ? mediaAttributes.mediaId : mediaAttributes.id;
		const mediaType = mediaAttributes.mediaType ? mediaAttributes.mediaType : '';

		if ( typeof mediaId !== 'undefined' ) {
			if ( typeof mediaAttributes.poster === 'undefined' ) {
				if ( isAMPStory && typeof mediaAttributes.mediaType !== 'undefined' &&
					'video' === mediaAttributes.mediaType && ! mediaAttributes.mediaUrl.endsWith( 'mp4' ) ) {
					props.setAttributes( { poster: rtTranscoderBlockEditorSupport.amp_story_fallback_poster } );
				} else if ( isVideoBlock && typeof mediaAttributes.src !== 'undefined' &&
					mediaAttributes.src.indexOf( 'blob:' ) !== 0 && ! mediaAttributes.src.endsWith( 'mp4' ) ) {
					props.setAttributes( { poster: rtTranscoderBlockEditorSupport.amp_video_fallback_poster } );
				}
			} else {
				const restBase = '/transcoder/v1/amp-media';
				apiFetch( {
					path: `${ restBase }/${ mediaId }`,
				} ).then( data => {
					// const videoQuality = props.attributes.rtBackgroundVideoQuality ? props.attributes.rtBackgroundVideoQuality : defaultVideoQuality;

					// Derive the video quality from the classname.
					const qualitySavedInClassName = props.attributes.className ? ( props.attributes.className.split( '-' ) )[2] : '';
					const videoQuality = qualitySavedInClassName ? qualitySavedInClassName : 'high';

					console.warn( 'videoQuality', videoQuality, props.attributes.className );


					if ( false !== data && null !== data ) {
						if ( data.poster.length && data[ videoQuality ].transcodedMedia.length ) {
							if ( isAMPStory && typeof mediaAttributes.mediaType !== 'undefined' && 'video' === mediaAttributes.mediaType ) {
								props.setAttributes( {
									poster: data.poster,
									mediaUrl: data[ videoQuality ].transcodedMedia,
									src: data[ videoQuality ].transcodedMedia,
									rtBackgroundVideoQuality: props.attributes.rtBackgroundVideoQuality,
									mediaId: props.attributes.mediaId,
								} );
							} else if ( isVideoBlock ) {
								props.setAttributes( {
									poster: data.poster,
									mediaUrl: data[ videoQuality ].transcodedMedia,
									rtBackgroundVideoQuality: props.attributes.rtBackgroundVideoQuality,
									src: data[ videoQuality ].transcodedMedia,

								} );
							}
						}
					}
				} );
			}
		}

		const { rtBackgroundVideoQuality } = props.attributes;

		// add has-quality-xy class to block
		if ( rtBackgroundVideoQuality ) {
			props.setAttributes( {
				className: `has-quality-${ rtBackgroundVideoQuality }`,
			} );
		}

		// Derive the video quality from the classname.
		const qualitySavedInClassName = props.attributes.className ? ( props.attributes.className.split( '-' ) )[2] : '';
		// Set the video quality equal to the value derived from classname if the backgroundVideoQuality is undefined.
		const videoQuality = ( undefined === rtBackgroundVideoQuality ) ? qualitySavedInClassName : rtBackgroundVideoQuality;

		return (
			<Fragment>
				<BlockEdit { ...props }
				/>
				{
					( isVideoBlock || ( isAMPStory && 'video' === mediaType ) ) && (
						<InspectorControls>
							<PanelBody
								title={ __( 'Transcoder Settings', 'transcoder' ) }
								initialOpen={ true }
							>
								<SelectControl
									label={ __( 'Background Video Quality', 'transcoder' ) }
									value={ videoQuality }
									options={ [
										{ value: 'low', label: __( 'Low', 'transcoder' ) },
										{ value: 'medium', label: __( 'Medium', 'transcoder' ) },
										{ value: 'high', label: __( 'High', 'transcoder' ) },
									] }
									onChange={
										( selectedQuality ) => {
											props.setAttributes( {
												rtBackgroundVideoQuality: selectedQuality,
											} );
										}
									}
								/>
							</PanelBody>
						</InspectorControls>
					)
				}
			</Fragment>
		);
	};
}, 'withTranscoderSettings' );

addFilter( 'editor.BlockEdit', 'rt-transcoder-amp/with-transcoder-settings', withTranscoderSettings );
