//grabbing bio pages
const bio1 = document.getElementById('page-1');
const bio2 = document.getElementById('page-2');
const bio3 = document.getElementById('page-3');
const bio4 = document.getElementById('page-4');

//grabbing bio buttons
const bioBtn1 = document.getElementById('page-1-btn');
const bioBtn2 = document.getElementById('page-2-btn');
const bioBtn3 = document.getElementById('page-3-btn');
const bioBtn4 = document.getElementById('page-4-btn');

//grabbing hole section
const hole = document.getElementById('hole-punch');

//grabbing the photo and description
const photo = document.getElementById('photo');
const description = document.getElementById('desc-text');

//pressing the welcome button
const welcome = () => {
    bio1.style.display = 'block';
    bio2.style.display = 'none';
    bio3.style.display = 'none';
    bio4.style.display = 'none';
    hole.style.backgroundColor = 'rgba(0, 255, 0, 0.3)'
}

//pressing the growing up button
const growingUp = () => {
    bio1.style.display = 'none';
    bio2.style.display = 'block';
    bio3.style.display = 'none';
    bio4.style.display = 'none';
    hole.style.backgroundColor = 'rgba(255, 0, 0, 0.3)'
}

//pressing the career button
const career = () => {
    bio1.style.display = 'none';
    bio2.style.display = 'none';
    bio3.style.display = 'block';
    bio4.style.display = 'none';
    hole.style.backgroundColor = 'rgba(255, 255, 0, 0.3)'
}

//pressing the programming button
const programming = () => {
    bio1.style.display = 'none';
    bio2.style.display = 'none';
    bio3.style.display = 'none';
    bio4.style.display = 'block';
    hole.style.backgroundColor = 'rgba(0, 0, 255, 0.3)'
}

//hovering over picture 
const descrAppear = () => {
    description.style.display = 'block';
}

const descGone = () => {
    description.style.display = 'none';
}

//button event listeners
bioBtn1.addEventListener('click', welcome);
bioBtn2.addEventListener('click', growingUp);
bioBtn3.addEventListener('click', career);
bioBtn4.addEventListener('click', programming);

//photo event listener
photo.addEventListener('mouseenter', descrAppear);
photo.addEventListener('mouseleave', descGone);