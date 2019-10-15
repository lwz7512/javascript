function asyncTask(i) {
  return new Promise(resolve => resolve(i + 1));
}
async function runAsyncTasks() {
  const res1 = await asyncTask(0);
  const res2 = await asyncTask(res1);
  const res3 = await asyncTask(res2);
  
  return res3
  // return "Everything done"
}
runAsyncTasks().then(result => console.log(result));