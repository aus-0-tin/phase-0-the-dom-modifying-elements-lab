const mainNode = document.getElementById('main');
mainNode.remove();


const newHeader = document.createElement('h1');


newHeader.setAttribute('id', 'victory');


const yourName = 'YOUR-NAME';
newHeader.textContent = `${yourName} is the champion`;


document.body.appendChild(newHeader);
