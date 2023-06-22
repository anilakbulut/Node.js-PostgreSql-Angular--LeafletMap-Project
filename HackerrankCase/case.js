function solveProblem(a, b, array) {
    let resultArray = new Array(a).fill(0) /* a elemanlı içerisi tamamen 0 lar ile dolu array olusturuldu */

    for (let index = 0; index < b; index++) {
        /*array'in satırındaki ilk,ikinci ve üçüncü değerleri tutuldu */
        let first = array[index][0];  
        let second = array[index][1];
        let num = array[index][2];

        /*ilk değer ve ikinci değer arasında kalan indexlere üçüncü değer eklendi */
        for (let i = 0; i<a; i++) {
            if( i>= first-1 && i<second){
                resultArray[i] += num;
            }
        }
    }
    let max = Math.max(...resultArray); /*Arraylerdeki maksimum sayılar bulundu */
    console.log("Arrayin son hali: " + resultArray);
    console.log("Maksimum sayı: " + max +"\n");
}

/*
5 3
1 2 100
2 5 100
3 4 100
*/
firstExample = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
];

solveProblem(5, 3, firstExample)


/*
10 3
1 5 3
4 8 7
6 9 1
*/

secondExample = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
];

solveProblem(10, 3, secondExample)
