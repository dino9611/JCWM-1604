
//object literal

let User={
    username:'dino',
    password:'saitama',
    email:"dino@gmail.com",
    isVerified:false,
    isSeller:false,
    height:170,
    activeDay:['senin','sabtu'],
    tampilkannama(){
        console.log('passwordnya adalah '+ this.password)
    }
}



// let newObj=new Object()
// newObj.name='kamen rider'
// User.tampilkannama()
// cara mengakses property dalam object bisa menggunakan .namaproperty
// console.table(User.)
// console.log()

let inputUser = 'username'

// ini salah
// console.log(User.inputUser)
// ini benar

// console.log(User[inputUser]) // bisa digantikan dengan sebuah variable berisi string

class MakhlukHidup{
    constructor(_name,_age){
        this.namaja=_name,
        this.age=_age
    }

    breath=()=>{
        console.log('bernafas')
    }

}

class Binatang extends MakhlukHidup{
    constructor(_nama,_age,_jenis){
        super(_nama,_age)
        this.jenis=_jenis
    }

    kalimat=()=>{
        return 'hewan '+this.namaMakhluk + ' adalah '+this.jenis
    }

    akal=()=>{
        console.log('tidak punya')
    }

}

class Manusia extends MakhlukHidup{
    constructor(_nama,_age,_work){
        super(_nama,_age)
        this.work=_work
    }

    worked=()=>{
        console.log('bekerja')
    }



}

// let Ayam=new Binatang('ayam','unggas')
// let Sapi=new Binatang('sapi','mamalia')

// let Animals=[
//     new Binatang('ayam',1,'unggas'),
//     new Binatang('sapi',2,'mamalia'),

// ]

// Animals[0].breath()
// Animals[2].breath()
// console.log(Animals[0].jenis)
// console.log(Animals[2].work)

// nomer 1
let bulanke=new Date().getMonth()
let harike=new Date().getDay()
let tanggal=new Date().getDate()
let tahun=new Date().getFullYear()
let jam=new Date().getHours()
let menit=new Date().getMinutes()
let second=new Date().getSeconds()
let hari =['minggu','senin','selasa','rabu','kamis','jumat','sabtu'] 
let bulan=['januari','februari','maret','april','may','juni','july','agustus','september','oktober','november','december']

// let message= `saat ini bulan ke ${bulanke+1} : ${bulan[bulanke]}`
// console.log(message)

let message1=`hari ini ${hari[harike]}, ${tanggal} ${bulan[bulanke]} ${tahun}
pukul ${jam}:${menit}:${second}`

console.log(message1)











