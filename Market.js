// Init value
var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Elektronik' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Baju' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Buah' , name: "Apple", price: 10000, stock :8 }
];
  
// init value
var arrCategory = ["All", "Fast Food", "Elektronik", "Baju", "Buah"];

class Cart{
    constructor(_id,_category,_name,_price,_qty){
        this.id=_id
        this.category=_category
        this.name=_name
        this.price=_price
        this.qty=_qty
    }
}

var cart=[

]

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
                            <input type="button" value="Add" onclick="AddToCart(${val.id})">
                        </td>
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
                        <input type="button" value="Add" onclick="AddToCart(${val.id})">
                    </td>
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

const printCart=()=>{
    let result=cart.map((val,index)=>{
        return `<tr>
        <td>${val.id}</td>
        <td>${val.category}</td>
        <td>${val.name}</td>
        <td>${val.qty}</td>
        <td>${val.price}</td>
        <td>
            <input type="button" value="Delete" onclick="deleteCart(${index})">  
        </td>
    </tr>`
    })
    document.getElementById('renderCart').innerHTML=result.join('')
}


// init 
Printdata(arrProduct)
printCategory()
prinInputCategory()
printCart()


const AddToCart=(id)=>{

    // console.log('haha')
    // 
    // console.log(cart)
    var indexCart=cart.findIndex((val)=>val.id == id)
    if(indexCart<0){
        var index=arrProduct.findIndex((val)=>val.id==id) 
        var objProd=arrProduct[index]
        // var id=objProd.id
        // var name=objProd.name
        // var category=objProd.category
        // var price=objProd.price
        // pake destructuring
        var {id,name,category,price}=objProd
        cart.push(new Cart(id,category,name,price,1))
    }else{
        cart[indexCart].qty+=1
    }
    printCart()
}

const deleteCart=(index)=>{
    cart.splice(index,1)
    printCart()

}

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
// filter
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


// payment

const funcPayment=()=>{

    var result = cart.map((val)=>{
        return `<p>${val.id} | ${val.category} | ${val.name} | ${val.qty} |${val.price}|| ${val.price*val.qty}</p>`
    })
    // menghitung subtotal
    var subtotal=0
    cart.forEach((val)=>{
        subtotal+=(val.price*val.qty)
    })

    var ppn=subtotal*0.1

    var total=subtotal+ppn
    document.getElementById('payment').innerHTML=result.join('') +`<h3>Subtotal :${subtotal}</h3><h4>PPN : ${ppn}</h4><h3>Total : ${total}</h3>`
    
}