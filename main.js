const entryField = document.querySelector('.entry-field');
const buttonSubmit = document.querySelector('.button-submit');
const lastMessage = document.querySelector('.message');
const container = document.querySelector('.project-container');
const body = document.querySelector('.body');

function addMessage() {
    function deleteTextInput() {
        entryField.value = event.target.value;
    }
    if (entryField.value === "") {
        function noMessWindow() {
            let noMessageWindow = document.createElement('div');
            noMessageWindow.classList.add('no-message-window');
            noMessageWindow.innerHTML = 'No Message!';
            body.appendChild(noMessageWindow);

            function timeOut() {
                document.querySelector('.no-message-window').remove();
            }

            setTimeout(timeOut, 2000);
        }
        noMessWindow()
    } else if (lastMessage.innerHTML === 'DO THIS PROJECT!') {
        lastMessage.innerHTML = entryField.value;
    } else {
        let newMass = document.createElement('div');
        newMass.classList.add('message-new');
        newMass.innerHTML = entryField.value;
        container.appendChild(newMass);
    }
    deleteTextInput()
}

buttonSubmit.addEventListener('click', addMessage);