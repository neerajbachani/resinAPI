const { connectDb } = require("./config/db")
const app =require("./index")


const PORT = 4000
app.listen(PORT, async()=> {
    await connectDb()
    console.log("server started on ", PORT)
})

