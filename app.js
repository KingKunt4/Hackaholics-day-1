function setIcon(inputId, iconId, isValid){
    const icon = document.getElementById(iconId);
    const line = document.getElementById(inputId)
    const lineColor = isValid ? "green" : "red";
    icon.src = isValid ? "res/valid.png" : "res/invalid.png";
    icon.alt = isValid ? "valid" : "invaid";
    icon.style.opacity = "1";
}

document.getElementById('username').addEventListener('input', function (){
    const isValid = this.value.length >= 4;
    setIcon('username', 'username-icon', isValid);
});
document.getElementById('email').addEventListener('input', function(){
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const isValid = pattern.test(this.value);
    setIcon('email', 'email-icon', isValid);
});
document.getElementById('password1').addEventListener('input', function(){
    const value = this.value;
    const hasLength = value.length >= 6;
    const hasNumber = /\d/.test(value);
    const hasSymbol = /[!@#$%^&*(),.;":{}|<>?]/.test(value);
    const isValid = hasLength && hasNumber && hasSymbol;
    setIcon('password1', 'password1-icon', isValid)
});
document.getElementById('password2').addEventListener('input', function(){
    const original = document.getElementById('password1').value;
    const repeat = this.value;
    const isMatch = repeat === original && repeat !== "";
    const icon = document.getElementById('password2-icon');

    icon.src = isMatch ? "res/valid.png" : "res/invalid.png";
    icon.alt = isMatch ? "valid" : "invalid";
    icon.style.opacity = "1";
});

function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}