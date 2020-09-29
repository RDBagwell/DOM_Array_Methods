const mainEl = document.getElementById('mian');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

async function getRantdomUser() {
    const res = await fetch('https://randomuser.me/api/'); 
    const data = await res.json();
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000) 
    }
    addData(newUser);
}

function addData(newUser) {
    data.push(newUser)
    console.log(data)
}



addUserBtn.addEventListener('click', getRantdomUser)