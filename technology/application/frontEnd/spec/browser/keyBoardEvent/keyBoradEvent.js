/**
 * KeyboradEevent
 *
 * inherit from UIEvent and Event
 */

/**
 *
 * create a Keyboard Event (constructor)
 *
 * event = new KeyboardEvent(typeArg[, KeyboardEventInit]);
 */

var event = new KeyboardEvent('keydown', {
    code: 'Digit2',
    altKey: false,
    charCode: 0,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    returnValue: true,
    repeat: false,
    which: 50,
    location: 0,
    keyCode: 50,
    isTrusted: true
});

document.getElementById('input').addEventListener('keydown', (e) => {
    console.log(e);
});

document.getElementById('input').dispatchEvent(event);

document.getElementById('input').dispatchEvent(event);

document.getElementById('input').dispatchEvent(event);

document.getElementById('input').dispatchEvent(event);
