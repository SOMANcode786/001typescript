function parentfunction(data:() =>void){
    console.log("i am a parent function");
    data();
}
function childfunction(){
    console.log("i am a child function")
}

parentfunction(childfunction);