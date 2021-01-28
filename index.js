
var angka=0
var kata='' // 'hahahaha'

// while (angka<=50) {
//     console.log(angka)
//     angka++
// }
// while (false) {
//     console.log('he')
// }

// while (kata != 'hahahaha') {
//     kata+='ha'
//     console.log(kata)
// }
// console.log(kata)



// dowhile code yang jalan didalam dowhile akan jalan at least satu kali
// dalam looping code yang diulang adalah code yang berada didalam kurawal
// 2 4 6
// do {

//     console.log(angka)
//     angka+=2
//     // if(angka==6){
//     //     break
//     // }

// } while (angka<=100);




// for(var nomer=0;nomer<=5;nomer++ ){
//     if(nomer % 2 == 0){
//         continue
//     }
//     console.log(nomer)

//     // break
// }
// console.log('disni')
// angka=0


// loop drawing 

// * * * * *

var bintang=''
// bintang lurus
// for(var i=0;i<5;i++){
//     bintang+='*'
//     if(i == 5-1){
//         break
//     }
//     bintang+='\n'
// }

// bintang+='*\n'
// bintang+='*\n'
// bintang+='*\n'
// bintang+='*\n'
// bintang+='*\n'

var bintang=''// *****\n*****\n*****\n*****\n*****\n

for(var i=0;i<5;i++){
    
    for(var j=0;j<5;j++){

        bintang+='*'

    }
    if(i == 5-1){
        break
    }
    bintang+='\n'
}

console.log(bintang)
// '*****'
console.log('line  batas')
console.log('*****\n*****\n*****\n*****\n*****\n')





// console.log(angka)