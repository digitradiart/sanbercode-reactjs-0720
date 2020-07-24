/* ///////////////////////////////////////////////////////////////////////
SOAL 1
Tulislah sebuah function dengan nama halo() yang mengembalikan nilai “Halo Sanbers!” yang kemudian dapat ditampilkan di console.
 //   Tulis code function di sini
console.log(halo()) // "Halo Sanbers!"  
*/
console.log('---SOAL 1---')
function halo(){
    console.log('Halo Sanbers!')
}
halo();

/* ///////////////////////////////////////////////////////////////////////
SOAL 2
Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim.
// Tulis code function di sini
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48
*/

console.log('\n---SOAL 2---')
function kalikan(num1, num2){
    return num1 * num2
}

var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)


/* ///////////////////////////////////////////////////////////////////////
SOAL 3
Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: “Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!”

// Tulis code function di sini
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 
*/
console.log('\n---SOAL 3---')
function introduce(name, age, address, hobby){
    console.log(`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`)
}
var name = "DIGITRADIART"
var age = 24
var address = "West Java"
var hobby = "Design & Code"
introduce(name, age, address, hobby)