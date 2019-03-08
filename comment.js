"use strict"

$( function() {
	
	$(".comment-input button").on("click", function( event ) {
		var commentInput = ".comment-input input";
		
		function processCommentInput()
		{
			$new_comment = $("<p>").text($(commentInput).val());
			$(".comments").append( $new_comment );
			$(commentInput).val("");
		}
		
		$ (commentInput).on("keypress", function(event) {
			if (event.keyCode === 13)
			{
				processCommentInput();
			}
		});
		
		var $new_comment;
		
		
		if ( $(commentInput).val() !== "")
		{
			processCommentInput();
		}
		
	});
	
});