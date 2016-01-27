function URLParser() {
    var x = decodeURIComponent(document.URL);
    var xsplit = x.split("");

    if (xsplit[39] == "?" ) {
        var newPathname = "";
        for (i = 44; i < xsplit.length; i++) {
            newPathname += xsplit[i];
        }

        var urlTextBox = document.getElementById("msg");
        urlTextBox.value = urlTextBox.value + newPathname;
    } else {
        document.getElementById("myuri").innerHTML = "Please enter a URL";
    }

    var nameTextBox = document.getElementById("name");
    nameTextBox.value = nameTextBox.value + "Our best customer";
}

// http://testing02.bizland.biz/cform.html?cur=
// http://testing02.bizland.biz/cform.html?cur=http%3A%2F%2Fwww.amazon.com%2FSeagate-Expansion-Desktop-External-STEB5000100%2Fdp%2FB00TKFEEBW%2Fref%3Dsr_1_3%3Fs%3Dpc%26ie%3DUTF8%26qid%3D1453912039%26sr%3D1-3%26keywords%3Dhard%2Bdrive
