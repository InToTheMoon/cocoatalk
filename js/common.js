window.onload = function () {
    document.getElementById('write-message').addEventListener('focus', (event) => {
        // get target element
        let message__wrapper = document.getElementById('input-form__wrapper');

        // set form transition time
        setTargetTransitionBySeconds(message__wrapper, 0.3)
        setTargetTransitionBySeconds(event.target, 0.3)

        // slide down
        changeTargetHeight(message__wrapper, 0);
        changeTargetWidth(event.target, '100%');
        changeTargetMarginLeft(event.target, 0);
        changeTargetMarginRight(event.target, 0);
        message__wrapper.style.visibility = 'hidden';
    }, true);
    
    document.getElementById('write-message').addEventListener('blur', (event) => {
        // get target element
        let message__wrapper = document.getElementById('input-form__wrapper');

        // set form transition time
        setTargetTransitionBySeconds(message__wrapper, 0.3)
        setTargetTransitionBySeconds(event.target, 0.3)

        // slide up
        changeTargetHeight(message__wrapper, '55px');
        changeTargetWidth(event.target, '100%');
        changeTargetMarginLeft(event.target, '5rem');
        changeTargetMarginRight(event.target, '2rem');
        message__wrapper.style.visibility = 'visible';
    }, true);
}

function login() {
    showLoadingPage();    
}

function showLoadingPage() {
    window.location.href='loading.html';
}

function showChatsPage() {
    window.location.href='chats.html';
}

function showChatPage() {
    window.location.href='chat.html';
}

function showFindPage() {
    window.location.href='find.html';
}

function showMorePage() {
    window.location.href='more.html';
}

function setTargetTransitionBySeconds(target, seconds) {
    target.style.transition = "all " + seconds + "s";
}

function changeTargetHeight(target, change_value) {
    target.style.height = change_value;
}

function changeTargetWidth(target, change_value) {
    target.style.width = change_value;
}

function changeTargetMarginLeft(target, change_value) {
    target.style.marginLeft = change_value;
}

function changeTargetMarginRight(target, change_value) {
    target.style.marginRight = change_value;
}