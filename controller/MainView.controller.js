sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/m/MessagePopover',
		'sap/m/MessagePopoverItem'
	], function(jQuery, Controller, JSONModel, MessagePopover, MessagePopoverItem) {
	"use strict";
 
	var PageController = Controller.extend("zupload.banner.controller.MainView", {
 
	onInit: function () {
//		var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json"));
//		this.getView().setModel(oModel);
// 
// 
//		var oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor();
//		var oMessageManager = sap.ui.getCore().getMessageManager();
// 
//		oMessageManager.registerMessageProcessor(oMessageProcessor);
// 
//		oMessageManager.addMessages(
//				new sap.ui.core.message.Message({
//					message: "Something wrong happened",
//					type: sap.ui.core.MessageType.Error,
//					processor: oMessageProcessor
//				})
//		);
		var oData = {
				list: [
				       {
				    	   name: "test1",
				    	   image: "http://www.w3schools.com/css/trolltunga.jpg"
				       },
				       {
				    	   name: "test2",
				    	   image: "http://ultraimg.com/images/2016/07/29/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg"
				    		   
				       }
				]
		}
		
		var oModel = new sap.ui.model.json.JSONModel(oData);
		this.getView().setModel(oModel,"data");
	},
	
	handleDeleteImage: function(oevt){
		
	},
	
	handleInsertImage: function(oevt){
//		function readTextFile(filepath) {
//			var str = "";
//			var txtFile = new File(filepath);
//			txtFile.open("r");
//			while (!txtFile.eof) {
//				// read each line of text
//				str += txtFile.readln() + "\n";
//			}
//			return str;
//		}
//		debugger;
//		readTextFile("http://localhost:54307/UploadBanner/file/text.txt");
		
//		var sPath = "http://localhost:54307/UploadBanner/file/text.txt";
//		var sPath = "https://raw.githubusercontent.com/pasinsiwaamornratana/eeee/master/file/text.txt";
		var sPath = $.sap.getModulePath("zupload.banner", "/file/Book1.csv");
		
		var blob = null;
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    
//		    	console.log(this.responseText);
		    	function processData(allText) {
		    	    var allTextLines = allText.split(/\r\n|\n/);
		    	    var headers = allTextLines[0].split(',');
		    	    var lines = [];

		    	    for (var i=1; i<allTextLines.length; i++) {
		    	        var data = allTextLines[i].split(',');
		    	        if (data.length == headers.length) {

		    	            var tarr = [];
		    	            for (var j=0; j<headers.length; j++) {
		    	                tarr.push(headers[j]+":"+data[j]);
		    	            }
		    	            lines.push(tarr);
		    	        }
		    	    }
		    	    // alert(lines);
		    	    console.log(lines);
		    	}
		    	
		    	processData(this.responseText);
		    }
		  };
		xhr.open("GET", sPath, true);
		xhr.send();
	},
	
	handlePress: function(oevt){
		console.log("handlePress");
	}
	
});
 
 
	return PageController;
 
});