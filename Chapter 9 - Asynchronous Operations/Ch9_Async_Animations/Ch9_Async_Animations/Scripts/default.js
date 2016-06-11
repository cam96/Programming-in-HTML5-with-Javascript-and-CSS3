var milliseconds = 1000;
var opacity = 0.5;

$(document).ready(function () {
    $('#btnShowMessage').click(displayTimeAsync);
    $('#messageOk').click(hideMessageAsync);
})

function displayCoverAsync() {
    return $('#cover').fadeTo(milliseconds, opacity).promise();
}

function showMessageContentAsync(message) {
    $('#message').html(message);
    $('#messageBox').show();
    return $('#messageContent').slideDown(milliseconds).promise();
}

function showMessageAsync(message) {
    var coverPromise = displayCoverAsync();
    var messagePromise = coverPromise.pipe(function() {
        return showMessageContentAsync(message);
    });

    return messagePromise;
}

function displayTimeAsync() {
    var message = 'The time is now ' + getTime();
    return showMessageAsync(message);
}

function getTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    return hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
}

function hideMessageContentAsync(message) {
    var promise = $('messageContent').slideUp(milliseconds).promise();
    promise.done(function () { $('#messageBox').hide(); });
    return promise;
}

function hideCoverAsync() {
    return $('#cover').fadeOut(milliseconds).promise();
}

function hideMessageAsync() {
    var messagePromise = hideMessageContentAsync();
    var coverPromise = messagePromise.pipe(function () {
        return hideCoverAsync();
    })
    return coverPromise;
}