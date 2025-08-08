const createCounter = n => {
		return {
		n,
		set(n) {
		this.n = n;
	  return this;
    },
    count() {
    	this.set(this.n + 1);
	  return this;
		},
    print() {
    	console.log(this.n);
	  return this;
    }
  }
}

const counter = createCounter(5);
counter
  .print()
	.set(0)
	.count()
	.print() 
	.count()
  .print() 