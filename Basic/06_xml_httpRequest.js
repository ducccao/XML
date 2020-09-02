let log = console.log;

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     // Typical action to be performed when the document is ready:
//     document.getElementById("demo").innerHTML = xhttp.responseText;
//   }
// };
// xhttp.open("GET", "filename", true);
// xhttp.send();

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", "03_XML_attribute.xml", true);
  xhttp.send();
}

// handle error IE

if (window.XMLHttpRequest) {
  // code for modern browsers
  xmlhttp = new XMLHttpRequest();
} else {
  // code for old IE browsers
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
