/**
 * name: getAllStudents
 * @param: null
 * @returns students []
 */

function getAllStudents(){
    // students = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Student/',
        success: function (data) {
            students = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return students;
}

/**
 * @name getStudent
 * @param student_id
 * @returns student object
 */
function getStudent(id){
    student = null;
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Student/'+id,
        success: function (data) {
            student = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return student;


}

/**
 * @name getEnrolmentInfo
 * @param StudentID
 * @returns enrolled boolean
 */
function hasEnrolled(studentID){
    enrolled = false;
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://balham-college-db.herokuapp.com/api/Enrolment/',
        success: function (data) {
// location.reload();
            j = 0;
            while (j < data.length){
                console.log(studentID);
                enrolment = data[j];
                if (enrolment.Student === studentID ){
                    enrolled = true;
                    return enrolled;
                }
                j = j + 1;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return enrolled;
}

function getEnrolment(EnrolmentID){
    enrolments = 0;
    console.log(EnrolmentID);
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Enrolment/'+EnrolmentID,
        success: function (data) {
            enrolments = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return enrolments;
}

function getCourseInfo(courseID) {
    courseName = "";
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async: false,
        url: 'https://balham-college-db.herokuapp.com/api/Course/'+courseID,
        success: function (data) {
            courseName = data;
        },
        error: function (err) {
            console.log(err);
        }
    });
    return courseName;
}
function getEnrollmentsByStudents(StudentID) {
    enrolments = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Enrolment/',
        success: function (data) {
            enrolmentsTemp = data;
            var i = 0;
            while (i<enrolmentsTemp.length){
                enrolment = enrolmentsTemp[i];
                if (StudentID == enrolment.Student){
                    enrolments.push(enrolment);
                }
                i++;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return enrolments;
}