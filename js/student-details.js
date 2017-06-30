function createStudentsList(numberOfStudentsAdded) {
    students = [];
    for(i=1; i<=numberOfStudentsAdded; i++){
        students.push(JSON.parse(localStorage.getItem('student'+ i)));
    }
    return students;
}
function getStudents(){
    var numberOfStudentsAdded = localStorage.getItem('numberOfStudentsAdded');
    return numberOfStudentsAdded ? createStudentsList(numberOfStudentsAdded) : [];
}

function showStudentMarks(index){
    localStorage.setItem('currentStudentIndex', index);
    location.assign('student-marks.html');
}

function populateStudents() {
    var students = getStudents();
    var studentsTable = document.querySelector('#studentsTable');
    if(students.length == 0){
        studentsTable.classList.add('hide')
        return;
    }
    else
        studentsTable.classList.remove('hide')

    students.map(function (student, index) {
        console.log(index, 1);
        var row = studentsTable.insertRow();
        row.insertCell(0).innerHTML = student.name;
        row.insertCell(1).innerHTML = student.class;
        row.insertCell(2).innerHTML = student.rollNumber;
        row.insertCell(3).innerHTML = student.gender;
        row.insertCell(4).innerHTML = "<a onclick='showStudentMarks("+ (index + 1) +")'>Click here</a>";
    })
}
window.onload = populateStudents;
