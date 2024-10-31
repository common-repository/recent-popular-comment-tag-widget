<?php 

function recent_popular_comment_tag_widget_files() {
	wp_enqueue_style('rpctw-font-awesome.min', plugins_url('../assets/css/font-awesome.min.css', __FILE__));
	wp_enqueue_style('rpctw-style', plugins_url ('../assets/css/rpctw-style.css', __FILE__));  
	
	wp_enqueue_script( 'rpctw-script',  plugins_url('../assets/js/rpctw-script.js', __FILE__), array( 'jquery' ), '1.0', true );
}
add_action('wp_enqueue_scripts', 'recent_popular_comment_tag_widget_files');


