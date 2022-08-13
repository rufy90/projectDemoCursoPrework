const price = 120;
const discount = 18;

const ppwithdiscount = 100 - discount;
const pricewithdiscount = (price * ppwithdiscount)/100;

/* console.log({
    price,
    discount,
    ppwithdiscount,
    pricewithdiscount,
}); */
function calculaPrecioConDescuento(price, discount){
    const ppwithdiscount = 100 - discount;
    const pricewithdiscount = (price * ppwithdiscount)/100;

    return pricewithdiscount;
}

function onClickButtonPriceDiscount(){
    const coupons = [
        {name: "1606", discount: 15},
        {name: "0690R", discount: 30},
        {name: "2405RR", discount: 25},
    ];
    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    const result = document.getElementById("resultPrice");
    const priceValue = inputPrice.value;
    let discountValue = inputDiscount.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === cuponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("The coupon " + cuponValue + " does not exist!");
    }else {
        const discountValue = userCoupon.discount;
    }
    
    const totalPrice = calculaPrecioConDescuento(priceValue, discountValue);
    result.innerHTML = "Total price: $" + totalPrice; 

    /* if (!coupons.includes(cuponValue)) {
        alert("The coupon " + cuponValue + " does not exist!");
    } else if (cuponValue === "1606") {
        discountValue = 15;
    } else if (cuponValue === "0690R") {
        discountValue = 30;
    } else if (cuponValue === "2405RR") {
        discountValue = 25;
    }           UTILIZADA PARA CUANDO EL ARRAY SOLO TIENE EL NAME DEL CUPON  */  
}