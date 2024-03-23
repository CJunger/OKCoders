let userName;
let unArr;
let avatar;
const loginbutton = document.getElementById('login');

loginbutton.onclick = loginUser

function loginUser () {
        userName = prompt('Please enter First and Last Name');
        avatar = createAvatar(userName);
        displayAvatar();
}
function createAvatar (userName) {
    if (!userName) {
        alert ('We need a name!');
        return;
    }
    unArr = userName.split(' ');
    if (unArr.length <2) {
        alert('You must enter two names');
        return;
    }
    return unArr[0][0] + unArr [1][0];
}
function displayAvatar() {
    loginbutton.style.display = 'none';
    document.getElementById('avatar').innerText = avatar;
}

const shoppingCartObject = {}
function shoppingCartItem() {}
