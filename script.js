const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the glorious end!";
container.appendChild(content);

const para = document.createElement('p');
para.textContent = "red for  passion!"
para.style.color = 'red'
container.appendChild(para);

const heading = document.createElement('h3')
heading.textContent = "blue for  vast ocean mind!"
heading.style.color = 'blue'
container.appendChild(heading);



const div = document.createElement('div')
div.style.backgroundColor = 'pink'
div.style.borderStyle = 'ridge'
div.style.borderWidth = '3px'
div.style.textAlign = 'center'
container.appendChild(div)

const divHeading = document.createElement('h1');
divHeading.textContent = 'INSIDE THE WORLD';
div.appendChild(divHeading);

const contentPara = document.createElement('p');
contentPara.textContent = 'UNDER THE FIRMAMENT';
div.appendChild(contentPara);

const divPara = document.createElement('p');
divPara.textContent = '--- the truth shall prevail ---';
div.appendChild(divPara);



const btnTwo = document.querySelector('#btnTwo');
btnTwo.onclick= () => alert('MAXIMUM ABLAZE!   EACH AND EVERY SECOND!!!')

const btnThree = document.querySelector('#btnThree');
btnThree.addEventListener("click", () => {
    alert('TRUST IN HIM');
});

const btnFour = document.querySelector('#btnFour');
btnFour.addEventListener("click", () => {
    alert(btnFour.id)
});