const express = require('express')
const { PythonShell } = require('python-shell')
const cors = require('cors')
const port=process.env.PORT || 8081

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send({text:'test'})
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

app.listen(port, () => {
    console.log(`Server up on port ${port}`)
})