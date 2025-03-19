from flask import Flask, request, render_template, jsonify
import pickle
import requests

app = Flask(__name__)

# Load Model
model = pickle.load(open('CKD.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    blood_urea = request.form["blood_urea"]
    blood_glucose_random = request.form["blood_glucose_random"]
    coronary_artery_disease = request.form["coronary_artery_disease"]
    anemia = request.form["anemia"]
    diabetesmellitus = request.form["diabetesmellitus"]

    # Convert categorical values to numeric
    c1 = 1 if coronary_artery_disease == 'Yes' else 0
    a1 = 1 if anemia == 'Yes' else 0
    d1 = 1 if diabetesmellitus == 'Yes' else 0

    t = [[int(blood_urea), int(blood_glucose_random), c1, a1, d1]]

    # Predict
    prediction = model.predict(t)[0]
    result = "Yes" if prediction == 1 else "No"

    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)
