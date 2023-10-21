let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];

function Signin() {
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("pass").value;

    let count = 0; // Move the count initialization inside the Signin function.

    if (mobile.length !== 10) {
        alert("Mobile number should be of 10 digits");
    } else if (mobile.length === 0) {
        alert("Enter Mobile Number");
    } else {
        for (let i = 0; i < getUsersdata.length; i++) {
            if (mobile == getUsersdata[i].mobile) {
                if (password == getUsersdata[i].password) {
                    alert("Sign in Successful");
                    window.location.href = "index.html";
                    window.location.href = "Product.html"
                    return; // Exit the function after successful sign-in.
                } else {
                    alert("Invalid Password");
                    return; // Exit the function after an invalid password.
                }
            }
            count++; // Increment the count for each user checked.
        }

        // Check the count to determine if the user is not registered.
        if (count === getUsersdata.length) {
            alert("User is not registered, signup to continue");
            window.location.href = "signup.html";
        }
    }
}
