

function bintangganjil(tinggi){
    var result=''
    var angka=1
    for(let i=0;i<tinggi;i++){
        for(let j=0;j<=i;j++){
            result+=` ${angka} `
            angka+=2
        }
        result+='\n'
    }
    return result
}

function bintanghuruf(tinggi){
    var result=''
    var huruf='abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    var angka=1
    for(let i=0;i<tinggi;i++){
        for(let j = 0;j<=i;j++){
            result+=` ${huruf[angka]} `
            angka+=2
        }
        result+='\n'
    }
    return result
}

console.log(bintangganjil(4))
console.log(bintanghuruf(4))