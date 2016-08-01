(function(){
	"use strict";
	var arrPersonDetails = [];
	var app = {
		bind: function(){
			$("#btnSubmit").click(function (event){
				var name = $("#inputName").val();
				if(name.length == 0){
					$("#lblErrName").css('display', 'block');
					
				}else{
					$("#lblErrName").css('display', 'none');
				}
				var age = $("#inputAge").val();
				if(age.length == 0){
					$("#lblErrAge").css('display','block');
					
				}else{
					if(age < 0){
						$("#lblErrAge").css('display','block');
						$("#lblErrAge").text("Negative Age not allowed");
					}else{
					$("#lblErrAge").css('display','none');
				}
				}
				var address = $("#inputAddress").val();
				if(address.length == 0){
					$("#lblErrAddr").css('display', 'block');
				}else{
					$("#lblErrAddr").css('display', 'none');
				}
				if(name && age && address){
					var details = {name: name, age: age, address:address};
					arrPersonDetails.push(details);
					$("#inputName").val("");
					$("#inputAge").val("");
					$("#inputAddress").val("");
					$("#inputName").focus();
				}
				console.log(arrPersonDetails.length);
				app.showUI();
			});

			$("#listView").on('click', 'button', function(event){
				var id = $(this).attr('id');
				if(id && id.indexOf("update") >= 0){
					//var $(this).parent().find('input').text();

				}else if(id && id.indexOf("cancel") >= 0){

				}else{
					$(this).parent().find('label').hide();
					$(this).parent().find('input').show();
					$(this).parent().find("div.updateDiv").addClass("showUpdateDiv");
					$(this).hide();
				}
			});

			$("#btnSortName").click(function(event){
				arrPersonDetails.sort(function(a,b){
					var b = ((a.name >b.name)? 1: ((b.name > a.name)? 1 : 0));
					return b;
				});
				app.showUI();
			});

			$("#btnSortAge").click(function(event){
				arrPersonDetails.sort(function(a,b){
					return (a.age - b.age);
				});
				app.showUI();
			});

		},

		showUI: function (){
			$("#listView").empty();
			for(var i = 0; i<arrPersonDetails.length; i++){
				$("#listView").append("<li> <div> <label>" + arrPersonDetails[i].name  + 
										"</label><input type=\"text\" value =" + arrPersonDetails[i].name + "></div>" +
										"<div> <label>" + arrPersonDetails[i].age + 
										"</label><input type=\"text\" value =" + arrPersonDetails[i].age + " ></div>" +
										"<div> <label>" + arrPersonDetails[i].address + 
										"</label><input type=\"text\" value =" + arrPersonDetails[i].address + "></div>"+
										"<button>Edit</button> "+
										"<div class = \"updateDiv\"><button id = \"update\"" + i + " class = \"updateCancel\" >Update</button>\
										<button id = \"cancel\"" + i + " class = \"updateCancel\">Cancel</button></div> </li>");
			}
		},

		getIndexOf: function (element){
			var index = -1;
			for(var i = 0; i<arrTodoItem.length; i++){
				if(arrTodoItem[i].name == element){
					index = i;
					break;
				}
			}
			return index;
		}

	};
$(document).ready(function(){
	app.bind();
});
})();