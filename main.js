const entryField = document.querySelector('.entry-field');
const buttonSubmit = document.querySelector('.button-submit');
const lastMessage = document.querySelector('.massage');
const container = document.querySelector('.project-container');

function addMessage (){
    // entryField.value = event.target.value;
    // if (entryField === ''){
    //     buttonSubmit.setAttribute('disabled', 'disabled');
    // }else{
    //     buttonSubmit.removeAttribute('disabled', 'disabled');
    // }

    // if (lastMessage === 'DO THIS PROJECT!'){
    //     lastMessage.innerHTML = entryField.value;
    // }else{
        let newMass =document.createElement('h2');
        newMass.classList.add('massage');
        newMass.innerHTML = entryField.value;
        container.appendChild(newMass);
    // }
}


buttonSubmit.addEventListener('click', addMessage);