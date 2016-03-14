// you have to clock the icon

function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(true);
        }
    }
    xhr.onerror = function() {
        callback(false);
    }
    xhr.send();
}

var i = 0;

function checkStatus() {
    httpRequest('http://www.google.cn/', function(status) {
        i++;
        if (i % 2 === 0) {
            chrome.tabs.executeScript({
                code: 'document.body.style.backgroundColor="blue"'
            });
        } else {
            chrome.tabs.executeScript({
                code: 'document.body.style.backgroundColor="red"'
            });
        }
        setTimeout(checkStatus, 2000);
    });
}

checkStatus();