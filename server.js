//Modules
const express = require('express');
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/test', (req, res) => {
    // res.json(req.body)
    let result = everyThirdLetter(req.body.string_to_cut);
    res.json({"return_string" : result})
    
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

function everyThirdLetter (str){

    let thirds = '';
    if (str.length < 3){
        console.log("Please insert a longer string")
    } else {
        for (let i = 2; i < str.length; i += 3) {
            thirds += str.charAt(i)
        }
    }
    return thirds.concat('')
}

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})

