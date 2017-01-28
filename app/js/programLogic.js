//Function to Load CRUD Page 
function loadPage(){
	window.document.location.href = 'Crud.html';
}
//Function to open modals and edit content
function modalFunc() {
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	   $('#modal1').modal();
	   $('select').material_select();
	   $(".second").hide();
	   $(".first").show();
	};
//Function to open modal for Adding Catefory.
/*I wil be opening the same modal but replacing the contents inside*/
function modalFunc2(){
	$('#modal1').modal();
	$('select').material_select();
	$( "div.first" ).toggleClass( "second" );
	/*Hiding and show the div's*/
	$(".second").show();
	$(".first").hide();
};	
//Rating Stars Plugin initialization	
	$(function () {	 
	  $("#el").rateYo({
	    rating: 3.6
	  });	 
	});

//Autocomplete Function using npm package as dependency 

$(function (){
var searchData = ""
var autoComplete = $("#autocomplete-input").autocomplete({
	limit : 10,
	multiple : {
          enable :false,
	},
	dropdown : {
		el : '#autocomplete-input'
	},
	getData: function (value, callback) {
             value = $('#autocomplete-input').val();
	        // ... 
	        console.log(name);
	        callback(value, searchClients(name));
	    }
   });
});	

$(function() {	
  $('input.autocomplete').autocomplete({
  	source : "clients.db",
    minLength: 3, 
    delay: 0
    /*data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'http://placehold.it/250x250',
    }*/
  });
});

