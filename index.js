document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    // Convert height to meters if entered in centimeters
    if (height > 3) { // If height is greater than 3, assume it's in centimeters
        height = height / 100;
    }
    
    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        let category = '';
        let advice = '';
        
        if (bmi < 18.5) {
            category = 'Underweight';
            advice = 'Consider increasing your caloric intake and strength training.';
        } else if (bmi < 25) {
            category = 'Normal weight';
            advice = 'Maintain your healthy lifestyle!';
        } else if (bmi < 30) {
            category = 'Overweight';
            advice = 'Focus on balanced diet and regular exercise.';
        } else {
            category = 'Obese';
            advice = 'Please consult with a healthcare professional for personalized advice.';
        }

        let resultDiv = document.getElementById('bmiResult');
        if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.id = 'bmiResult';
            document.getElementById('bmiForm').after(resultDiv);
        }
        
        resultDiv.innerHTML = `
            <div style="color: white; margin-top: 20px; text-align: center;">
                <h3>Your BMI: ${bmi}</h3>
                <p>Category: ${category}</p>
                <p style="margin-top: 10px; font-size: 0.9em;">${advice}</p>
            </div>
        `;
    }
});

document.getElementById('workoutCard').addEventListener('click', function() {
    const details = this.querySelector('.workout-details');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('mealCard').addEventListener('click', function() {
    const details = this.querySelector('.meal-details');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('loginBtn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'block';
    document.querySelector('.form-overlay').style.display = 'block';
});

document.getElementById('signupBtn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signupForm').style.display = 'block';
    document.querySelector('.form-overlay').style.display = 'block';
});

document.getElementById('closeLogin').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.querySelector('.form-overlay').style.display = 'none';
});

document.getElementById('closeSignup').addEventListener('click', function() {
    document.getElementById('signupForm').style.display = 'none';
    document.querySelector('.form-overlay').style.display = 'none';
});

// Close forms when clicking outside
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('form-overlay')) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'none';
        document.querySelector('.form-overlay').style.display = 'none';
    }
});