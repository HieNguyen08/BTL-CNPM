const menu = document.getElementById('popmenu');
const select = document.getElementById('select-dropdown');
function pop() {
    menu.classList.toggle('active');
    select.classList.toggle('active');
}

const sort = document.getElementById('sort');
const sortmenu = document.getElementById('sortmenu');
function op() {
    sort.classList.toggle('active');
    sortmenu.classList.toggle('active');
}