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
const penjumlahan2Tambah2=()=>{
    return 2+2
}
const penjumlahan=(angka1,angka2=5)=>{
    return angka1+angka2
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

const showResult=(fn,angka1,angka2)=>{
    var hasil= fn(angka1,angka2) //20 12
    console.log(hasil)
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

var nums=[1,3,4,7,8] // [1,3,7]


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

var nums=[200,1,30,4,7]

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
const kata='karate'


console.log(kata)


