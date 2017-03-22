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
	    rating: 0, //Initial Rating
	    normalFill: "#80cbc4", 
	    ratedFill: "#004d40"

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


(function () {
        var single = $('#singleInput').materialize_autocomplete({
            multiple: {
                enable: false
            },
            dropdown: {
                el: '#singleDropdown'
            },
            getData: function(singleInput,callback){
              var data = clientsList(singleInput);
              callback(singleInput, data);
            },
            onSelect: function(){
            console.log('Hey');
            $('#modal2').modal();
            $('select').material_select();
            $('#modal2').show();
            }                       
        });                    
    })();