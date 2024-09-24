/*function callback(){
    console.log("The number is successfully added")
}

function add(a , b , callback){
    let result = a+b;
    console.log(result);
    callback();
}


add(2,3,callback);*/
/*
function add(a , b , callback){
    let result = a+b;
    console.log(result);
    callback();
}

add(2,3,function(){
    console.log("Good morning");
})*/

function add(a , b , callback){
    let result = a+b;
    console.log(result);
    callback();
}

add(2,4,() => console.log("FG"))
