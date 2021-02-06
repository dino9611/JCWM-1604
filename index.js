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


// console.log('line 6')

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
// console.log(user)
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


const cekPlat=(plat)=>{

    let arrPlat=plat.split(' ') // string menjadi aaray
    // nomer plat ada diarray ke-1
    let noPlat=arrPlat[1]
    let tanggal=new Date().getDate() // untuk mendaptkan tanggal hari ini

    let genapatauGanjil=tanggal % 2 // kalo nol artinya genap kalo 1 artinya ganjil
    if(noPlat % 2 == genapatauGanjil){
        return 'boleh lewat'
    }else{
        return 'nggak boleh lewat'
    }
}

// console.log(cekPlat('B 1234 ERD')) // tidak boleh lewat
// console.log(cekPlat('BE 1239 AD')) //  boleh lewat
// console.log(cekPlat('Bk 2344 CD')) // tidak boleh lewat





// cari angka terbesar dan terkecil dari satu buah array 

const angkaMaxMin=(arr,minOrmax)=>{
    // sorting dulu
    // dari kecil kebesar boleh atau sebaliknya juga boleh
    let arrSort=arr.sort((a,b)=>a-b)
    // untuk jika dari kecil kebesar maka min adalah array pertama/ke -0
    // max array ujung atau .length-1
    if(minOrmax == 'min'){
        return arrSort[0]
    }else{
        return arrSort[arrSort.length-1]
    }
}


// console.log(angkaMaxMin([1,200,5,6,10],'min')) //1
// console.log(angkaMaxMin([1,200,5,6,10],'max')) //200


// solve kasus koin ada koin 25sen,10sen,5sen,1sen 
// jika harus bayar 61 sen 
// berapa jumlah koin 
// jawabannya 4 koin 
// buat functionnya

const koin=(bayar)=>{
    let output=0
    var jumlahkoin
    var arr =[25,10,5,1]
    for(var i=0; i<arr.length;i++){
        jumlahkoin=Math.floor(bayar/arr[i])
        output+=jumlahkoin
        bayar=bayar%arr[i]
    }
    return output
}


// console.log(koin(61))//4
// console.log(koin(62))//5
// console.log(koin(63))//6
// console.log(koin(15))//2

// const alghi=()=>{
//     return {
//         andi:[null,{
//             andreas:()=>{
//                 return 'berhasil'
//             }
//         }]
//     }
// }

// var angka= 1258923 // nggak boleh jadiin string
// var ujung = angka % 10 //3   1258923-3 =1258920/10=125892%10 = 125892-2
// var ujung2= ((angka-(angka % 10))/10)%10

const alghi = ()=>{
    return {
        andi:[null,null,{
            andreas:()=>{
                return 'berhasil'
            }
        }]
    }
}
// console.log(alghi()['andi'][1])

// jika ketiga soal sudah diselesaikan boleh mengerjakan ini
// console.log(alghi()["andi"][2].andreas()) // berhasil

// var id=new Date().getTime()

// console.log(id)



// console.log(count('love')) // l=12 o=15 v=22 e=5 // 64
// console.log(count('if')) //15


// if,96,be,25,go,715,up,? 2116
