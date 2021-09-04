window.onload = function () {
    document.getElementById('write-message').addEventListener('focus', (event) => {
        toggleInputMessageForm();
    }, true);
    
    document.getElementById('write-message').addEventListener('blur', (event) => {
        toggleInputMessageForm();
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

function setTargetTransitionBySeconds(target, seconds) {
    target.style.transition = "all " + seconds + "s";
}

function toggleInputMessageForm() {
    
    console.log('toggleInputMessageForm');

    // get target element
    let target = document.getElementById('input-message__wrapper');
    
    // set form transition time
    setTargetTransitionBySeconds(target, 0.3)

    // get target height
    let target_height = getComputedStyle(target).height;

    if (target_height == 0) {
        slideUp(target);
    } else {
        slideDown(target);
    }
}

function slideUp(target) {
    target.style.height = 0;
}

function slideDown(target) {
    target.style.height = '55px';
}
