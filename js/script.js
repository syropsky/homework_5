let menu = document.querySelectorAll('.menu-item');
    menu[1].textContent = "Второй пункт";
    menu[2].textContent = "Третий пункт";


let addMenu = document.querySelector('.menu'),
    createDiv = document.createElement('div');

    createDiv.classList.add('menu-item');
    createDiv.textContent = 'Пятый пункт';    

addMenu.appendChild(createDiv);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';


let newText = document.querySelectorAll('.title');
    newText[0].textContent = "Мы продаем только подлинную технику Apple";


let wrapper = document.querySelectorAll('.column')[1],
    adv = document.querySelectorAll('column, .adv');
    
wrapper.removeChild(adv[0]);


let answer = document.querySelectorAll('.prompt');

answer[0].textContent = prompt("Каково ваше отношение к apple?");
