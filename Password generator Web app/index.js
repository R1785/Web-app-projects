function getPassword(){
    var symbols = "0123456789abcdefghijklmnopqrstuvwxyzQ!@#$%^&*()_|}{:?><,./;[]=-/*-~`";
    var passwordLength = 16;
    var password = "";
    for(var i = 0;i<passwordLength;i++){
        var randomNumber = Math.floor(Math.random() * symbols.length);
        password += symbols.substring(randomNumber , randomNumber + 1);
        console.log(password);

    }
    document.getElementById("password").value  = password;
}

