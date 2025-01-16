function outerFunction(){
    let value = 5;
    function innerFunction(){
        console.log(value)
    }
    return innerFunction;
}

let data = outerFunction();
data()