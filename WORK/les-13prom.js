 const promiseTimeout = (ms, promise) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Timed out in ${ms} ms.`));
    }, ms);
  });

  return Promise.race([timeout, promise]);
};


// ****
const fetchData = () => new Promise((res, rej) => {
	setTimeout(() => {
  	res('Fetched data');
  }, 1001)
})

promiseTimeout(1000, fetchData())
	.then(msg => console.log(msg))
  .catch(err => console.log(err))