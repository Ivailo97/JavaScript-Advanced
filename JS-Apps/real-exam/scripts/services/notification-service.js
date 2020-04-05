export function triggerSuccessNotification(message) {

    const notificationContainer = document.getElementById('notifications');

    const succesDiv = document.createElement('div');
    succesDiv.setAttribute('id', 'successBox');
    succesDiv.classList.add('alert');
    succesDiv.classList.add('alert-success');
    succesDiv.setAttribute('role', 'alert');
    succesDiv.innerHTML = message;

    notificationContainer.appendChild(succesDiv);

    setTimeout(() => {
        notificationContainer.removeChild(succesDiv);
    }, 5000)
}

export function triggerErrorNotification(message) {

    const notificationContainer = document.getElementById('notifications');

    const succesDiv = document.createElement('div');
    succesDiv.setAttribute('id', 'errorBox');
    succesDiv.classList.add('alert');
    succesDiv.classList.add('alert-success');
    succesDiv.setAttribute('role', 'alert');
    succesDiv.innerHTML = message;

    notificationContainer.appendChild(succesDiv);

    setTimeout(() => {
        notificationContainer.removeChild(succesDiv);
    }, 5000)
}