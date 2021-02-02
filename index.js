// var kata='karate'
function myFunction(param) {
    // console.log('line 3')
    kata=param


}
// f(x)=5x+1
// f(y)=1y+2
// f(f(y))=5 (1y+2)+ 1
var fungsiKu= () => {
    // console.log('line 7')
    kata='miyagi'
    return 'apapun'
    
}


// showResult(penjumlahan,10,2)



// showResult((angka1,angka2)=>{
//     return angka1/angka2
// },10,2)


// fungsiKu()
// var param ='chaplin'
// kata=param
// proses diatas ini dipersingkat dengan function
// myFunction('chaplin')
// console.log(kata,'line 14')
// myFunction('daniel')
// var hasil=penjumlahan(5)
// console.log(hasil)


// function countDown(counter){

//     console.log(counter)
//     counter--
    
//     if(counter>=0){
//         countDown(counter)
//     }

// }

// countDown(4)

// var nums=[2,3,6,7,8]

// for(var i=0;i<nums.length;i++){
//     console.log(`loop nums ${nums[i]}`)
// }

// nums itu harus sebuah array jika mau menggunakan forEach
// nums.forEach((val,index)=>{
//     console.log(`loop nums ${val}`)
//     console.log(`loop index ke ${index}`)
//     console.log('batas')
// })

// var calmap=(val,index)=>{
//     if(val%2==0){
//         return 'genap'
//     }else{
//         return 'ganjil'
//     }
// }
// var numskali2=nums.map(calmap)

// var numskali2=nums.map((val)=>{
//     if(val%2==0){
//         return 'genap'
//     }else{
//         return 'ganjil'
//     }
// })

// console.log(nums)
// console.log(numskali2)

// var nums=[1,3,4,7,8] // [1,3,7]


// var mapDuplicate=(arr,cb)=>{

//     var newarr=[]
//     var newvalue
//     for(var i=0;i<arr.length;i++){

//         newvalue=cb(arr[i])

//         newarr.push(newvalue)
//     }

//     return newarr
// }

// var numskali2=mapDuplicate(nums,(val)=>{
//     if(val%2==0){
//         return 'genap'
//     }else{
//         return 'ganjil'
//     }
// })
// var newarr=[]
// for(var i=0;i<nums.length;i++){
//     if(nums[i]>5){
//         newarr.push(nums[i])
//     }
// }
// console.log(newarr)
        
// var filterduplicate=(arr,cb)=>{
//     var newarr=[]
//     for(var i=0;i<arr.length;i++){
//         if(cb(arr[i])){
//             newarr.push(arr[i])
//         }
//     }
//     return newarr
// }

// var nums=[0,3,4,7,8] // [1,3,7]

// var calfil=(val)=>{
//     return val 
// }

// var numsfil=nums.filter(calfil)


// console.log(nums)
// console.log(numsfil)



// sort

// var nums=[200,1,30,4,7]

// var numsort=nums.sort((a,b)=>{
//     return a-b
// })//ascend
// var numsort=nums.sort((a,b)=>{
//     return b-a
// })//descend
// console.log(numsort)

// var kata= 'karate'
// var kata='dd'
// let kata ='karate'
// kata='dd'
// const kata='karate'


// console.log(kata)


const penjumlahan2Tambah2=()=>{
    return 2+2
}
const penjumlahan=(angka1,angka2=5)=>{
    var hasil = angka1+angka2

    return hasil
}
const pengurangan=(angka1,angka2=5)=>{
    if(angka1<angka2){
        return angka2-angka1
    }
    return angka1-angka2
}
const perkalian=(angka1,angka2=5)=>{
    return angka1*angka2
}

// penjumlahan(2,2)


// var angka=3

// const showResult=(cb)=>{
//     var hasil= cb() 
//     console.log(hasil)
// }

// const calfunc=()=>{
//     if(angka==2){
//         return true
//     }else{
//         return false
//     }
// }

// showResult(calfunc)
// const fungsiku=()=>{
//     var nama='dino'
// }

// for(let nama=1;nama<5;nama++){

// }
// if(true){
//     let nama='dino'
// }

// let angka=3
// angka=5
// console.log(nama)

// promise

// var names=['chaplin','daniel','bob','anto','elaine']
// var namessort=names.sort((a,b)=>{
//     return a>b ? -1:1
// })

// console.log('c'>'d')
// console.log(namessort)



const Exercise2=(arr)=>{
    let Newarr=arr.map((val)=>{
        if(val%2 == 0){
            return 'even'
        }else{
            return "odd"
        }
    })
    return  Newarr// return sebauh array lagi
}

console.log(Exercise2([1,3,4,5]))
console.log(Exercise2([22,17,19,20,14]))
console.log(Exercise2([1,3,5]))
console.log(Exercise2([2,4,6]))

let duit=[91e5,98e5,95e5,103e5,93e5]

const Filtergaji=(arr)=>{

    let NewArr=arr.filter((val)=>{
        return val - ((val*5)/100) > 9e6
    })
    return NewArr
}

console.log(Filtergaji(duit))


const fibo=(angka)=>{

    if(angka<3){
        return 1
    }

    return fibo(angka-1)+fibo(angka-2)
    

}

console.log(fibo(3)) //fibo 3 itu 2
console.log(fibo(4)) //fibo 4 itu 3


var kata='Abc, +12def'.toLowerCase()
var kataaa=kata.replace(/[^a-z]/g,'')
console.log(kataaa)


var kata='abcdefghijklmnopqrstuvwxyz'.split(' ')





