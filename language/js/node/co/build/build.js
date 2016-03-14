var path = require('path');
var child_process = require('child_process');
var chokidar = require('chokidar');
var log = console.log.bind(console);
var watcher = chokidar.watch([path.join(__dirname, "../app"), path.join(__dirname, "../test")], {
	ignored: /[\/\\]\./,
	persistent: true
});

var build = function() {
	//node test/test_index.js
    child_process.exec("npm test" /*command*/ , {} /*options, [optiona]l*/ , function(err, stdout, stderr) {
        log('[stdout]: \n' + stdout);
        log('[stderr]: \n' + stderr);
    });
}

build();
// Add event listeners.
watcher
	.on('add', function(path) {
		log('File', path, 'has been added');
		build();
	})
	.on('change', function(path) {
		log('File', path, 'has been changed');
		build();
	})
	.on('unlink', function(path) {
		log('File', path, 'has been removed');
		build();
	})
	.on('addDir', function(path) {
		log('Directory', path, 'has been added');
		build();
	})
	.on('unlinkDir', function(path) {
		log('Directory', path, 'has been removed');
		build();
	})
	.on('error', function(error) {
		log('Error happened', error);
	})
	.on('ready', function() {
		log('Initial scan complete. Ready for changes');
	})
	.on('raw', function(event, path, details) {
		log('Raw event info:', event, path, details);
	});