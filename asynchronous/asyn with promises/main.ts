// const promises =new Promise((resolve,reject)=>{
// setTimeout(function(){
//     reject('failure')
// },3000)



// });


// promises.then(()=>{
//     console.log("you are win");
// }).catch((value)=>{
//     console.log(value);
//     console.log("you are failure");
// })
function washing() {
    console.log("washing started")
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    
    resolve("washing done!")
    
    },3000)
    })
    }
    function soacking() {
        console.log("socking started")
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        
        resolve("soacking done!")
        
        },4000)
        })
        }
        function drying() {
            console.log("drying started")
            return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            
            resolve("drying done!")
            
            },4500)
            })
            }

            washing().then((value)=>{
console.log(value);
return soacking()

            }).then((value)=>{
                console.log(value)
       return         drying();
            }).then((value)=>{
console.log(value);


            })