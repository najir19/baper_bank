let user = document.getElementById('user');
let pass = document.getElementById('pass');

let submit = document.getElementById('submit');


submit.addEventListener('click', function () {
    if (user.value == "najirahamed29@gmail.com" && pass.value == 1234) {
        window.location.href = "inner.html";
    }
});