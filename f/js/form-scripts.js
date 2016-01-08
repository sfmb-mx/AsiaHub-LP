$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    //     var name = $("#name").val();
    var email = $("#email").val();
    //     var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "f/php/form-process.php",
        // data: "name=" + name + "&email=" + email + "&message=" + message,
        data: "&email=" + email,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        // var msgClasses = "h3 text-center tada animated text-success";
        var msgClasses = "h4 text-center animated bg-warning";
    } else {
        // var msgClasses = "h3 text-center text-danger";
        var msgClasses = "h4 text-center bg-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
