const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        username: 'Sky',
        comment: 'This is good'
    },
    {
        id: uuid(),
        username: 'Jenny',
        comment: 'WOW this is crazy'
    },
    {
        id: uuid(),
        username: 'Mike',
        comment: 'GOAT'
    }
]

// 홈 화면
app.get('/', (req, res) => {
    res.render('home');
})

// 댓글 창
app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
})

// 새 댓글 창
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

// 새 댓글을 post
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
})

// 해당 id의 댓글을 보여주는 창
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id)
    res.render('comments/detail', { foundComment });
})

// 댓글 수정 창
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', {comment});
})

// patch로 댓글 수정 구현
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})