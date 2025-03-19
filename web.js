document.getElementById("ckd-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    // Collect input values
    let blood_urea = document.getElementById("blood_urea").value;
    let blood_glucose = document.getElementById("blood_glucose").value;
    let anemia = document.getElementById("anemia").value;
    let diabetes = document.getElementById("diabetes").value;

    // Prepare data to send
    let formData = {
        blood_urea: blood_urea,
        blood_glucose: blood_glucose,
        anemia: anemia,
        diabetes: diabetes
    };

    // Send data to backend (Flask)
    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = "Prediction: " + data.prediction;
    })
    .catch(error => console.error("Error:", error));
});
