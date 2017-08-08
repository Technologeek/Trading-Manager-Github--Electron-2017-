'use strict';
//Function to Load CRUD Page 
var loadPage = function() {
    window.document.location.href = 'Crud.html';
}
//Function to open modals and edit content
var modalFunc = function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal();
    selectList();
    $('select').material_select();
    $('#category_retrived').material_select();
    $(".second").hide();
    $(".first").show();
    $('#first_name').val();
    $(".selection").val('');
    $("#el").rateYo("rating", "0");
};
//Function to open modal for adding category
//Opening the same modal but replacing the contents inside
var modalFunc2 = function() {
    $('#modal1').modal();
    $('#category_name').val('');
    $('select').material_select();
    $("div.first").toggleClass("second");
    /*Hiding and show the div's*/
    $(".second").show();
    $(".first").hide();
};
//Rating Stars Plugin initialization	
$(function() {
    $("#el").rateYo({
        rating: 0, //Initial Rating
        normalFill: "#80cbc4",
        ratedFill: "#004d40"

    });
    $("#el2").rateYo({
        normalFill: "#80cbc4",
        ratedFill: "#004d40"
    });
});

//Autocomplete Function  
$(function() {
    var searchData = ""
    var autoComplete = $("#autocomplete-input").autocomplete({
        limit: 10,
        multiple: {
            enable: false,
        },
        dropdown: {
            el: '#autocomplete-input'
        },
        getData: function(value, callback) {
            value = $('#autocomplete-input').val();
            callback(value, searchClients(name));
        }
    });
});

$("#saveButton").click(function() {
    if (!$('#first_name').val() || !$('#category_select').val()) {
        alert("Client Name and Category are required!");
    } else {
        /// get the values of all the elements then call the db function.
        var name = $('#first_name').val();
        var categorys = $('#category_select').val();
        var comments = $('#form_comments').val();
        var ratings = $("#el").rateYo("option", "rating");
        insertClient(name, categorys, comments, ratings);
        $('#modal1').modal("close");
    }
});
$('#saveButtonCateory').click(function() {
    if (!$('#category_name').val()) {
        alert("Category is required!");
    } else {
        var categvar = $('#category_name').val();
        insertCategory(categvar);
        selectList();
    }
});

//Populating entries on auto-complete search
var autoCompleteFunc = function() {
    var single = $('#singleInput').materialize_autocomplete({
        multiple: {
            enable: false
        },
        dropdown: {
            el: '#singleDropdown'
        },
        getData: function(singleInput, callback) {
            var data = clientsList(singleInput);
            callback(singleInput, data);
        },
        onSelect: function() {
            clientsList(singleInput);
            $('#dataModal').modal();
            $('#dataModal').modal('open');
            selectList();
            $('select').material_select();
            retrievedData();
        }
    });
}();

$("#edit_mode").click(function() {
    $(".teal-text").removeAttr("disabled");
    $("#save_edit").attr("disabled", false);
});

$("#save_edit").click(function() {
    if (!$('#retrievedName').val() || !$('#category_retrived').val()) {
        alert("Client Name and Category are required!");
    } else {
        updateEntry();
        $('#dataModal').modal("close");
    }
});

var closeWin = function() {
    window.close();
}