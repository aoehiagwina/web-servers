const path = require('path')

const express = require('express');

const publicFolderPath = path.join(__dirname, '../public')


const app = express();
const PORT = process.env.PORT || 3000;
// I implemented handle bars
app.set('view engine', 'hbs')

app.use(express.static(publicFolderPath));

// I am using render to show my views of the home page using handle bars
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Augustine'
    });
})

// I am using render to show my views of the about page using handle bars
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Augustine'
    })
})


// I am using render to show my views of the about page using handle bars
const help_message = 'This is the help section, please ask your questions'
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Welcome to our help page',
        note: help_message
    })
})

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