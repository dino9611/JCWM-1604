// variable adalah tempat kita untuk menyimpan data 
//  biasanya data yang disimpan adalah inputan user atau hasil dari sebuah proses 
//  untuk menyimpan data biasa, misal harga barang 
//  data yang ditampung bisa digunakan untuk proses lainnya lagi
//  penamaan variable :
//  untuk awal nama variable hanya boleh huruf, _ , atau $
//  selanjutnya itu boleh angka tetapi selain itu tidak boleh 

//  coding itu dibaca oleh komputer dari atas ke bawah dari kiri ke kanan
// pada saat kita menuliskan var maka pada saat program berjalan akan dibuatkan suatu 
// tempat untuk menyimpan data didalam ram 
// kita menggantikan isi data dengan cara seperti dibawah ini
var kata1,kata2,kata3
kata1 = 'aku'  
kata2 = 'dia'
kata3 = kata1 + ' dan ' +kata2
// backtick adalah tombol yang ada dibawah tombol esc `` bisa menggantikan string dan punya fitur khusus
// fitur khususnya adalah dalam penggunaan variable bisa dibungkus dengan ${...}
kata3= `${kata1} dan ${kata2}`
console.log(kata3)

// type data 
// numbers (integer dan float), string,array, object, dan boolean
// boolean hanya ada 2 value true dan false
// string ke integer parseInt() contoh yang hanya bisa di parseint adalah sebuah string yang hanya berisi angka 
// kalau mau di parsing kefloat baik itu integer atau string pake arseFloat()
// number ke string .toString() atau bisa ditambah dengan + ''
var angka='5'
var angkaint=parseInt(angka) 
var kataint=parseInt(kata1) // NaN : Not A Number
console.log(angkaint)

var operasi= 0 % 17 
// jika angka disebelah kiri lebih kecil sudah pasti jawabannya angka disebelah kiri 
console.log(operasi)

angkaint*=10 // angkaint=angkaint*10
angkaint++ // angkaint=angkaint+1
angkaint-- // angkaint=angkaint-1


// contitional statement
//  if sama switch
//  kedua keduanya membutuhukan boolean
//  cara mengubah angka string dan lain2 menjadi sebuah boolean 
//  dibutuhkan comparison operator 

// if (condition){
//     // task
// }
var nomor = -1
if(nomor){
    nomor = 4
}
else {
    nomor = 3
}

console.log(nomor)












