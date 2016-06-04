var fs = require('fs');

async function read() {
	return new Promise(function(resolve, reject) {
		fs.readFile('test.md','utf8',function(err, data) {
			if (err) {
				reject(err);
			} else {
				console.log('read file %s', data)
				resolve(data);
			}
		});
	});
}

async function sleep(timeout) {  
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, timeout);
  });
}

(async function() {
  var data = await read();
  console.log('result:',data)
  let start = new Date();

  console.log('start:',start);
  await sleep(1000);
  let end = new Date();
  console.log('end:',end);
})();

// await  *

(async () => {
  let d1 = new Date;
  await * [sleep(100), sleep(200), sleep(500)];
  let d2 = new Date;
  console.log(d2.getTime() - d1.getTime());
})();
