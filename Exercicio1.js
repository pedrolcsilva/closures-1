function createMultiplier(mult){
    function Multiplicar(num){
        return result = num * mult;
    }
    return Multiplicar;
}

let multiplyBy5 = createMultiplier(5);

console.log(multiplyBy5(10));