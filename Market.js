// Init value
var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Elektronik' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Baju' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Buah' , name: "Apple", price: 10000, stock :8 }
];
  
// init value
var arrCategory = ["All", "Fast Food", "Elektronik", "Baju", "Buah"];

var indexEdit=-1

const Reset =()=>{
    document.getElementById('kategori').value='0' 
    document.getElementById('min').value=''
    document.getElementById('max').value=''
    document.getElementById('nama').value=''
}

const Printdata=(arr)=>{
    //map itu selalu return sebuah array didalamnya ada callback cbnya harus return sesuatu
    
    let result=arr.map((val,index)=>{
        if(indexEdit== index){
            return ` <tr>
                        <td>${val.id}</td>
                        <td>${val.category}</td>
                        <td><input type="text" placeholder="nama" value=${val.name} id="inputEditNama${index}"> </td>
                        <td><input type="number" placeholder="harga" value=${val.price} id="inputEditHarga${index}"></td>
                        <td><input type="number" placeholder="stock" value=${val.stock} id="inputEditStock${index}"></td>
                        <td>
                            <input type="button" value="Save" onclick="onEditSaveClick(${val.id})">
                            <input type="button" value="Cancel" onclick="onCancelEditClick()">
                        </td>
                    </tr>`
        }
        return ` <tr>
                    <td>${val.id}</td>
                    <td>${val.category}</td>
                    <td>${val.name}</td>
                    <td>${val.price}</td>
                    <td>${val.stock}</td>
                    <td>
                        <input type="button" value="Delete" onclick="onDeleteClick(${val.id})">
                        <input type="button" value="Edit" onclick="onEditClick(${index})">
                    </td>
                </tr>`
    })
    // console.log(result)
    // console.log(result.join(''))
    document.getElementById('renderData').innerHTML=result.join('')
}

const printCategory=()=>{
    let result=arrCategory.map((val,index)=>{
        return `<option value=${index}>${val}</option>`
    })
    document.getElementById('kategori').innerHTML=result.join('')
}
const prinInputCategory=()=>{
    let result=arrCategory.map((val,index)=>{
        if(index==0){
            return `<option value="" hidden selected>pilih kategory</option>`
        }else{
            return `<option value=${index}>${val}</option>`

        }
    })
    document.getElementById('inputCategory').innerHTML=result.join('')
}

// init 
Printdata(arrProduct)
printCategory()
prinInputCategory()


const onEditClick=(index)=>{
    indexEdit=index
    Printdata(arrProduct)

}
const onEditSaveClick=(id)=>{
    var editNama=document.getElementById('inputEditNama'+indexEdit).value
    var editHarga=document.getElementById('inputEditHarga'+indexEdit).value
    var editStock=document.getElementById('inputEditStock'+indexEdit).value
    const indexEd=arrProduct.findIndex((val)=>val.id == id) // untuk mencari index berdasarkan id
    arrProduct[indexEd].name=editNama
    arrProduct[indexEd].price=parseInt(editHarga) 
    arrProduct[indexEd].stock=parseInt(editStock) 
    indexEdit=-1
    Printdata(arrProduct)

}
const onCancelEditClick=()=>{
    indexEdit=-1
    Printdata(arrProduct)

}

const onDeleteClick=(id)=>{
    // console.log(id)
    // kalo tidak pake findIndex
    // let index
    // for(let i=0;i<arrProduct.length;i++){
    //     if(arrProduct[i].id == id){
    //         index=i
    //         break
    //     }
    // }
    const indexdel=arrProduct.findIndex((val)=>val.id == id) // untuk mencari index berdasarkan id
    arrProduct.splice(indexdel,1)
    Reset()
    Printdata(arrProduct)
}
const filter=()=>{
    var kategori=document.getElementById('kategori').value 
    var min=document.getElementById('min').value
    var max=document.getElementById('max').value
    var nama=document.getElementById('nama').value.toLowerCase()

    var Productfilter=arrProduct.filter((val)=>{
        var filternama = true // jika nama tidak ada isi
        if(nama){ //jika si nama ada isinya
            filternama = val.name.toLowerCase().includes(nama)
        }
        var filterprice = true // jika min dan max tidak ada isi
        if(max && min){ // jika min dan max ada isi
            filterprice = val.price >= min && val.price <= max
        }else if(max){ // jika max ada isi
            filterprice = val.price <= max
        }else if(min){ // jika min ada isi
            filterprice = val.price >= min
        }
        var filtercategory =true
        if(kategori != 0){
            filtercategory = val.category == arrCategory [kategori]
        }
        return filternama && filterprice && filtercategory
    })
    Printdata(Productfilter)
}

const inputData=()=>{
    var inputNama=document.getElementById('inputNama').value
    var inputHarga=document.getElementById('inputHarga').value
    var inputCategory=document.getElementById('inputCategory').value
    var inputStock=document.getElementById('inputStock').value
    var id=new Date().getTime()
    if(inputNama && inputHarga && inputCategory && inputStock){ // misalakan salah satu data tidak ada input maka akan masuk else
        var inputObj={ id: id,category: arrCategory[inputCategory] , name: inputNama, price: parseInt(inputHarga), stock : parseInt(inputStock)}
        arrProduct.push(inputObj)
        Printdata(arrProduct)
    }else{
        alert('input datanya woy')
    }
}

const onNamaInput=()=>{
   
        var nama=document.getElementById('nama').value.toLowerCase()
        var Productfilter = arrProduct.filter((val)=>{
            return val.name.toLowerCase().includes(nama)
        })
        // diganti jadi
        Printdata(Productfilter)
        // let result=Productfilter.map((val)=>{
        //     return ` <tr>
        //                 <td>${val.id}</td>
        //                 <td>${val.category}</td>
        //                 <td>${val.name}</td>
        //                 <td>${val.price}</td>
        //                 <td>${val.stock}</td>
        //             </tr>`
        // })
        // // console.log(result)
        // // console.log(result.join(''))
        // document.getElementById('renderData').innerHTML=result.join('')
   
    
}

const OnPriceUp=()=>{
    var min=document.getElementById('min').value
    var max=document.getElementById('max').value
    var Productfilter=arrProduct.filter((val)=>{
        if(max && min){ // max dan minnya ada isinya maka yang dipake di filter adalah line 61
            return val.price >= min && val.price <= max
        }else if(max){ // kalo misalkan max saja yang diisi
            return val.price <= max
        }else if (min){ // kalo misalkan min saja yang diisi
            return val.price >= min
        }else{
            return true // kalo return true artinya semua masuk ke array baru
        }
    })
    // console.log(min)
    // console.log(max)
    // bisa dengan cara ini
    // if(max && min){
    //     Productfilter=arrProduct.filter((val)=>{
    //         return val.price >= min && val.price <= max
    //     })
    // }else{
    //     if(max){
    //         Productfilter=arrProduct.filter((val)=>{
    //             return val.price <= max
    //         })
    //     }else if(min){
    //         Productfilter=arrProduct.filter((val)=>{
    //             return val.price >= min
    //         })
    //     }else{
    //         Productfilter=arrProduct
    //     }
    // }
    Printdata(Productfilter)

    // lakukan filter berdasarkan input
}
const onKategoriChange=()=>{
    var kategori=document.getElementById('kategori').value
    var Productfilter=arrProduct.filter((val)=>{
        if(kategori == 0){
            return true
        }else{
            return val.category == arrCategory [kategori]
        }
    })
    Printdata(Productfilter)

    // console.log(kategori)
}


