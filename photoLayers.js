
	// moved these to html embed
	
	/*var photoLayerTexts = {
		"labels":{
			"default":"",
			"placenames":"Place Names",
			"trailnames":"Trail Names",
			"trails":"Trail Paths",
			"tint":"Tinted Image"
			}
		,
		"descriptions":{
			"default":"",
			"placenames":"Text to describe placenames goes here. <a href='http://foo.bar' target='_blank'>Link to something &raquo;</a>",
			"trailnames":"Text to describe trailnames goes here",
			"trails":"Text to describe trails goes here",
			"tint":"Text to describe tint goes here"
		}
		
	};*/
	
	function initPhotoLayers(){
	
		console.log("initPhotoLayers running");
		
		//var photosOnPage = $(".photo").length;
		var photosOnPage = $("#photoContainer .photo").length; // there were extra pix in wp page
		
		
		console.log("initPhotoLayers says " + photosOnPage + " photos");
		
		var targetForm = $("#photoLayerForm");
			
		for(var i=1;i<photosOnPage;i++){
		
			var defaultDisplayTemp = $('.photo:nth-child(' + i + ')').data('defaultdisplay');
			console.log("initPhotoLayers saysdefaultDisplayTemp for " + i + " is " + defaultDisplayTemp);
		
			var currentPhotoDiv = $('.photo:nth-child(' + i + ')');
			
			$("#photoLayerForm").append("<label class=\"imageLayerLabel\" id=\"placenames\"><input type=\"checkbox\" class=\"imageLayerCheckbox\" name=\"" + currentPhotoDiv.attr("id") + "\" value=\"" + currentPhotoDiv.attr("id") + "\" id=\"checkbox_" + currentPhotoDiv.attr("id") + "\">&nbsp;&nbsp;" + photoLayerTexts.labels[currentPhotoDiv.attr("id")] + "</label> &nbsp;<br />");
			
			
			if(defaultDisplayTemp == "hide"){
				//fade out photo to hide it
				currentPhotoDiv.fadeTo(0,0);
			} else {
				// fade in photo to show it
				currentPhotoDiv.fadeTo(1000,1);
			}
			// remove display=none in any case
			currentPhotoDiv.removeClass("hidden"); 
		}
		
		
		
		
		
	//}

	//function initCheckboxes(){
		console.log("initCheckboxes running");
		
		
		$(".imageLayerCheckbox").bind('click',function(event){
				//console.log("checked " + this.id);{
				testCheckboxes(this.id);
			});	
		
		// can be used for tooltips
		/*$(".imageLayerLabel").bind('mouseover',function(event){
				console.log("mouseover " + this.id);
			});	*/
		
		
		$("#photoNavContainer").bind('mouseenter',function(event){
				//console.log("imageControls mouseover");
				$("#imageControls").fadeTo(200,1);
		});
			
		$("#photoNavContainer").bind('mouseleave',function(event){
				//console.log("imageControls mouseover");
				$("#imageControls").fadeTo(200,0.5);
		});		
		
		$("#photoContainer").bind('mouseenter',function(event){
				$("#imageControls").fadeTo(200,1);
		});
			
		$("#photoContainer").bind('mouseleave',function(event){
				$("#imageControls").fadeTo(200,0.5);
		});		
		
	}
	
	
	function testCheckboxes(checkbox){
	
		console.log("testCheckboxes running with checkbox at " + checkbox);
		
		checkTarget = checkbox.split("_")[1];
		
		if($("#" + checkbox).prop('checked')){
			
			console.log(checkbox + " is checked!");	
			$("#" + checkTarget).fadeTo(200,1);
			updateLayerDescription(checkTarget);
			
		 // true
			
		} else {
			
			console.log(checkbox + " is not checked!");	
			$("#" + checkTarget).fadeTo(200,0);
			$("#layerDescriptionText").text("");
		}
	}
	
	function updateLayerDescription(layer){
		console.log("updateLayerDescription running with layer at " + layer);
		
		layerTarget = layer.split("_")[1];
		
		$("#layerDescriptionText").html(photoLayerTexts.descriptions[layer]);

	}
	
	
