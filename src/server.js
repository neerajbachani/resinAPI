const { connectDb } = require("./config/db")
const app =require("./index")


const port = 3000;

app.get('/',(req,res)=> {
    return res.status(200).send({message: "helo ji", status: true})
})

app.listen(port, async()=> {
    await connectDb()
    console.log("server started on ", port)
})

