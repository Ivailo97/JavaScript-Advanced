function solve() {

    document.getElementById('send').addEventListener('click', sendMessage);

    function sendMessage() {

        let parentDiv = document.getElementById('chat_messages');

        let inputMessageElement = document.getElementById('chat_input');

        let div = document.createElement('div');
        div.className = 'message my-message';
        div.textContent = inputMessageElement.value;

        parentDiv.appendChild(div);

        inputMessageElement.value = '';
    }
}