function calcularPrecioCondescuento(precio, descuento) {
    const precioDescuento = precio * (descuento / 100);
    const precioConDescuento = precio - precioDescuento;
    return precioConDescuento;
}

// Primera forma

let listaCupones = {
    "JuanDC_es_batman":15,
    "pero_no_le_digas_a_nadie":30,
    "es_un_secreto":25
}

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice"); 
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const discount = listaCupones[couponValue];

    const precioConDescuento = calcularPrecioCondescuento(priceValue, discount);
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// Segunda forma
let Cupones = [
    "JuanDC_es_batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto"
]

function buttonPriceDiscount2() {
    const inputPrice = document.getElementById("inputPrice"); 
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let discount;

    if(!Cupones.includes(couponValue)) {
        alert("El cupon "+couponValue+" no es valido")
    } else {
        switch (couponValue) {
            case Cupones[0]:
                discount = 15;        
                break;
            case Cupones[1]:
                discount = 30;        
                break;
            case Cupones[2]:
                discount = 25;        
                break;
        }
        const precioConDescuento = calcularPrecioCondescuento(priceValue, discount);
        const resultP = document.getElementById("resultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

    
}