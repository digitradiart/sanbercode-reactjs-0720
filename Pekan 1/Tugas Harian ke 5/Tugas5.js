///////////////////////////////////////////////////////////////////////
// SOAL 1
console.log('---SOAL 1---')
function halo(){
    console.log('Halo Sanbers!')
}
halo()

///////////////////////////////////////////////////////////////////////
// SOAL 2
console.log('\n---SOAL 2---')
function kalikan(num1, num2){
    return num1 * num2
}
console.log(kalikan(12,4))


///////////////////////////////////////////////////////////////////////
// SOAL 3

console.log('\n---SOAL 3---')

console.log('---cara 1---')
function introduce(name, age, address, hobby){
    console.log(`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`)
}
console.log(introduce('DIGITRADIART', 24, 'West Java', 'Design & Code'))

console.log('\n---cara 2---')
function introduce(name, age, address, hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`
}
console.log(introduce('DIGITRADIART', 24, 'West Java', 'Design & Code'))