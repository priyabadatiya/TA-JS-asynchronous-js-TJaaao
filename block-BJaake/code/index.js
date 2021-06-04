let xhr = fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30');
let root = document.querySelector('.news-list');
let select = document.getElementById('news-source');

xhr.then((data) => {
    return data.json();
}).then((newsData) => {
    buildUI(newsData, 'all');
    buildOptions(newsData);
});

function buildUI(data, str) {
    root.innerHTML = '';
    data.filter((e) => {
        if (str === 'all') {
            return e;
        } else {
            return e.newsSite == str;
        }
    }).forEach((e) => {
        let li = document.createElement('li');
        li.classList.add('news-item');
        let div1 = document.createElement('div');
        div1.classList.add('image-container');
        let img = document.createElement('img');
        img.src = e.imageUrl;
        div1.append(img);
        let div2 = document.createElement('div');
        div2.classList.add('text-container');
        let span = document.createElement('span');
        span.innerText = e.newsSite;
        let h2 = document.createElement('h2');
        h2.innerText = e.title;
        let a = document.createElement('a');
        a.innerText = 'Read More';
        a.setAttribute('href', e.url);
        div2.append(span, h2, a);
        li.append(div1, div2);
        root.append(li);
    });
}