function weatherWear(temperature){
    let clothesToWear ={
        "upperbody": ["windbreaker, ","rain jacket, ","jacket, ","warm jacket, ","coat, ","sweater, ","shirt, "],
        "misc": ["umbrella, ","gloves, ","hat, ","warm socks, ","sunglasses, "],
        "lowerbody": ["pants, ","shorts, "],
        "shoes": ["boots","rain boots","sneakers"]
    }
    if (temperature < -10){
        return ("You should wear "+clothesToWear.upperbody[3]+clothesToWear.misc[1]+
        clothesToWear.lowerbody[0]+clothesToWear.shoes[0])
    }
    if (temperature < 0){
        return ("You should wear "+clothesToWear.upperbody[5]+clothesToWear.misc[3]+
        clothesToWear.lowerbody[0]+clothesToWear.shoes[0])
    }
    if (temperature < 10){
        return ("You should wear "+clothesToWear.upperbody[2]+clothesToWear.misc[2]+
        clothesToWear.lowerbody[0]+clothesToWear.shoes[1])
    }
    if (temperature < 20){
        return ("You should wear "+clothesToWear.upperbody[0]+clothesToWear.misc[0]+
        clothesToWear.lowerbody[0]+clothesToWear.shoes[2])
    }
    else{
        return ("You should wear "+clothesToWear.upperbody[6]+clothesToWear.misc[4]+
        clothesToWear.lowerbody[1]+clothesToWear.shoes[2])
    }
}

const clothesToWear = weatherWear(18);
console.log(clothesToWear);