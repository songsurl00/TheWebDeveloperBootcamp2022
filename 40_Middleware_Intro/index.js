const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I Love dogs!!');
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('SORRY YOU NEED A PASSWORD!!');
};

// app.use((req, res, next) => {
//     console.log('THIS IS MT FIRST MIDDLEWARE');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('THIS IS MT SECOND MIDDLEWARE');
//     next();
// });

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('Home Page!');
});

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('WOOF WOOF!');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send('THIS IS SECRET');
});

app.use((req, res) => {
    res.status(404).send('NOT FOUND!');
});

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
});
