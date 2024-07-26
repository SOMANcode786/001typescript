function washing(callback){
console.log('washing started');
setTimeout(function(){

    console.log("washing done");
    callback();
},5000);


}
function socking(callback){
console.log('socking started');
setTimeout(function(){

    console.log("soacking done");
    callback();
},3000);


}
function drying(){
console.log('drying started');
setTimeout(function(){

    console.log("drying done");
    
},2000);


}

washing(()=>{
    socking(()=>{
        drying();
    });
});
