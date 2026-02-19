// REGISTRATION FORM

const registrationForm = document.getElementById("myregistrationform");
const registerMessage = document.getElementById("registermessage");
const passwordError = document.getElementById("passwordError");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const regusername = document.getElementById("regusername");
    const regemail = document.getElementById("regemail");
    const regpassword = document.getElementById("regpassword");
    const confirmregpassword = document.getElementById("confirmregpassword");

    let isvalid = true;

    // CLEAR MASSAGE
    registerMessage.textContent = "";

    // INPUT VALIDATION
    if (regusername.value === "") {
        regusername.classList.add("error");
        regusername.classList.remove("success");
        isvalid = false;
    } else {
        regusername.classList.remove("error");
        regusername.classList.add("success");
    }

    if (regemail.value === "") {
        regemail.classList.add("error");
        regemail.classList.remove("success");
        isvalid = false;
    } else {
        regemail.classList.remove("error");
        regemail.classList.add("success");
    }

    if (regpassword.value === "") {
        regpassword.classList.add("error");
        regpassword.classList.remove("success");
        isvalid = false;
    } else {
        regpassword.classList.remove("error");
        regpassword.classList.add("success");
    }

    if (confirmregpassword === "") {
        confirmregpassword.classList.add("error");
        confirmregpassword.classList.remove("success");
        passwordError.style.display = "none";
        isvalid = false;
    } else if (confirmregpassword.value !== regpassword.value) {
        confirmregpassword.classList.add("error");
        confirmregpassword.classList.remove("success");
        passwordError.style.display = "block";
        isvalid = false;
    } else {
        confirmregpassword.classList.remove("error");
        confirmregpassword.classList.add("success");
        passwordError.style.display = "none";
    }

    if (isvalid) {
        registerMessage.textContent = "Registration successful!";
        registerMessage.style.color = "green";
    }

    console.log("Username:", regusername);
    console.log("Email:", regemail);
    console.log("Password:", regpassword);
    console.log("Confirm Password:", confirmregpassword);
});




