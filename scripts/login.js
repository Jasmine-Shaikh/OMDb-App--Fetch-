document.querySelector("form").addEventListener("submit", verifyDetails);

var userVerificationDetails = JSON.parse(localStorage.getItem('userdata'));


function verifyDetails() {

    event.preventDefault();

    var enteredId = document.getElementById("email").value;
    var enteredPassword = document.getElementById("password").value;

    userVerificationDetails.forEach(element => {

        if ((enteredId === element.userEmail || enteredId === element.userMobile) && enteredPassword === element.userPassword) {
            alert('Login Successful!');
            window.location.href = "./index.html"
        } else {
            alert("Invalid Credentials!")
        }
    });
}