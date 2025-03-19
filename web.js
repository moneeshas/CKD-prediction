document.getElementById("predictForm").addEventListener("submit", function(event) {
    let inputs = document.querySelectorAll("input, select");
    let valid = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valid = false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "1px solid #ccc";
        }
    });

    if (!valid) {
        alert("Please fill all fields!");
        event.preventDefault();
    }
});

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Function to display prediction result in modal
function showPrediction(prediction) {
    document.getElementById("predictionResult").innerText = `Prediction: ${prediction}`;
    
    let ctx = document.getElementById("predictionChart").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["CKD Positive", "CKD Negative"],
            datasets: [{
                data: prediction === "Yes" ? [80, 20] : [20, 80],
                backgroundColor: ["red", "green"]
            }]
        }
    });

    new bootstrap.Modal(document.getElementById("resultModal")).show();
}

// Function to enable voice feedback
function speakPrediction(result) {
    let speech = new SpeechSynthesisUtterance();
    speech.text = "The prediction result is " + result;
    window.speechSynthesis.speak(speech);
}
