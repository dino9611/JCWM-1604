// var time=60 

// var timer= setInterval(()=>{
//     console.log(time)
//     time--
//     if(time <0){
//         clearInterval(timer)
//     }
// },1000)

// setInterval(cb, x);
// setinterval berguna untuk menjalankan callback didalamnya setiap x miliseconds

// setTimeout(cb,x)
// setTimeout(() => {
//     console.log('settimeout')
// }, 3000);
//settimeout akan menjalan kan function /cb didalamanya setelah x milisecond


console.log('line 6')

var nums=[1,2,3,4]

var ganjil=[3,5,7]

var ganjil=[9,...ganjil]

// console.log(ganjil)


var obj={
    username:'dino',
    password:'brando'
}
// console.log(obj)
// cara edit object
// obj.username='dio'
// cara lain
// obj['username']='dio'
//cara nambah properti object
// obj['stand']='star platinum'
//cara lain
// obj.stand='star platinum'
// spread operator
obj={...obj,username:'dio',stand:'star platinum'}


// destructuring object

// var username= obj.username
// var password = obj.password

// var {username,password} = obj

// console.log(name)
// console.log(password)

var user={}

var name='gon'
var password='batu'
console.log(user)
// user.username=username
// user.password=password
//
// user={...user,username,password}
// sama dengan
// user={...user,username:username,password:password}
// console.log(user)

// PR
// buatlah function untuk mengecek plat kendaraan plat 
// yang diperbolehkan sesuai tangal hari ini ganjil atau genap
// contoh tanggal hari ini 4 genap

console.log(cekPlat('B 1234 ERD')) // boleh lewat
console.log(cekPlat('BE 1239 AD')) // tidak boleh lewat
console.log(cekPlat('Bk 2344 CD')) // boleh lewat

// cari angka terbesar dan terkecil dari satu buah array 

console.log(angkaMaxMin([1,200,5,6,10],'min')) //1
console.log(angkaMaxMin([1,200,5,6,10],'max')) //200


// solve kasus koin ada koin 25sen,10sen,5sen,1sen 
// jika harus bayar 61 sen 
// berapa jumlah koin 
// jawabannya 4 koin 
// buat functionnya

console.log(koin(61))//4
console.log(koin(62))//5
console.log(koin(63))//6
console.log(koin(15))//2



// jika ketiga soal sudah diselesaikan boleh mengerjakan ini
console.log(alghi()["andi"][1].andreas()) // berhasil

