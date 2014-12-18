#Plugin Name

A simple, lightweight jQuery plugin used to...

<a href="" target="_blank" title="See a demo of this plugin">See a demo</a>

##Instructions

Include jQuery and the plugin in the head or footer of your page.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    
    <script src="/js/plugins/plugin.js"></script>
    
Initialize the plugin using the class, ID or element you're targeting. 

	$('el').plugin();
	
####Options

<ol>

<li>
success: function()
<br />A callback function that runs after the plugin, if the plugin is successful.
</li>

<li>
error: function()
<br />A callback function that runs after the plugin, if the plugin failed.
</li>

</ol>

#####Example:

		$(function() {
			
			$('el').plugin({
				success: function() {
					console.log('The plugin was successful!');
				},
				error: function() {
					console.log('The plugin encountered an error.');
				}
			});
				
		});