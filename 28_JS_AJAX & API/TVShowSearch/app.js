const form = document.querySelector('#searchForm');
const imgContainer = document.querySelector('#container');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImg(res.data);
    form.elements.query.value = '';
})

const makeImg = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            imgContainer.append(img);
        }
    }
}

// image 클릭 시 삭제 기능 추가
imgContainer.addEventListener('click', (e) => {
    e.target.nodeName === 'IMG' && e.target.remove();
})