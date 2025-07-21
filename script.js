let URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

let generateBtn = document.querySelector("button");

generateBtn.addEventListener("click", function () {
    let userInput = qrText.value.trim();

    if (userInput.length > 0) {
        
        generateBtn.innerText = "Generating...";
        generateBtn.style.backgroundColor = "#333"; 

       
        qrImage.src = URL + encodeURIComponent(userInput);
        imgBox.style.display = "block";

        
        qrImage.onload = function () {
            generateBtn.innerText = "Generate QR Code";
            generateBtn.style.backgroundColor = "#494eea"; 
            alert("Your QR has been generated!");
        };
    } else {
        alert("⚠️ Please enter some text or a URL.");
        imgBox.style.display = "none";
    }
});
