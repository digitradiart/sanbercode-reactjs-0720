// TUGAS HARI KE 4 - LOOP & ARRAY
/* SOAL 1 */
console.log('\n---SOAL NOMOR SATU---');
console.log('LOOPING PERTAMA: INCREMENT');
var angka1 = 1;
while (angka1 < 21) {
    if (angka1 % 2 == 0) {
        console.log(`${angka1} - I love coding`);
    }
    angka1++; 
}

console.log('LOOPING KEDUA: DECREMENT');
var angka2 = 21;
while (angka2 > 1) {
    if (angka2 % 2 == 0) {
        console.log(`${angka2} - I will become a frontend developer`);
    }
    angka2--; 
}

//////////////////////////////////////////////////////////////////
/* SOAL 2 */
console.log('\n---SOAL NOMOR DUA---');
for(var number = 1; number < 21; number++) {
    if (number%2 == 1 && number%3 === 0){ //ganjil dan kelipatan 3
        console.log(`${number} - I Love Coding`);
    } else if(number%2 == 0) { //genap
        console.log(`${number} - Berkualitas`); 
    } else {
        console.log(`${number} - Santai`);
    }
}

//////////////////////////////////////////////////////////////////
/* SOAL 3 */
console.log('\n---SOAL NOMOR TIGA---');
console.log('\ncara 1');
var cetak = '';
var totalBaris = 7;
for (row = 1; row <=  totalBaris; row++){
    for (var col = 1; col <= row; col++){
        cetak += '#';
        var cetakS = cetak.substr(0, row); //ambil string pertama sampai string ke-row
    }
    console.log(`${cetakS} row:${row}`);
}

console.log('\ncara 2');
var cetak = '';
var totalBaris = 7;
for(baris = 1; baris <= totalBaris ; baris++){
    cetak += '#';
    console.log(`${cetak} ${baris}`);
}

console.log('\ncara 3');
var stringSaya = '#';
var totalBaris = 7;
while (stringSaya.length <= totalBaris) {
    console.log(`${stringSaya}`);
    stringSaya += '#';
}

//////////////////////////////////////////////////////////////////
/* SOAL 4 */
console.log('\n---SOAL NOMOR EMPAT---');
var kalimat="saya sangat senang belajar javascript";
console.log(kalimat);
var newKalimat = kalimat.split(" "); //menghapus spasi
console.log(newKalimat);

//////////////////////////////////////////////////////////////////
/* SOAL 5 */
console.log('\n---SOAL NOMOR LIMA---');
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
// var newBuah = console.log(daftarBuah.sort().join('\n'));
var newBuah = console.log(daftarBuah.sort());
for (var k = 0; k < 5; k++) {
    console.log(daftarBuah[k]);
}