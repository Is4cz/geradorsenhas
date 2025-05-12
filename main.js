document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("copyBtn").addEventListener("click", function() {
        let copyText = document.getElementById("passwordCamp");

        console.log(copyText.value);
        navigator.clipboard.writeText(copyText.value);
    });

    document.getElementById("generateButton").addEventListener("click", function() {
        document.getElementById("passwordCamp").value = "";

        let lowerCaseBox = document.getElementById("lowercaseLetter");
        let capitalLetterBox = document.getElementById("capitalLetters");
        let numbersBox = document.getElementById("numbers");
        let symbolsBox = document.getElementById("symbols");
        let passwordLength = document.getElementById("numberCharactersField");

        let characteres = ""

        let randoms = {
            1 : "abcdefghijklmnopqrstuvwxyz",
            2 : "0123456789",
            3 : "!@#$%^&*()_+",
        }

        if (lowerCaseBox.checked) {
            characteres += randoms[1];
        }
        if (capitalLetterBox.checked) {
            characteres += randoms[1].toUpperCase();
        }
        if (numbersBox.checked) {
            characteres += randoms[2];
        }
        if (symbolsBox.checked) {
            characteres += randoms[3];
        }

        if (characteres.length > 0) {
            for (var i = 0; i < passwordLength.value; i++) {
                let randomIndex = Math.floor(Math.random() * characteres.length);
                let randomChar = characteres[randomIndex];
                document.getElementById("passwordCamp").value += randomChar;
            }
        }
    });
});