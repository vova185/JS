const print = (iterable) => {
    if (iterable instanceof Map) {
        for (const[key, value] of iterable) {
        console.log(`key: ${key}, value: ${value}`);
        }
    };
    if (iterable instanceof Set) {
        for (elem of iterable) {
        console.log(`value: ${elem}`);
        }
    }; 
    if (iterable instanceof Map === false && iterable instanceof Set === false) {
        console.log('Массив не Map и не Set')
    }
}
print(new Map([['first',2], ['second', 3]]))
print([['first',2], ['second', 5]])
print(new Set(['first',2,'second', 3]))