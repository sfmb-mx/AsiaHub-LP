"use strict";

document.getElementById('contactForm').addEventListener('submit', readStoreData);

function readStoreData(event) {
    // event.preventDefault();

    var ids = document.getElementById('idstore').value,
        em = document.getElementById('email').value,
        root = "http://pt.aliexpress.com/store/all-wholesale-products/",
        ext = ".html",
        myurl = root + ids + ext;


    // $.get(myurl, function(data, status){
    //     alert("Data: " + data + "\nStatus: " + status);
    // });

    document.cookie = "mymsg = " + myurl;

    sessionStorage.passUrl = ids;

    console.log('Your variables of interest:');
    console.log(ids);
    console.log(em);
    console.log(myurl);
    console.log(document.cookie);
}

function myResults() {
    var storeNumber = sessionStorage.passUrl;

    document.getElementById('results').innerHTML = 'Dear supplier, your store: <b>' + storeNumber + '</b> will be processed to submission.<br><br>We will send you an email in 24 hours maximum!<br>Thank you!';

    document.getElementById('xs-results').innerHTML = 'Dear supplier, your store: <b>' + storeNumber + '</b> will be processed to submission.<br><br>We will send you an email in 24 hours maximum!<br>Thank you!';
}
