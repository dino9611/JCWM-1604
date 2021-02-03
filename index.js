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



// const Exercise2=(arr)=>{
//     let Newarr=arr.map((val)=>{
//         if(val%2 == 0){
//             return 'even'
//         }else{
//             return "odd"
//         }
//     })
//     return  Newarr// return sebauh array lagi
// }

// console.log(Exercise2([1,3,4,5]))
// console.log(Exercise2([22,17,19,20,14]))
// console.log(Exercise2([1,3,5]))
// console.log(Exercise2([2,4,6]))

// let duit=[91e5,98e5,95e5,103e5,93e5]

// const Filtergaji=(arr)=>{

//     let NewArr=arr.filter((val)=>{
//         return val - ((val*5)/100) > 9e6
//     })
//     return NewArr
// }

// console.log(Filtergaji(duit))


// const fibo=(angka)=>{

//     if(angka<3){
//         return 1
//     }

//     return fibo(angka-1)+fibo(angka-2)
    

// }

// console.log(fibo(3)) //fibo 3 itu 2
// console.log(fibo(4)) //fibo 4 itu 3


var kata='Abc, +12def'.toLowerCase()
var kataaa=kata.replace(/[^a-z]/g,'')
// console.log(kataaa)


const Palindrome=(inp='')=>{
    //1.  kecilkan hurufnya dulu 
    //2.  hilangkan yang bukan huruf
    //3.  di split menjadi array lalu di reverse
    //4.  terus join untuk diubah menjadi string
    //5.  bandingkan dengan kata yang telah diproses di no.2 
    let kata= inp.toLowerCase()
    kata=kata.replace(/[^a-z]/g,'')
    console.log(kata)
    let katainput=kata.split('').reverse()
    katainput=katainput.join('')

    // if(kata == katainput){
    //     return true
    // }else{
    //     return false
    // }

    return kata == katainput ? true: false
}
console.log('hai'.length)
console.log('hai'[0])
// 'hai aku joan'
// 'iah uka naoj'
const ReverseWord=(kata='')=>{
    // cara tanpa reverse
    // 1. split berdasarkan spasi
    // 2. terus di balik dengan melooping stringnya
    // kata=kata.split(' ')
    // let output=''
    // for(let i=0;i<kata.length;i++){
    //     let katabalik=''
    //     for(let j=kata[i].length-1;j>=0;j--){
    //         katabalik+=kata[i][j]
    //     }
    //     output+=katabalik
    //     if(i<kataaa.length-1){
    //         output+=' '
    //     }
    // }
    
    // return output

    // cara dengan reverse
    kata=kata.split(' ')
    console.log(kata)
    // kata[0]=kata[0].split('')
    // kata[0]=kata[0].reverse().join('')
    // kata[1]=kata[1].split('')
    // kata[1]=kata[1].reverse().join('')
    // kata[2]=kata[2].split('')
    // kata[2]=kata[2].reverse().join('')
    // kata[3]=kata[3].split('')
    // kata[3]=kata[3].reverse().join('')
    for(let i=0;i<kata.length;i++){
        // kata[i]=kata[i].split('')
        // kata[i]=kata[i].reverse()
        // kata[i]=kata[i].join('')
        //cara lain
        kata[i]=kata[i].split('').reverse().join('')
    }
    console.log(kata)
    kata=kata.join(' ')
    return kata
}


console.log(ReverseWord('iah uka naoj rim'))//hai aku joan



// console.log(Palindrome('Malam'))
// console.log(Palindrome("Madam, I'm Adam"))




// yino == ajop  2langkah

const CaesarChiper=(input='',langkah)=>{
    // 24+2=26%26
    var kata='abcdefghijklmnopqrstuvwxyz'.split('')
    // untuk handle huruf gede
    var kataBesar='abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    // console.log(kata)
    input=input.split('')
    console.log(input)
    let output=''
    input.forEach( element => {
        if(element == ' '){
            output+=' '
        }else{
            // console.log(element)
            let index=kata.indexOf(element)
            let indexmaju
            if(index==-1){
                index=kataBesar.indexOf(element)
                indexmaju=(index+langkah)%26
                output+=kataBesar[indexmaju]
            }else{
                indexmaju=(index+langkah)%26
                output+=kata[indexmaju]
            }
        }
    });
    return output
}

// console.log(CaesarChiper('Sunday Six',2))
//bentuk-bentuk function
// const TesFunc= nama =>{  //incase hanya satu parameter
//     return nama
// }

var nums=[1,2,3,4]
var numskali2=nums.map(val=> val*2)
console.log(numskali2)

// const TesFunc = nama => nama +' JCWM 16' // jika seperti ini artinya functionnya langsung return
//kalau nggak da kurawal artinya function langsung return
// console.log(TesFunc('dino'))

// total=total/jumlah data

var arrTes=[1,2,3,3,3,2,7,3]
// 1 
// 1 4 2
// maxberapakaliketemu=4
// mode = 3
// hitungan =0

const rata2=(arr=[])=>{
    let output=0
    let total=0
    let totalData=arr.length
    for(let i=0;i<totalData;i++){
        total+=arr[i]
    }

    output=total/totalData
    return output

}


const median=(arr=[])=>{
    //sorting
    // kalo ganjil
    //dapetin angka tengahnya
    //kalo genap tengah +tengah /2 
    
    arr=arr.sort((a,b)=>a-b)
    let medianOutput
    if(arr.length%2==0){
        let midPoint1=arr.length/2-1
        let midpoint2= arr.length/2
        medianOutput=(arr[midPoint1]+arr[midpoint2])/2
    }else{
        let midpoint= Math.floor(arr.length/2)
        medianOutput=arr[midpoint]
    }
    return medianOutput

}

const mode=(arr=[])=>{
    // maxhitungan 2
    // angkaMode 2

    let angkaMode
    let maxhitungan=0

    for(let i=0;i<arr.length;i++){
        let hitungan=0
        for(let j=0;j<arr.length;j++){
            if(arr[j]==arr[i]){
                hitungan++
            }
        }
        if(hitungan>maxhitungan){
            angkaMode=arr[i]
            maxhitungan=hitungan
        }
    }
    return angkaMode

}


console.log(mode(arrTes))











