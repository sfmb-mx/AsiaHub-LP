function URLParser() {
    var x = decodeURIComponent(document.URL);
    var xsplit = x.split("");

    var newPathname = "";
    for (i = 37; i < xsplit.length; i++) {
        newPathname += xsplit[i];
    }

    document.getElementById("myuri").innerHTML = newPathname;

    var urlTextBox = document.getElementById("myUrl");
    urlTextBox.value = urlTextBox.value + newPathname;
}
