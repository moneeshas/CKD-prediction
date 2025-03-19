document.getElementById('predictionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Add your prediction logic here
    alert('Prediction logic will be implemented here.');
    // Example: Collect form data and send it to a backend API
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // You can use fetch or axios to send the data to your backend
});
