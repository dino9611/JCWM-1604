// array 
var things= ["buku","pulpen","laptop"]

// console.log(things)

// cara mengakses array
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])

// things[0]='books'
// things[5]='calender'
// console.log(things[0],'setelah diubah')
// console.log(things,'setelah diubah')
// console.log(things.length,' adalah panjang array')

// .length untuk menghitung panjang array
// .length dihitung dari 0
// console.log(things[0])
// console.log(things[things.length-1], 'mendapatkan data dari index terakhir')

// .push adalah method untuk menambahkan data di ujung array
// things.push('jacket')
// // console.log(things)
// things.push('apple','banana')
// console.log(things)

// .pop adalah method untuk menghapus data dalam array dari belakang
// var barangDihapus= things.pop()
// console.log(barangDihapus)
// things.pop()
// console.log(things)

// .unshift digunakan untuk menambahkan data didalam array dari depan
// things.unshift('apple')
// console.log(things)

// .shift digunakan untuk menghapus element pertama array
// things.shift()
// console.log(things)

// splice bisa untuk menghapus data di index tertentu dan menambahkan data juga 
things= ["buku","pulpen","laptop",'jam','tv']

// things.splice(1,1,'pena')

// console.log(things)
// delete things[1]
// things[1]='pena'
// delete things[3]
// things[3]='hp'

// buat memotong array menggunakan .slice
// var copy=things.slice(1,4)

// .includes digunakan untuk mengecek suatu data didalam array
// var b=things.includes('pulpen')

// .indexof digunakan untuk mengecek suatu data didalam array dan mengembalikan indexnya jika data ditemukan
// jika tidak akan mengembalikan -1
// var b=things.indexOf('Laptop')

// var perbandingan= 'buku' < 'baku'
// .sort digunakan untuk sorting by default dari kecil kebesar
// things.sort()
// .reverse() digunakan membalik array
// things.reverse()

// .join() digunakan hanya untuk array of strings
// gunanya untuk menggabungkan string yang ada didalam array

// var thingsJoin=things.join()

// var things=['mask','pen']
// var fruits=['apple','banana']
// var animals=['rabbit','cat']

// var two= fruits.concat(things)
// var tiga= things.concat(fruits,animals)
// console.log(things)
// console.log(two)
// console.log(tiga)

// var things=[
//     ['red pen','blue pen'],
//     ['digital clock','analog clock'],
//     ['footsal shoes','badminton shoes']
// ]

// var numbers=[[1,4,[8]],[6,8,9,[10,4,[15]]],[3]]

// console.log(numbers[1][3][2][0])

// var kategoriFilm=['horror','scifi','romance','crime','thriller','adventure','animation']
// var message='list kategory film :'
// console.log(message)

// for(var i=kategoriFilm.length-1;i>=0;i--){
//     console.log(kategoriFilm[i])
// }

// console.log(kategoriFilm[1])
// console.log(kategoriFilm[2])
// console.log(kategoriFilm[3])
// console.log(kategoriFilm[4])
// console.log(kategoriFilm[5])


// exercise 1
var names=['alex','elena','daniel','chaplin','bob']
console.log(names.sort().reverse())

// A1A2..A16


// K1...K16

//
// []
// [
//     [A1,A2...A16],
//     ...
//     [K1,K2...K16],
// ] 

// for dalam for
// menggunakan push
//setiap looping buat satu array [A1,A2]
// ARRAY TERSEBUT DI PUSH KE DALAM ARRAY BANGKU

var Baris='ABCD'.split('')
console.log(Baris)
var horizontal=5
var bangku=[]
// var arrkosong
// arrkosong.push('A'+1)
// arrkosong.push('A'+2)
// arrkosong.push('A'+3)
// arrkosong.push('A'+4)
// arrkosong.push('A'+5)
// bangku.push(arrkosong)
// arrkosong=[]
// arrkosong.push('B'+1)
// arrkosong.push('B'+2)
// arrkosong.push('B'+3)
// arrkosong.push('B'+4)
// arrkosong.push('B'+5)
// bangku.push(arrkosong)

// console.log(arrkosong)
var arrkosong
for(var i=0;i<Baris.length;i++){
    arrkosong=[]
    for(var j=1;j<=horizontal;j++){
        arrkosong.push(Baris[i]+j)
    }
    bangku.push(arrkosong)
}

var numbers = 123 
//321 
// 149

console.log(bangku)

