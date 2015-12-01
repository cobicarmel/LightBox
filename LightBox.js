var LightBox = {

	settings: {
		selectors: {
			lightBox: 'light-box',
			lightBoxContent: 'light-box-content'
		},
		classes: {
			lightBox: '',
			lightBoxContent: ''
		}
	},

	initComponents: function(){

		var selectors = this.settings.selectors;

		this.components = {
			$lightBox: $('<div>', {id: selectors.lightBox, class: this.settings.classes.lightBox}),
			$lightBoxContent: $('<div>', {id: selectors.lightBoxContent, class: this.settings.classes.lightBoxContent})
		};

		this.components.$lightBox.html(this.components.$lightBoxContent).appendTo('body');
	},

	attachEvents: function(){

		this.components.$lightBox.click(function(e){

			var $target = $(e.target),
				lbContentId = '#' + LightBox.settings.selectors.lightBoxContent;

			if($target.is(lbContentId) || $target.parents(lbContentId).length)
				return;

			LightBox.hide();
		});
	},

	init: function(settings){

		this.initSettings(settings);

		this.initComponents();

		this.attachEvents();
	},

	initSettings: function(settings){

		$.extend(this.settings, settings);
	},

	hide: function(){

		LightBox.components.$lightBox.fadeOut(LightBox.onAfterHide);
	},

	setContent: function(element){

		LightBox.components.$lightBoxContent.html($(element));
	},

	show: function(){

		LightBox.components.$lightBox
			.fadeIn(LightBox.onAfterShow);
	},
	reset: function(){

		LightBox.components.$lightBox.find('form')[0].reset();
	}
};