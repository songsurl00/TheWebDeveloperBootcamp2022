const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!");
//     res.send("<h1>This is my webpage</h1>");
// })

app.get('/', (req, res) => {
    res.send("This is the homepage!!!")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit<h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit<h1>`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("NOTING FOUND IF NOTHING SEARCH")
    } else {
        res.send(`<h1>Search results for: ${q}<h1>`);
    }
})

// 이건 마지막에 들어가야함
app.get('*', (req, res) => {
    res.send(`I don't know that path`);
})



app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
})