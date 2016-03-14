chrome.runtime.sendMessage('Hello', function(response){
    document.write(response);
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
    }
);