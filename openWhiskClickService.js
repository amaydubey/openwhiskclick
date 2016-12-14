/**
  *
  * main() will be invoked when you Run This Action.
  *
  */
function main(params) {
    var leftSwipe = params.leftSwipe;
    var rightSwipe = params.rightSwipe;
    var upSwipe = params.upSwipe;
    var downSwipe = params.downSwipe;
    if(leftSwipe=='true'){
    	return {
    		js : "You swiped left!"
    	}
    } else if(rightSwipe=='true') {
    	return {
    		js : "You swiped right!"
    	}
    } else if(upSwipe=='true') {
    	return {
    		js : "You swiped up!"
    	}
    } else if(downSwipe=='true') {
    	return {
    		js : "You swiped down!"
    	}
    } else {
    	return {
    		js : "An error occurred!"
    	}
    }
}