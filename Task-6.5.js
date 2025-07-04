const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
    };
arrValues = Object.values(obj);
for (i = 0; i < arrValues.length; i += 1) {
    if (Array.isArray(arrValues[i])) {
        for (const element of arrValues[i]) {
            arrValues.push(element);
            }
        arrValues.splice(i, 1);
    }
}
arrValues.splice(2, 1);
arrValues.push('there');
console.log(arrValues);   
