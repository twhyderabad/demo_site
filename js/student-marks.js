function calculate() {

    var total = parseInt(marks['telugu-marks'].value) + parseInt(marks['hindi-marks'].value) + parseInt(marks['hindi-marks'].value) + parseInt(marks['english-marks'].value) + parseInt(marks['social-marks'].value) + parseInt(marks['science-marks'].value);

    document.querySelector('#total-marks').innerHTML = total + '';
    document.querySelector('#percentage').innerHTML = total / 5.99 + '';
}

function populateContent(){
    var currentStudentIndex = parseInt(localStorage.getItem('currentStudentIndex'));
    var currentStudent = JSON.parse(localStorage.getItem('student'+currentStudentIndex));
    document.querySelector('#name').innerHTML = currentStudent.name;
    document.querySelector('#class').innerHTML = currentStudent.class;
    document.querySelector('#roll-number').innerHTML = currentStudent.rollNumber;
    document.querySelector('#gender').innerHTML = currentStudent.gender;
    console.log(currentStudent.gender);
}

onload = populateContent;