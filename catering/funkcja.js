function checkLetters() {
    var input = document.getElementById('dodatki').value.trim();
    var onlyLetters = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/.test(input);
    document.getElementById('onlyLetters').checked = onlyLetters;
}

function checkLettersUlica() {
    var input = document.getElementById('ulica').value.trim();
    var onlyLettersulica = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/.test(input);
    document.getElementById('onlyLettersUlica').checked = onlyLettersulica;
}

function checknumbersNr() {
    var input = document.getElementById('nr').value.trim();
    var onlynumbersNr = /^[1-9\s]+$/.test(input);
    document.getElementById('onlynumbersNr').checked = onlynumbersNr;
}

function checknumbersWaga() {
    var input = document.getElementById('waga').value.trim();
    var onlynumbersWaga = /^[0-9]+(?:\.[0-9]+)?$/.test(input) && parseFloat(input) > 0;
    document.getElementById('onlynumbersWaga').checked = onlynumbersWaga;
}

function checknumbersTelefon() {
    var input = document.getElementById('telefon').value.trim();
    var onlynumbersTelefon = /^[1-9]\d{2}[- ]?\d{3}[- ]?\d{3}$/.test(input);
    document.getElementById('onlynumbersTelefon').checked = onlynumbersTelefon;
}

function submitForm() {
    var checkboxes = [
        'onlyLetters',
        'onlyLettersUlica',
        'onlynumbersNr',
        'onlynumbersWaga',
        'onlynumbersTelefon'
    ];

    var allChecked = checkboxes.every(function(id) {
        return document.getElementById(id).checked;
    });

    var result = document.getElementById('submitResult');
    if (allChecked) {
        result.textContent = 'Dziękujemy za złożenie zamówienia!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Formularz nie został wypełniony poprawnie';
        result.style.color = 'red';
    }
}