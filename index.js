// *****



var stars=''
// 5 bintang vertical
// for (var i=5;i>0;i--){
//     stars+='*'
// }
// alur loopingnya
// - i = 0 , stars = *
// - i = 1 , stars = **
// - i = 2 , stars = ***
// - i = 3 , stars = ****
// - i = 0 , stars = *****
// bintang persegi
// var rows =5
// for (var i=0;i<rows;i++){
//     for(var j=0;j<rows;j++){
//         stars+='*'
//     }
//     stars+='\n'
// }
// *****\n*****\n*****\n*****\n*****\n

// i = 0 ,stars =*****\n
// i = 1,

// bintang segitiga
// var rows = 5
// * i=0 , 
// ** i=1
// *** i=2
// **** i=3
// ***** i=4
// for (var i=0;i<rows;i++){
//     for(var j=0;j<=i;j++){
//         stars+='*'
//     }
//     stars+='\n'
// }
// cara beda
// for (var i=0;i<rows;i++){
//     for(var j=0;j<rows;j++){
//         stars+='*'
//         if(j==i){
//             break
//         }
//     }
//     stars+='\n'
// }

var rows = 5
// ***** i=0 , 
// **** i=1
// *** i=2
// ** i=3
// * i=4
// for (var i=0;i<rows;i++){
//     for(var j=i;j<rows;j++){
//         stars+='*'
//     }
//     if(i<rows-1){
//         stars+='\n'
//     }
    
// }

// *****
// ****
// ***
// **
// *
// **
// ***
// ****
// *****
// rows-=1
// for(var i=rows-1;i>=(-1*rows);i--){
//     for(var j=0;j<Math.abs(i)+1;j++){
//         stars+='*'
//     }
//     stars+='\n'
// }

// for (var i=0;i<rows;i++){
//     for(var j=i;j<rows;j++){
//         stars+='*'
//     }
//     stars+='\n'
    
// }
// for (var i=0;i<rows;i++){
//     if(i==0){
//         continue
//     }
//     for(var j=0;j<=i;j++){
//         stars+='*'
//     }
//     if(i<rows-1){ // biar diujung tidak ada enter
//         stars+='\n'
//     }
// }

// var angka= 30

// for(var i=1;i<=angka;i++){
//     if((i % 3 == 0) && (i % 5 == 0) ){
//         console.log('FizzBuzz')
//     }else if( i % 3 == 0){
//         console.log('Fizz')
//     }else if(i % 5 == 0){
//         console.log('Buzz')
//     }else{
//         console.log(i)
//     }
// }

//algorithm bilangan prima
// 1 - 20
// 1 2 3 5 7 11 
// var angka= 100
// var qtyHabisdibagi=0
// var bilanganprima=0
// for(var i=1;i<=angka;i++){
//     if(i<=3){
//         bilanganprima++
//     }else{
//         qtyHabisdibagi=0
//         for(var j=i; j>0;j--){
//             if(i%j == 0){
//                 qtyHabisdibagi++
//             }
//         }
//         if(qtyHabisdibagi == 2){
//             bilanganprima++
//         }
//     }
// }
// console.log(bilanganprima)
// code segitiga rata kanan 

// ssss* 4 i=0
// sss** 3 i=1
// ss*** 2 i=2
// s**** 1 i=3
// ***** 0 i=4

// for (var i=0;i<rows;i++){
//     for(var j=0;j<rows;j++){
//         if(j < (rows - i)-1){ 
//             stars+=' '
//         }else{
//             stars+='*'
//         }
//     }
//     stars+='\n'
// }

// for (var i=0;i<rows;i++){
//     for(var j=i+1;j<rows;j++){
//        stars +=' '
//     }
//     for(var k=0;k<=i;k++){
//         stars += '*'
//     }
//     stars+='\n'
// }

// ssss* 4 i=0 1 2i +1 =1 
// sss**# 3 i=1 3 2i+ 1 =3
// ss***## 2 i=2 5
// s****### 1 i=3 7
// *****#### 0 i=4 9

// for (var i=0;i<rows;i++){
//     for(var j=i+1;j<rows;j++){
//        stars +=' '
//     }
//     for(var k=0;k<=i;k++){
//         stars += '*'
//     }
//     for(var k=0;k<i;k++){ //buatlah hitungan diaman pada saat i=1 dia hanya looping 1 kali
//         stars += '*'
//     }
//     stars+='\n'
// }
// cara lain
// for (var i=0;i<rows;i++){
//     for(var j=i+1;j<rows;j++){
//        stars+=' '
//     }
//     for(var k=0;k<(i*2+1);k++){
//         stars+='*'
//     }
//     stars+='\n'
// }

// *****#### i=0 s=0 bintang=5  9-(2i) =9
// s****### 9 = (rows*2)-1
// ss***##
// sss**#
// ssss*
// for (var i=0;i<rows;i++){
//     for(var k=0;k<i;k++){
//         stars += ' '
//     }
//     for(var j=i;j<rows;j++){
//         stars +='*'
//     }
//     for(var j=i;j<rows-1;j++){
//         stars +='*'
//     }
//     stars+='\n'
// }
// cara lain
// for (var i=0;i<rows;i++){
//     for(var k=0;k<i;k++){
//         stars += '   '
//     }
//     for(var k=0;k<((rows*2)-1)-(2*i);k++){
//         stars+=' * '
//     }
//     stars+='\n'
// }

// belahketupat

// for (var i=0;i<rows;i++){
//     for(var j=i+1;j<rows;j++){
//            stars+='   '
//     }
//     for(var k=0;k<(i*2+1);k++){
//             stars+=' * '
//     }
//     stars+='\n'
// }
// for (var i=0;i<rows;i++){
//     if(i==0){
//         continue
//     }
//     for(var k=0;k<i;k++){
//         stars += '   '
//     }
//     for(var k=0;k<((rows*2)-1)-(2*i);k++){
//         stars+=' * '
//     }
//     stars+='\n'
// }
// cara lain lagi
for(var i=rows-1;i>(-1*rows);i--){
    for(var k=0;k<Math.abs(i);k++){
        stars += '   '
    }
    for(var k=0;k<((rows*2)-1)-(2*Math.abs(i));k++){
        stars+=' * '
    }
    stars+='\n'
}

// console.log(stars)
// var bool = 5
// // var isi
// // if(bool == 5){
// //     isi='dino'
// // }else{
// //     isi='rahman'
// // }
// //  sama dengan koding diatas (line 173-178)
// var isi = bool == 5 ? 'dino' : 'rahman'

// // console.log(isi)

// var kata = null
// var nama = kata || 123
// console.log(nama)

// console.log(isNaN("121"))
