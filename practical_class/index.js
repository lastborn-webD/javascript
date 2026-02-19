// Grade 

function calculateGrade(score) {
    let textcontent;

    if (score > 100 || score < 0) {
        textcontent = "Invalid score";
    }

    if (score >= 70) {
        textcontent = "Grade: A";
    } else if (score >= 60) {
        textcontent = "Grade: B";
    } else if (score >= 50) {
        textcontent = "Grade: C";
    } else if (score >= 40) {
        textcontent = "Grade: D";
    } else {
        textcontent = "Grade: F";
    } 
    return textcontent;
    } 

    let result = calculateGrade(85);
    console.log(result);




    //   ARRAYS
function checkNumber() {
    let numbers = [12, 45, 3, 22, 89, 5, 30];
    let sum = 0;
    let evenCount = 0;
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]); // print all numbers
        sum += numbers[i];

        if (numbers[i] % 2 === 0) {
            evenCount++;
        }

        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    console.log("Sum of numbers:", sum);
    console.log("Count of even numbers:", evenCount);
    console.log("Largest number:", largest);
}

checkNumber();




    // OBEJECTS
let student = {
    name: "Adaeze",
    age: 20,
    course: "Computer Science",
    scores: [75, 82, 90]
};

console.log("Student Name:", student.name);
console.log("Course:", student.course);

let total = 0;

for (let i = 0; i < student.scores.length; i++) {
    total += student.scores[i];
}

let average = total / student.scores.length;

console.log("Student's average is", average);



     // Even/odd checker
let numberinput = document.getElementById("numberinput");
let checkbutton = document.getElementById("checkbutton");
let resultparagraph = document.getElementById("result");

checkbutton.addEventListener("click", function () {
    let number = Number(numberinput.value);
    let result;

    if (number % 2 === 0) {
        result = "Even";
        resultparagraph.style.color = "green";
    } else {
        result = "Odd";
        resultparagraph.style.color = "red";
    }

    resultparagraph.textContent = "The number is " + result;

    // ✅ console log must be inside the function
    console.log("The number is " + number + " and it is " + result);
});



//    VOTING CHECKER
const ageinput = document.getElementById("ageinput");
const citizencheckbox = document.getElementById("citizencheckbox");
const checkeligibilitybutton = document.getElementById("checkeligibilitybutton");
const eligibilityresult = document.getElementById("eligibilityresult");

checkeligibilitybutton.addEventListener("click", function () {
    let age = Number(ageinput.value);
    let isCitizen = citizencheckbox.checked;
    let eligibility;



    if (age < 18) {
        eligibility = "Too young to vote";
        eligibilityresult.style.color = "black";
    } else if (age > 100){
        eligibility = "invalid age";
        eligibilityresult.style.color = "black";
    } else if (!isCitizen) {
        eligibility = "Only citizens can vote";
        eligibilityresult.style.color = "black";
    } else {
        eligibility = "You are eligible to vote"
        eligibilityresult.style.color = "green"
    }

    eligibilityresult.textContent = eligibility;

    console.log("Age: " + age + ", Citizen: " + isCitizen + ", Eligibility: " + eligibility);
});