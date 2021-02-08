function getPassword(){
    var str = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+=?><|";

    var password = "";
    var randomNum;

    for(let i = 0; i < 16; i++){
        var num = Math.floor(Math.random() * str.length);

        password += str.substring(num, num + 1);
    }
    return password;
}

var button = document.getElementById('btn');
button.addEventListener('click', ()=>{
    document.getElementById('input').value = getPassword();
})