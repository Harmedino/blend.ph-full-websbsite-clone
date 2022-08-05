
let showt = document.querySelector('.navs');
function show() {
    // alert()
    showt.classList.toggle('active')

}

// DASHBOARD
let aside = document.querySelector('aside')
const cancle1 = document.querySelector('.cancle');
function show() {
    cancle1.style.display = 'inherit'
    aside.classList.remove('active3')
}
function show2() {
    aside.classList.add('active3')
    cancle1.style.display = 'none'
}
let profile = document.getElementById('profile');
let dashboard_1 = document.getElementById('dashboard_1');

const dashboard = document.querySelector('main')
const refer1 = document.querySelector('.set')
const settings = document.querySelector('.set6')
const personal = document.querySelector('.personal12')
const income = document.querySelector('.income ')
const bank = document.querySelector('.bank11')
function display() {
    profile.classList.toggle('active1');
}
function refer2() {
    dashboard.hidden = true;
    settings.hidden = true;
    refer1.hidden = false;
    personal.hidden = true;
    income.hidden = true;
    bank.hidden = true;

}
function refer3() {
    personal.hidden = false;
    dashboard.hidden = true;
    settings.hidden = true;
    refer1.hidden = true;
    income.hidden = true;
    bank.hidden = true;
}
function refer4() {
    income.hidden = false;
    personal.hidden = true;
    dashboard.hidden = true;
    settings.hidden = true;
    refer1.hidden = true;
    bank.hidden = true;
}
function refer5() {
    personal.hidden = true;
    dashboard.hidden = true;
    settings.hidden = true;
    refer1.hidden = true;
    income.hidden = true;
    bank.hidden = false;
}
function refer6() {
    dashboard.hidden = true;
    settings.hidden = false;
    personal.hidden = true;
    refer1.hidden = true;
    income.hidden = true;
    bank.hidden = true;
}

function popUp() {
    dashboard.hidden = false;
    settings.hidden = true;
    personal.hidden = true;
    refer1.hidden = true;
    income.hidden = true;
    bank.hidden = true;
}

