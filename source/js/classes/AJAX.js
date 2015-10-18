
class AJAX {
    constructor() {

    }

    post() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
         return xhttp.responseText;
        }
      }
      xhttp.open("POST", "ajax_info.txt", true);
      xhttp.send();
    }

    get() {
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
         return xhttp.responseText;
        }
      }

      xhttp.open("GET", "ajax_info.txt", true);
      xhttp.send();

    }
}
