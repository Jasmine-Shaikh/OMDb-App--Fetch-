var userDetails;

if (localStorage.getItem('userdata')) {
    userDetails = JSON.parse(localStorage.getItem('userdata'))
} else {
    userDetails = [];
}


document.querySelector("form").addEventListener("submit", submitDetails);

function submitDetails() {
    event.preventDefault()

    if (document.getElementById("name").value === null || document.getElementById("email").value === null || document.getElementById("number").value === null || document.getElementById("password").value === null) {
        alert('Please fill all details!')
    } else {
        userDetails.push(

            {

                userName: document.getElementById("name").value,
                userEmail: document.getElementById("email").value,
                userMobile: document.getElementById("number").value,
                userPassword: document.getElementById("password").value,
            }

        )

        localStorage.setItem('userdata', JSON.stringify(userDetails));

        alert("Your account is successfully created!");
        window.location.href = './login.html'
    }
}