/*!

Name:
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created:
Last Updated:
Licensed under the MIT license

*/

;(function($) {

    $.fn.pluginName = function(options) {
    
    	// return if no element was bound
		// so chained events can continue
		if(!this.length) { 
			return this; 
		}

		// define default parameters
        var defaults = {
            propertyName: 'value',
            error: function(message) {},
            success: function() {}
        }
        
        // define plugin
        var plugin = this;

        // define settings
        plugin.settings = {}
 
        // merge defaults and options
        plugin.settings = $.extend({}, defaults, options);

        var el = $(this),
        	s = plugin.settings;
        
        // for each element
        el.each(function() {
        
        	// do something
        
        });
        
        // run success callback function
        plugin.settings.success.call(this);
        
        plugin.publicMethod = function() {
            // do something
        }

        var privateMethod = function() {
            // do something
        }
        
    }

})(jQuery);