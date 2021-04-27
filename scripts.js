function generateButtons() {
    var numberOfButtons = $('#generate').val();
    var correctButton = Math.floor(Math.random() * numberOfButtons) + 1;
    for (let i = 1; i <= numberOfButtons; i++) {
        $('#freeSpace').append('<button type="button" id="' + i + '"class="btn btn-secondary m-2"' +
        'onclick="return checkButton(' + correctButton + ', ' + i + ');">Button ' + i + '</button>');
    }
    return false;
}

function checkButton(correctButton, clickedButton) {
    $('#' + correctButton).removeClass('btn-secondary').addClass('btn-success');
    if (correctButton == clickedButton)
        alert("Congratulations");
    else {
        $('#' + clickedButton).removeClass('btn-secondary').addClass('btn-danger');
        alert("Try again:((");
    }
    $('#controllerZone').append('<button type="submit" class="btn btn-info mt-4 mx-4 floar-right rounded-pill"' +
    'onclick="return reloadPage();">Play again!</button>');
    return false;
}

function reloadPage() {
    location.reload();
    return true;
}
