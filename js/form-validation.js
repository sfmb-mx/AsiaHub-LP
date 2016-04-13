$(document).ready(function($) {

    // hide messages
    $(".error").hide();
    $(".success").hide();

    $('#contactForm input').click(function(e) {
        $(".error").fadeOut();
    });

    // on submit...
    $("#contactForm #submit").click(function() {
        $(".error").hide();

        //required:

        // idstore
        var name = $("input#idstore").val();
        if(name == ""){
            //$("#error").fadeIn().text("Id store required.");
            $('#fname').fadeIn('slow');
            $("input#idstore").focus();
            return false;
        }

        //email (check if entered anything)
        var email = $("input#email").val();
        //email (check if entered anything)
        if(email == ""){
            //$("#error").fadeIn().text("Email required");
            $('#fmail').fadeIn('slow');
            $("input#email").focus();
            return false;
        }

        //email (check if email entered is valid)

        if (email !== "") {  // If something was entered
            if (!isValidEmailAddress(email)) {
                $('#fmail').fadeIn('slow'); //error message
                $("input#email").focus();   //focus on email field
                return false;
            }
        }

        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
            return pattern.test(emailAddress);
        };

        // comments
        var comments = $("#msg").val();

        if(comments == "") {
            //$("#error").fadeIn().text("Email required");
            $('#fmsg').fadeIn('slow');
            $("input#msg").focus();
            return false;
        }
        console.log(name);

    });

    // on success...
    function success(){
        $("#success").fadeIn();
        $("#contactForm").fadeOut();
    }

    return false;
});
