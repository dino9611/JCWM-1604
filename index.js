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
// for(var i=rows;i>(-1*rows)-1;i--){
//     for(var j=0;j<=Math.abs(i);j++){
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

var angka= 30

for(var i=1;i<=angka;i++){
    if((i % 3 == 0) && (i % 5 == 0) ){
        console.log('FizzBuzz')
    }else if( i % 3 == 0){
        console.log('Fizz')
    }else if(i % 5 == 0){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}


console.log(stars)
