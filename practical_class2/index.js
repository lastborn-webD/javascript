//  Login Form

const form = document.getElementById("myloginform");
const message = document.getElementById("message");

formbtn.addEventListener("click", function (event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    event.preventDefault();


    if (username === "" || password === "") {
        message.textContent = "please fill in all fields.";
        message.style.color = "red";
    } else {
        message.textContent = "login successful!";
        message.style.color = "green";
    }


    console.log("Username:", username);
    console.log("Password:", password);

});


// TO-DO LIST

const addtaskbutton = document.getElementById("addtaskbutton");
const tasklist = document.getElementById("tasklist");

const taskinput = document.getElementById("taskinput");

addtaskbutton.addEventListener("click", function () {
    const taskvalue = taskinput.value
    if (taskvalue === "") {
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskvalue;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteButton);
    tasklist.appendChild(li);

    taskinput.value = "";

    console.log("Task added:", taskvalue);
}); 



// REGISTRATION FORM
const registrationForm = document.getElementById("myregistrationform");
const registerMessage = document.getElementById("registermessage");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const regusername = document.getElementById("regusername").value;
    const regemail = document.getElementById("regemail").value;
    const regpassword = document.getElementById("regpassword").value;

    let isvalid = true;

    // CLEAR MASSAGE
    registerMessage.textContent = "";

    // INPUT VALIDATION
    if (regusername === "") {
        regusername.classList.add("error");
        regusername.classList.remove("success");
        isvalid = false;
    } else {
        regusername.classList.remove("error");
        regusername.classList.add("success");
    }

    if (regemail === "") {
        regemail.classList.add("error");
        regemail.classList.remove("success");
        isvalid = false;
    } else {
        regemail.classList.remove("error");
        regemail.classList.add("success");
    }

    if (regpassword === "") {
        regpassword.classList.add("error");
        regpassword.classList.remove("success");
        isvalid = false;
    } else {
        regpassword.classList.remove("error");
        regpassword.classList.add("success");
    }

    if (isvalid) {
        registerMessage.textContent = "Registration successful!";
        registerMessage.style.color = "green";
    }

    console.log("Username:", regusername);
    console.log("Email:", regemail);
    console.log("Password:", regpassword);
});