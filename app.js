var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click", function clickEventHandler() {
    // console.log("Clicked");
    // console.log(txtInput.value);
    outputDiv.innerText = "ahdgha" + txtInput.value;
})