(function ($) { 
	 var $tabsNav = $('.rpctw-tabs-nav'),
		  $tabsNavLis    = $tabsNav.children('li'),
		  $tabsContainer = $('.rpctw-tabs-container');

		$tabsNav.each(function() {
			  var $_el = $(this);
			  $_el
				  .next()
				  .children('.rpctw-tab')
				  .stop(true,true)
				  .hide()
				  .siblings( $_el.find('a').attr('href') ).show();

			  $_el.children('li').first().addClass('active').stop(true,true).show();
		});

		$tabsNavLis.on('click', function(e) {
			  var $this = $(this);

			  $this.siblings().removeClass('active').end()
			  .addClass('active');

			  $this.parent().next().children('.rpctw-tab').stop(true,true).hide()
			  .siblings( $this.find('a').attr('href') ).fadeIn();
			  e.preventDefault();
		}).children( window.location.hash ? 'a[href="' + window.location.hash + '"]' : 'a:first' ).trigger('click');
	
})(jQuery);