$(document).ready(function() {
    "use strict";
    // --------------Newsletter-----------------------

    $(".newsletter-signup").ajaxChimp({
        callback: mailchimpResponse,
        url: "http://learningwellness.us8.list-manage.com/subscribe/post?u=b9328d99f806177af525f7cde&amp;id=0315ec35b5" // Replace your mailchimp post url inside double quote "".
    });

    function mailchimpResponse(resp) {
        if(resp.result === 'success') {

            $('.alert-success').html(resp.msg).fadeIn().delay(3000).fadeOut();

        } else if(resp.result === 'error') {
            $('.alert-warning').html(resp.msg).fadeIn().delay(3000).fadeOut();
        }
    };
});
