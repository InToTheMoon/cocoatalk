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
    // get target element
    let target = document.getElementById('input-message-form');

    // set form transition time
    setTargetTransitionBySeconds(target)

    // get target height
    let target_height = target.style.height;

    if (target_height == 0) {
        slideUp(target);
    } else {
        slideDown(target);
    }
}

function slideUp(target) {
    // target.style.
}

function slideDown(target) {

}
