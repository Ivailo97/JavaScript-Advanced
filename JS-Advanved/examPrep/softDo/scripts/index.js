function mySolution() {

    let textArea = document.querySelector('#inputSection textarea');
    let username = document.querySelector('#inputSection div input');
    let pendingQuestions = document.getElementById('pendingQuestions');
    let openQuestions = document.getElementById('openQuestions');
    let sendBtn = document.querySelector('#inputSection div button');

    function createLi(content) {
        let li = document.createElement('li');
        li.textContent = content;
        return li;
    }

    function sendReplyHandler(e) {

        let replyInput = e.target.parentNode.children[0];
        let replyList = e.target.parentNode.children[2];

        if (replyInput.value !== '') {
            replyList.appendChild(createLi(replyInput.value));
            replyInput.value = '';
        }
    }

    function replyHandler(e) {
        e.preventDefault();

        let replySectionDiv = e.target.parentNode.nextSibling;

        if (e.target.innerText === 'Reply') {
            replySectionDiv.style.display = 'block';
            e.target.innerText = 'Back';

        } else {
            replySectionDiv.style.display = 'none';
            e.target.innerText = 'Reply';
        }
    }

    function buildImgHtml() {
        let img = document.createElement('img');
        img.src = './images/user.png';
        img.width = 32;
        img.height = 32;
        return img;
    }

    function openHandler(e) {
        e.preventDefault();
        let pendingQuestionHtml = e.target.parentNode.parentNode;
        let img = pendingQuestionHtml.children[0]
        let span = pendingQuestionHtml.children[1]
        let p = pendingQuestionHtml.children[2]
        pendingQuestions.removeChild(pendingQuestionHtml);
        let divWrapper = document.createElement('div');
        divWrapper.classList.add('openQuestion');
        divWrapper.appendChild(img);
        divWrapper.appendChild(span);
        divWrapper.appendChild(p);
        let actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');
        let replyBtn = document.createElement('button');
        replyBtn.classList.add('reply')
        replyBtn.innerText = 'Reply';
        replyBtn.addEventListener('click', replyHandler);
        actionsDiv.appendChild(replyBtn);
        divWrapper.appendChild(actionsDiv);
        let replySectionDiv = document.createElement('div');
        replySectionDiv.classList.add('replySection')
        replySectionDiv.style.display = 'none';
        let replyInput = document.createElement('input');
        replyInput.classList.add('replyInput');
        replyInput.type = 'text';
        replyInput.placeholder = 'Reply to this question here...';
        replySectionDiv.appendChild(replyInput);
        let sendButton = document.createElement('button');
        sendButton.classList.add('replyButton');
        sendButton.innerText = 'Send';
        sendButton.addEventListener('click', sendReplyHandler);
        replySectionDiv.appendChild(sendButton);
        let ol = document.createElement('ol');
        ol.classList.add('reply');
        ol.type = '1';
        replySectionDiv.appendChild(ol);
        divWrapper.appendChild(replySectionDiv);
        openQuestions.appendChild(divWrapper);
    }

    function archiveHandler(e) {
        e.preventDefault();
        let pendingQuestionHtml = e.target.parentNode.parentNode;
        pendingQuestions.removeChild(pendingQuestionHtml);
    }

    function buildPendingQuestionHTML(question, sender) {
        let wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('pendingQuestion');
        let img = buildImgHtml();
        wrapperDiv.appendChild(img);
        let span = document.createElement('span');
        span.innerText = sender === '' ? 'Anonymous' : sender;
        wrapperDiv.appendChild(span);
        let p = document.createElement('p');
        p.innerText = question;
        wrapperDiv.appendChild(p);
        let actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions')
        let archiveBtn = document.createElement('button');
        archiveBtn.classList.add('archive');
        archiveBtn.innerText = 'Archive';
        archiveBtn.addEventListener('click', archiveHandler);
        actionsDiv.appendChild(archiveBtn);
        let openBtn = document.createElement('button');
        openBtn.classList.add('open');
        openBtn.innerText = 'Open';
        openBtn.addEventListener('click', openHandler)
        actionsDiv.appendChild(openBtn);
        wrapperDiv.appendChild(actionsDiv);
        return wrapperDiv;
    }

    function sendHandler(e) {
        e.preventDefault();
        let pendingQuestion = buildPendingQuestionHTML(textArea.value, username.value);
        textArea.value = '';
        username.value = '';
        pendingQuestions.appendChild(pendingQuestion);
    }

    sendBtn.addEventListener('click', sendHandler);
}