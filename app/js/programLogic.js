modalFunc();
//Function to Load CRUD Page 
function loadPage(){
	window.document.location.href = 'Crud.html';
}

//Function to open modals and edit content
function modalFunc() {
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	   $('#modal1').modal();
	   $('select').material_select();
	}
	$(function () {
	 
	  $("#el").rateYo({
	    rating: 3.6
	  });
	 
	});