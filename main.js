document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("predictionForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        let formData = [];
        document.querySelectorAll(".field, .drop").forEach((input) => {
            formData.push(parseFloat(input.value)); // Convert values to numbers
        });

        console.log("Sending data:", formData);

        // Send data to Flask backend
        const response = await fetch("http://127.0.0.1:5000/model", { // Make sure this URL matches your backend
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fields: formData }),
        });

        // Get prediction result
        const result = await response.text();
        alert("Prediction Result: " + (result === "1" ? "CKD Detected" : "No CKD Detected"));
    });
});
