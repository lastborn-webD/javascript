    function checkAge() {
      let age = document.getElementById("age").value;
      document.getElementById("ageResult").textContent =
        age >= 18 ? "You are an adult" : "You are a minor";
    }

    function checkNumber() {
      let num = document.getElementById("number").value;
      let result = "";

      if (num > 0) result = "Positive";
      else if (num < 0) result = "Negative";
      else result = "Zero";

      document.getElementById("numberResult").textContent = result;
    }

    function checkScore() {
      let score = document.getElementById("score").value;
      let grade = "";

      if (score >= 70) grade = "A";
      else if (score >= 60) grade = "B";
      else if (score >= 50) grade = "C";
      else if (score >= 40) grade = "D";
      else grade = "F";

      document.getElementById("scoreResult").textContent = "Grade: " + grade;
    }

    function sumNumbers() {
      let sum = 0;
      for (let i = 1; i <= 10; i++) {
        sum += i;
      }
      document.getElementById("sumResult").textContent = "Total: " + sum;
    }

    function countEven() {
      let count = 0;
      for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) count++;
      }
      document.getElementById("evenResult").textContent =
        "Even numbers: " + count;
    }

    function largest() {
      let a = Number(document.getElementById("num1").value);
      let b = Number(document.getElementById("num2").value);
      let c = Number(document.getElementById("num3").value);

      let largest = Math.max(a, b, c);
      document.getElementById("largestResult").textContent =
        "Largest number: " + largest;
    }


    let names = [];

    function addName() {
      let name = document.getElementById("nameinput").value.trim();
      if (name === "") {
        alert("Please enter a name");
       
      } else {
        names.push(name);
        document.getElementById("nameinput").value = "";
      }
    }

    function countNames() {
      document.getElementById("countResult").textContent =
        "Number of names entered: " + names.length;
    }