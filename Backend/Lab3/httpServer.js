import http from 'http'
let PORT = 8080

const app = http.createServer((req,res)=>{
    
    
    const url = req.url 
    const method = req.method 
    if (url == "/msg" && method == "GET"){
        res.write("Hello World")
        res.end()
    }
    
})

app.listen(PORT , ()=>{
    console.log(`server is running at ${PORT}`)
})


