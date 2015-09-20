var user_option;

// Build a grid and insert it in html document
function createGrid(option) {

	// prevent creating more than one grid
    if (document.getElementsByClassName("sameDiv") !== null) {
    	$(".sameDiv").remove();
    }
    
    // get number of rows/columns from user
	var rows = userPrompt();

    // build a grid
    buildGrid(rows);

    // apply user's choice of an option
    applyOption(option);
}

// change background based on the user's choice
function applyOption(option) {

	switch(option) {
    	case "default":
    	case "random":
    		$(".sameDiv").css("background-color", "rgb(230, 230, 230)");
    		break;
    	case "trail":
    	case "gradient":
    		$(".sameDiv").css({"background-color" : "rgb(0, 0, 0)", "opacity" : 0.1});
    		break;
	}
}

// Prompt user to enter number of rows/columns for the sketchpad
function userPrompt() {
 
	    
	    var rows = parseInt(prompt("Please enter number of rows/columns(1-100):", "50"));

        if (rows >= 1 && rows <= 100) {

        	return rows;   
        }

        alert("You have to enter an integer between 1 and 100!");
}

// build a grid
function buildGrid(rows) {

	for (var i = 1; i <= rows; i++)
	{
		$('<tr />').appendTo("#grid");
		for (var j = 1; j <= rows; j++) {
		    $('<td />', {
		        'class' : 'sameDiv',
		        'width' : 960 / rows,
		        'height' : 960 / rows
		    }).appendTo("#grid");
		}
	}
}

// draw with blue color
$("#default").click(function(){
	user_option = "default";
	createGrid(user_option);
    $("#grid .sameDiv").hover(function(){
        $(this).css("background-color", "blue");
    });
});

//create random color
function get_random_color() {
  function c() {
    return Math.floor(Math.random()*256).toString(16)
  }
  return "#"+c()+c()+c();
}

// draw with random colors
$("#random").click(function(){
	user_option = "random";
	createGrid(user_option);
    $("#grid .sameDiv").hover(function(){
        $(this).css("background-color", get_random_color);
    });
});

// draw with gradient color
$("#gradient").click(function(){
	user_option = "gradient";
	createGrid(user_option);
    $("#grid .sameDiv").hover(function(){
        var opacity = Number($(this).css("opacity")) + 0.1;
        $(this).css("opacity", opacity);
    });
});

// draw with gradient color leaving a trail
$("#trail").click(function(){
	user_option = "trail";
	createGrid(user_option);
    $("#grid .sameDiv").hover(function(){
			$(this).css("opacity", 1);
		}, function () {
			$(this).fadeTo("slow", 0.1);
	});
});

// clear grid
$("#clear").click(function(){
    applyOption(user_option);
});



