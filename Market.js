// Init value
var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Elektronik' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'baju' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Buah' , name: "Apple", price: 10000, stock :8 }
];
  
// init value
var arrCategory = ["All", "Fast Food", "Elektronik", "baju", "Buah"];


const onNamaInput=()=>{
    var nama=document.getElementById('nama').value
    console.log(nama)
    
}

const OnPriceUp=()=>{
    var min=document.getElementById('min').value
    var max=document.getElementById('max').value
    console.log(min)
    console.log(max)
    // lakukan filter berdasarkan input
}
const onKategoriChange=()=>{
    var kategori=document.getElementById('kategori').value

    console.log(kategori)
}
