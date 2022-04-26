function getImage(){
    return new Promise((resolve, reject)=>{
        resolve("Imaged Fetched from DataBase")
    })
}

function getVideo(){
    return new Promise(function(resolve,reject) {
        resolve("Video fetched from Db.")
    })
}


Promise.race([getImage(), getVideo()]).then((values)=>{
    console.log(values)
})
console.log("I am non-blocking code!")