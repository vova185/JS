function repeatWord(word, count) {
    let row = '';
    for (let i = 1; i <= count; i++) {
        let res = `${word}${i}`;
        if (i != count) {
            row += (`${res}, `);
        } else {
        row += res;}
    }
    alert(row);
}

repeatWord('Word', 4);
        
   