function interact() {
    let message = document.getElementById('message');
    let startBtn = document.getElementById('start');
    let stopBtn = document.getElementById('stop');
    let comments = document.getElementById('comments');
    let commentInfo = document.getElementById('comment-info');
    let sendBtn = document.getElementById('send');
    let nextBtn = document.getElementById('next');
    let commentItems = document.getElementsByTagName('li');
    let slideImg = document.getElementById('slide-image');
    let cars = document.getElementById('cars');
    let nature = document.getElementById('nature');
    let games = document.getElementById('games');
    let history = document.getElementById('history');
    let category = document.getElementById('category');

    sendBtn.addEventListener('click', sendHandler);
    stopBtn.setAttribute('disabled', true);
    startBtn.addEventListener('click', startHandler);
    nextBtn.addEventListener('click', nextHandler);
    stopBtn.addEventListener('click', stopHandler);

    cars.addEventListener('click', changeImageCategoryHandler.bind(undefined, 'Cars'));
    nature.addEventListener('click', changeImageCategoryHandler.bind(undefined, 'Nature'));
    games.addEventListener('click', changeImageCategoryHandler.bind(undefined, 'Games'));
    history.addEventListener('click', changeImageCategoryHandler.bind(undefined, 'History'));

    let imgMap = {
        'Cars': ["./img/lambo.jpg", "./img/maserati.jpg", "./img/tesla.jpg"],
        'Nature': ["./img/image-hero-poster.jpg", "./img/pexels-photo.jpg", "./img/waterfall.jpg"],
        'Games': ["./img/dark-souls.jpg", "./img/witcher.jpg", "./img/assassins-creed.png"],
        'History': ["./img/stalin.jpg", "./img/tanks.jpg", "./img/d-day.jpg"],
    }

    let imageAddreses = imgMap['Nature'];

    setInterval(function() {
        imageAddreses.push(imageAddreses.shift());
        slideImg.src = imageAddreses[0];
    }, 2000)

    let intervalIndex;

    function startHandler(e) {

        if (!intervalIndex) {
            intervalIndex = setInterval(function() {
                message.innerText = message.innerText.substring(1) + message.innerText[0];
            }, 100);
        }

        e.target.setAttribute('disabled', true);
        stopBtn.removeAttribute('disabled')
    }

    function changeImageCategoryHandler(cat) {

        if (imgMap.hasOwnProperty(cat)) {
            category.innerText = cat;
            imageAddreses = imgMap[cat];
            slideImg.src = imageAddreses[0];
        }
    }

    function stopHandler(e) {
        clearInterval(intervalIndex);
        intervalIndex = undefined;
        e.target.setAttribute('disabled', true);
        startBtn.removeAttribute('disabled');
    }

    function nextHandler() {
        imageAddreses.push(imageAddreses.shift());
        slideImg.src = imageAddreses[0];
    }

    function createElement(tag, content, classes, attributes) {

        let el = document.createElement(tag);
        el.innerText = content;

        if (content) {
            el.innerText = content;
        }

        if (classes) {
            classes.split(' ')
                .filter(x => x !== '')
                .forEach(x => el.classList.add(x));
        }

        if (attributes) {
            attributes.map(x => x.split(': '))
                .filter(x => x !== '')
                .forEach(x => el.setAttribute(x[0], x[1]));
        }

        return el;
    }

    function hoverInHandler(e) {
        let parent = e.target.parentNode;
        parent.style['background-color'] = "yellow";
        parent.style['border-radius'] = "10px";
    }

    function hoverOutHandler(e) {
        let parent = e.target.parentNode;
        parent.style['background-color'] = parent.parentNode.style['background-color'];
        parent.style['border'] = parent.parentNode.style['border'];
        parent.style['border-radius'] = parent.parentNode.style['border-radius'];
    }

    function sendHandler() {

        let comment = document.getElementById('comment');
        let sender = document.getElementById('sender');

        let senderName = sender.value ? sender.value : 'Anonymous'

        if (comment.value) {
            let li = createElement('li', null, 'comment mt-1');
            let small = createElement('small', senderName, 'text-dark mb-1');
            li.appendChild(small);
            let img = createElement('img', null, undefined, ['style: width:30px; height:30px;', 'src: ./img/anonymous-person-png-14.png']);
            let a = createElement('a', comment.value, undefined, ['href: #']);
            a.addEventListener('click', deleteHandler);
            a.addEventListener('mouseover', hoverInHandler);
            a.addEventListener('mouseout', hoverOutHandler);
            li.appendChild(img);
            li.appendChild(a);
            comments.appendChild(li);
            commentInfo.style.display = 'block';
        }

        sender.value = '';
        comment.value = '';
    }

    function deleteHandler(e) {
        let comment = e.target.parentNode;
        comments.removeChild(comment);

        if (commentItems.length === 0) {
            commentInfo.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', interact);