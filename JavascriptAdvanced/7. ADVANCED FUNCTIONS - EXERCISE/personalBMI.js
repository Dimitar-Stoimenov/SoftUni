function solve(name, age, weight, height) {
    let BMI = Math.round(weight / ((height / 100) ** 2));
    let status = null;

    if (BMI < 18.5) {
        status = 'underweight';
    } else if (BMI < 25) {
        status = 'normal';
    } else if (BMI < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
    };

    let obj = {
        name,
        personalInfo: { age, weight, height },
        BMI,
        'status': status,
    };

    if (status === "obese") {
        obj.recommendation = 'admission required';
    };

    return obj;
};

solve(
    'Honey Boo Boo', 9, 57, 137
)