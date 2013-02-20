(function(){
  
  var 
    ie_version = getInternetExplorerVersion(),
    big_screen_or_legacy_ie = Modernizr.mq('screen and (min-width: 768px)') || (ie_version == 8);  

  // Nacitani fancyboxu jen na velkych displejich a na MSIE8-

  Modernizr.load({

    test: big_screen_or_legacy_ie,

    yep : [ 
  		'fancybox/jquery.fancybox.pack.js',
  		'fancybox/jquery.fancybox.css'
  	],
	
    complete : function () {
  		 if (big_screen_or_legacy_ie) {  		   
  		    // Fancybox
          $(".fancybox").fancybox();        
        } 
     }
     
  });


  // Vraci verzi IE
  // http://blogs.msdn.com/b/giorgio/archive/2009/04/14/how-to-detect-ie8-using-javascript-client-side.aspx
  
  function getInternetExplorerVersion() {
      var rv = -1; // Return value assumes failure.
      if (navigator.appName == 'Microsoft Internet Explorer') {
          var ua = navigator.userAgent;
          var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
          if (re.exec(ua) != null)
              rv = parseFloat(RegExp.$1);
      }
      return rv;
  }

})();
