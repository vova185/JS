const transformUpvote = strVal => {
	const hasK = strVal.toLowerCase().includes('k');
  if (hasK) {
  	const numPart = strVal.slice(0, -1);
    return numPart * 1000;
  }
  return Number(strVal);
}

const transformUpvotes = arr => arr.map(transformUpvote);

console.log( transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k']) )