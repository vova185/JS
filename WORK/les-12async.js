const delay = ms => {
	return new Promise((res) => setTimeout(res, ms));
}

(async () => {
  for (let i = 1; i <= 10; ++i) {
		await delay(100);
    console.log(i);
  }
})();