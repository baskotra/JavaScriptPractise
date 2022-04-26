function talk(location){
    return new Promise((resolved,rejected)=>{
        if(location === "Kathua"){
            console.log(`Hello ${location}`)
            resolved("We Love Kathua.")
        }else{
            rejected(`Can't say hello to ${location}`)
        }
    })
}

function processingRequest(reply){
    return new Promise((resolved,rejected)=>{
        resolved(`Hello, Prakhar ${reply}`)
    })
}

//? Async await is the syntatic sugar for Promises

async function doWork(){
    try{
        //? Waits for talk to complete before moving forward
        const ans = await talk("Hiranagar")
        console.log(ans)
        const request = await processingRequest(ans)
        console.log(request)
    }catch(err){
        console.log(err)
    }

}

doWork();