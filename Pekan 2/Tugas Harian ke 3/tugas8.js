// SOAL 1
// LUAS LINGKARAN
console.log('---SOAL 1---')
let jariJari = 7 //ganti ini
let luasLingkaran = (jariJari) => {
    return Math.PI * jariJari * jariJari
}
console.log('Luas lingkaran dengan jari-jari' + jariJari + 'adalah' + luasLingkaran(jariJari) + ' satuan luas')

// KELILING LINGKARAN
let kelilingLingkaran = (jariJari) => {
    return 2 * Math.PI * jariJari * jariJari
}
console.log('Keliling lingkaran dengan jari-jari ' + jariJari + 'adalah' + kelilingLingkaran(jariJari) + ' satuan panjang')

// ATAU
const jariJari2 = 7
const luasLingkaran2 = (jariJari2) => {
    return Math.PI * jariJari2 * jariJari2
}
console.log('Luas lingkaran dengan jari-jari' + jariJari2 + 'adalah' + luasLingkaran2(jariJari2) + ' satuan luas')
const kelilingLingkaran2 = (jariJari2) => {
    return 2 * Math.PI * jariJari2 * jariJari2
}
console.log('Keliling lingkaran dengan jari-jari ' + jariJari2 + 'adalah' + kelilingLingkaran2(jariJari) + ' satuan panjang')

////////////////////////////////////////////////////////////////////
// SOAL 2
console.log()
console.log('---SOAL 2---')
let kalimat = ''
var gabungKata = (kata1, kata2, kata3, kata4, kata5) => {
    kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`
    return kalimat
}
console.log(gabungKata('saya', 'adalah','seorang','frontend','developer'))

// SOAL 3
console.log('---SOAL 3---')
/*
buatlah class Book yang didalamnya terdapat property name, totalPage, price. lalu buat class baru komik yang extends terhadap buku dan mempunyai property sendiri yaitu isColorful yang isinya true atau false*/

class Book {
    constructor(name, totalPage, price) {
        this.name = name
        this.totalPage = totalPage
        this.price = price
    }
}