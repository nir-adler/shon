const express = require('express')
const { PythonShell } = require('python-shell')
const cors = require('cors')


// let a=shell.exec('python3 python/test.py',{async:true})
// console.log(a)
// shell.exec('ls')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send({text:'hello aaaaaa'})
})

app.post('/value', (req, res) => {
    console.log(req.body)
    const {value}=req.body
    if(!value){
        return res.status(422).send({error:'Provide value'})
    }
    PythonShell.run('/app/python/test.py',{args: [value]} ,function (err,result) {
        if (err){
            console.log(err)
            res.status(422).send({error:'Error'})
        } 
        res.send(result)
    });
    

  
})


app.listen(8081, () => {
    console.log('Server up on port 8081')
})