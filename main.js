const entryField = document.querySelector('.entry-field');
const buttonSubmit = document.querySelector('.button-submit');
const lastMessage = document.querySelector('.message');
const container = document.querySelector('.project-container');
const body = document.querySelector('.body');

function noMessWindow() {
    let noMessageWindow = document.createElement('div');
    noMessageWindow.classList.add('no-message-window');
    noMessageWindow.innerHTML = 'No Message!';
    body.appendChild(noMessageWindow);
}

function timeOut() {
    document.querySelector('.no-message-window').remove();
}

function createNewMess() {
    let newMass = document.createElement('div');
    newMass.classList.add('message-new');
    newMass.innerHTML = entryField.value;
    container.appendChild(newMass);
}

function addMessage() {
    if (entryField.value === "") {
        noMessWindow();
        setTimeout(timeOut, 2000);
    } else if (lastMessage.innerHTML === 'DO THIS PROJECT!') {
        lastMessage.innerHTML = entryField.value;
    } else {
        createNewMess();
    }
        entryField.value = event.target.value;
}

buttonSubmit.addEventListener('click', addMessage);