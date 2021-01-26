// soal 1

var x = 4
var y = 3
var z = 2
var atas=(x+y*z)/(x*y)
var w = Math.pow(atas,z) 
// console.log(w)


// soal 3

var angkakubik=8
var akar=Math.cbrt(8)

// console.log(akar)


// soal 4
// hari awal 485
var totalhari=485
var sisahari=totalhari
// sisa hari 485
var tahun= Math.floor(sisahari/360) // 1
sisahari=sisahari%360
// sisahari 125
var bulan = Math.floor(sisahari/30) // 4
sisahari=sisahari%30
// sisa hari 5
var minggu = Math.floor(sisahari/7) // 0
sisahari= sisahari%7
console.log(`${totalhari} hari itu sama dengan ${tahun} tahun, ${bulan} bulan, ${minggu} minggu, dan ${sisahari} hari`)


// soal 5
// jumlah umur andi dan budi 49  
// rasio andi : budi =0.4  4:10 andi=4, budi =10 andi +budi =14
// 49/14 =3.5
// andi = 3.5 * 4
// budi =3.5 * 10
// umur andi dan budi 2 tahun lagi
var andi_dan_budi=49
var andirasio=4
var budirasio=10
var totalrasio=andirasio+budirasio
var andi =(andi_dan_budi/totalrasio)*andirasio 
var budi =(andi_dan_budi/totalrasio)* budirasio
// 2 tahun lagi
var andi2tahun=andi+2
var budi2tahun=budi+2
console.log(budi2tahun)
console.log(andi2tahun)

// soal6
// jarak a dan b =120km
// a bergerak = 60 km/j
// b bergerak = 40 km/j
// a+b =100 km/j
// jam 9
var AkeB=120
var a =60 
var b= 40
var jamawal=9
var menitawal=0
var pemangkasa_jarak=a+b
var waktutabrakanperjam=AkeB/pemangkasa_jarak
var jamkemenit=waktutabrakanperjam*60
var jamtambah=Math.floor(jamkemenit/60)
var jam=jamawal+jamtambah
var menittambah=jamkemenit%60
var menit= menitawal+menittambah

console.log(`Tabrakan akan terjadi pada jam ${jam}.${menit}`)





