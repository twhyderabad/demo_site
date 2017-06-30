function on_submit(){
    var student = {};
    student.name = document.querySelector('#name').value;
    student.class = document.querySelector('#class').value;
    student.rollNumber = document.querySelector('#roll-number').value;
    student.gender = document.querySelector('form').gender.value;
    if(student.name && student.rollNumber)
        addStudentToStorage(student);
    else
        alert('Please fill all the details')
}

function addStudentToStorage(student){
    var numberOfStudentsAdded = localStorage.getItem('numberOfStudentsAdded');
    numberOfStudentsAdded = numberOfStudentsAdded ? parseInt(numberOfStudentsAdded) + 1 : 1;
    localStorage.setItem('student'+numberOfStudentsAdded, JSON.stringify(student));
    localStorage.setItem('numberOfStudentsAdded', numberOfStudentsAdded);
    console.log('assigning');
    location.assign("student-details.html");
}
