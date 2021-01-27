var beratbadan=90
var tinggibadan=178/100

var IMT=beratbadan/(tinggibadan**2)
var message
if(IMT<18.5){
    message='berat badan kurang'
}else if(IMT>=18.5 && IMT < 25.0){
    message='berat badan ideal'
}else if(IMT>=25.0 && IMT < 30.0){
    message='berat badan berlebih'
}else if(IMT>=30.0 && IMT < 40.0){
    message='berat badan sangat berlebih'
}else{
    message='obesitas'
}

console.log(`Massa ${beratbadan} kg dan tinggi ${tinggibadan}m\nIMT = ${IMT}, ${message}`)