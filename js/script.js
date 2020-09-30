const mainEl = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

const h3El = document.createElement('h3');

let data = [];
getRantdomUser()
getRantdomUser()
getRantdomUser()

async function getRantdomUser() {
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://randomuser.me/api/'
    const res = await fetch(url); 
    const data = await res.json();
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000) 
    }
    addData(newUser);
}

function addData(newUser) {
    data.push(newUser);
    displayUser(data);
}

function formatMoney(number) {
    return `$${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}

function displayUser(users = data) {
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
    users.forEach(user => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${user.name}</strong> ${formatMoney(user.money)}`;
        main.appendChild(element);
    });
}

function doubleMoney() {
    data = data.map(user=>{
        return {...user, money: user.money * 2}
    })
    displayUser();
}

function sortUser() {
    data.sort((a, b)=>{
      return  b.money - a.money
    });
    displayUser();
}

function filterUser() {
    data = data.filter(item => item.money >= 1000000);
    displayUser();
}

function calculateWealth() {
    const total = data.reduce((acc, user)=> (acc += user.money), 0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(total)}</strong></h3>`;
    mainEl.appendChild(wealthEl);

}

addUserBtn.addEventListener('click', getRantdomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortUser);
showMillionairesBtn.addEventListener('click', filterUser);
calculateWealthBtn.addEventListener('click', calculateWealth);