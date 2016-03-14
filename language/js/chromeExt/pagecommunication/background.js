chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message == 'Hello') {
        sendResponse('Hello from background.');
    }
});

chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
        type: 'hello'
    });
});