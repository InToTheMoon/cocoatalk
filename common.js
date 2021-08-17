function login() {
    showLoadingPage();    
}

function convertToMiliSeconds(seconds) {
    return seconds * 1000;
}

function showLoadingPage() {
    window.location.href='loading.html';
}

function showHomePage() {
    return window.location.href='home.html';
}