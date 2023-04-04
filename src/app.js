const path = require('path')

const express = require('express');

const publicFolderPath = path.join(__dirname, '../public')


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(publicFolderPath));



app.get('/weather', (req, res) => {
    res.send([
        {
            weather: 'cloudy',
            location: 'Liverpool'
        }
    ])
})




app.listen(PORT, () => {
    console.log('Listening at port ' + PORT)
})