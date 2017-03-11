//JavaScript
console.log("JavaScript");
//Insert a textarea element into the DOM and fill it with the JSON structure from the first task.
console.log("Insert a textarea element into the DOM and fill it with the JSON structure from the first task.");
var div = document.getElementById("example");
div.innerHTML = "{ \n" + converToHtml(testJson, 1) + "}";
//Explores a JSON and returns a string with the html that will be displayed

function converToHtml(json, deep) {
    var html = "";
    var totalKeys = Object.keys(json);
    totalKeys.forEach(function(key) {
        if (typeof(json[key]) === "object" && json[key] != null) {
            var structure = {};
            if (json[key].length == null) {
                structure = {
                    left: "{",
                    right: "}"
                };
            } else {
                structure = {
                    left: "[",
                    right: "]"
                };
            }
            var keyToUse = "";
            if (!isNumber(key)) {
                keyToUse = key + ":";
            }
            html += Array(deep).join("\t") + keyToUse + structure.left + "\n" +
                converToHtml(json[key], deep + 1) + "  \n" +
                Array(deep).join("\t") + structure.right + ",  \n";

        } else {
            if (isNumber(key)) {
                html += json[key] + ",  ";
            } else {
                html += Array(deep).join("\t") + key + " : " + json[key] + ",\n";
            }
        }
    });
    return html;
}

function isNumber(exp) {
    return /^\d+$/.test(exp);
}

//2. Make an AJAX request to www.ipify.org API to retrieve your machine's public IP. Log only the IP address to the console.

(
    function ajaxRequest() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                console.log("JavaScript");
                console.log("2. Make an AJAX request to www.ipify.org API to retrieve your machine's public IP. Log only the IP address to the console.");
                if (xmlhttp.status == 200) {
                    console.log(JSON.parse(xmlhttp.responseText).ip);
                } else if (xmlhttp.status == 400) {
                    console.log("There was an error 400");
                }
            }
        };
        xmlhttp.open("GET", 'https://api.ipify.org?format=json', true);
        xmlhttp.send();
    })();