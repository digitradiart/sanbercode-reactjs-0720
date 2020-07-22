// SOAL 1
// gabungkan variabel-variabel tersebut agar menghasilkan output: saya Senang belajar JAVASCRIPT
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
console.log(kataPertama + ' ' + kataKedua.substr(0,1).toUpperCase() + kataKedua.substr(1)   + ' ' + kataKetiga + ' ' + kataKeempat.toUpperCase());
//console.log(`${kataPertama} ${kataKedua}.substr(0,1).toUpperCase() + ${kataKedua}.substr(1)   ${kataKetiga}  ${kataKeempat}.toUpperCase()`);


// SOAL 2
// output: ubah lah variabel diatas ke dalam integer dan lakukan jumlahkan semua variabel dan tampilkan dalam output
var kataPertama = '1';
var kataKedua = '2';
var kataKetiga = '4';
var kataKeempat = '5';

var A = Number(kataPertama);
var B = Number(kataKedua);
var C = Number(kataKetiga);
var D = Number(kataKeempat);
jumlah = console.log(A + B + C + D);

// SOAL 3
/* output:
Kata Pertama: wah
Kata Kedua: javascript
Kata Ketiga: itu
Kata Keempat: keren
Kata Kelima: sekali
 */
var kalimat = 'wah javascript itu keren sekali'; 
var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substr(4, 10);
var kataKetiga = kalimat.substr(15, 3);
var kataKeempat = kalimat.substr(19, 5);
var kataKelima = kalimat.substring(25);


console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// SOAL 4
/* buatlah variabel seperti di bawah ini
var nilai;
pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut dengan angka tersebut. lalu buat lah pengkondisian dengan if-elseif dengan kondisi

nilai >= 80 indeksnya A
nilai >= 70 dan nilai < 80 indeksnya B
nilai >= 60 dan nilai < 70 indeksnya c
nilai >= 50 dan nilai < 60 indeksnya D
nilai < 50 indeksnya E
*/

//var nilai = prompt('Masukkan nilai: ');
var nilai = 98;
console.log(nilai);
if (nilai >= 80 && nilai <=100) {
    console.log('indeksnya A');
} else if (nilai >= 70 && nilai < 80) {
    console.log('indeksnya B');
} else if (nilai >= 60 && nilai < 70) {
    console.log('indeksnya C');
} else if (nilai >= 50 && nilai < 60) {
    console.log('indeksnya D');
} else if (nilai >= 0 && nilai < 50){
    console.log('indeksnya E');
} else {
    console.log('invalid');
}


// SOAL 5
/* buatlah variabel seperti di bawah ini
var tanggal = 22;
var bulan = 7;
var tahun = 2020;

ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan, lalu muncul kan string nya dengan output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing)
*/
var tanggal = 17;
var tahun = 1945;

var bulan = 8;
switch(bulan) {
    case 1: {
        var bulan = 'Januari';
        break;
    }
    case 2: {
        var bulan = 'Februari';
        break;
    }
    case 3: {
        var bulan = 'Maret';
        break;
    }
    case 4: {
        var bulan = 'April';
        break;
    }
    case 5: {
        var bulan = 'Mei';
        break;
    }
    case 6: {
        var bulan = 'Juni';
        break;
    }
    case 7: {
        var bulan = 'Juli';
        break;
    }
    case 8: {
        var bulan = 'Agustus';
        break;
    }
    case 9: {
        var bulan = 'September';
        break;
    }
    case 10: {
        var bulan = 'Oktober';
        break;
    }
    case 11: {
        var bulan = 'November';
        break;
    }
    case 12: {
        var bulan = 'Desember';
        break;
    }

    default: {
        var bulan = 'invalid';
    }
}

console.log(`Hari kemerdekaan Indonesia adalah ${tanggal} ${bulan} ${tahun}`);