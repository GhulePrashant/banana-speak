var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranlationUrl(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error occured.", error);
    alert("Something wrong with the server. Try after some time.");
}

btnTranslate.addEventListener("click", function clickEventHandler() {
    // console.log("Clicked");
    // console.log(txtInput.value);
    // outputDiv.innerText = "ahdgha" + txtInput.value;

    var inputText = txtInput.value;

    fetch(getTranlationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var transaltedText = json.contents.translated;
            outputDiv.innerText = transaltedText;
        })
        .catch(errorHandler);
})