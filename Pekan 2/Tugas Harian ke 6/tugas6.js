// SOAL 1
console.log('\n---SOAL 1---')
var Orang = {
    nama: 'Asep',
    jenisKelamin: 'Laki-laki',
    hobi: 'baca buku',
    tahunLahir: 1992
}

console.log(Orang.nama)
console.log(Orang.jenisKelamin)
console.log(Orang.hobi)
console.log(Orang.tahunLahir)

// SOAL 2
console.log('\n---SOAL 2---')

var arrObjBuah = [
    {nama: 'strawberry', warna: 'merah', 'ada bijinya': 'tidak', harga: 9000 },
    {nama: 'jeruk', warna: 'oranye', 'ada bijinya': 'ada', harga: 8000},
    {nama: 'Semangka', warna: 'Hijau & Merah', 'ada bijinya': 'ada', harga: 10000},
    {nama: 'Pisang', warna: 'Kuning', 'ada bijinya': 'tidak', harga: 5000}
]
// Munculkan data pertama
console.log(arrObjBuah[0])

// SOAL 3
var arrDataFilm = []
var objectFilm1 = {
    nama: '5 cm',
    durasi: '2 jam',
    genre: 'drama',
    tahun: 2012
}

var objectFilm2 = {
    nama: 'A',
    durasi: '3 jam',
    genre: 'komedi',
    tahun: 2020
}

var objectFilm3 = {
    nama: 'B',
    durasi: '4 jam',
    genre: 'sejarah',
    tahun: 1945
}

function tambahFilm(x) {
    arrDataFilm.push(x);
    return arrDataFilm;
}
console.log('objectFilm1')
console.log(tambahFilm(objectFilm1))
console.log('objectFilm2')
console.log(tambahFilm(objectFilm2))
console.log('objectFilm3')
console.log(tambahFilm(objectFilm3))
console.log('arrDataFilm')
console.log(arrDataFilm)


// SOAL 4
console.log('\n---SOAL 4---')
var legs, cold_blooded;
class Animal {
    constructor(legs, cold_blooded){
        this.legs = legs;
        this.cold_blooded = cold_blooded;
     }
    get anim() {
        return this._legs;
    }
    set anim(item) {
        this._legs = item;
    }
}
var myAnim = new Animal(4, false);
console.log(myAnim.legs)
console.log(myAnim.cold_blooded)
console.log(myAnim)

// SOAL 5 UBAH FUNCTION BERIKUT MENJADI CLASS
console.log('\n---SOAL 5---')

class Clock {
  constructor ({ template }) {
    var timer;
    function render() {
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      var output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
      console.log(output);
    }

    this.stop = function() {
      clearInterval(timer);
    };

    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };  
  }
}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 