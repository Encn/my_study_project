function bar(cb){
	setTimeout(cb,300);
}
async function foo() {
  await bar();
}