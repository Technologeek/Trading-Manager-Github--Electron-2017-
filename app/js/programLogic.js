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
	$(".second").show();
	$(".first").hide();
};	
//Rating Stars Plugin initialization	
	$(function () {	 
	  $("#el").rateYo({
	    rating: 3.6
	  });	 
	});