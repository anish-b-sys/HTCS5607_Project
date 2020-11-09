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
/**
 * Simon's JavaScript Insert starts here
 */
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
/**
 * @Name: getAllCourses
 * @Parametre: None
 * @returns: Courses Array
 */
function getAllCourses (){
    courses = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Course/',
        success: function (data) {
            courses = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return courses;
}
/**
 * @Name: getAssessments
 * @Parametre: None
 * @returns: Assessments Array
 */
function getAllAssessments (){
    Assessments = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Assessment/',
        success: function (data) {
            Assessments = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return Assessments;
}
/**
 * @Name: getEnrolments
 * @Parametre: None
 * @returns: Enrolments Array
 */
function getAllEnrolments (){
    Enrolments = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Enrolment/',
        success: function (data) {
            Enrolments= data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return Enrolments;
}
/**
 * @Name: getAlLecturers
 * @Parametre: None
 * @returns: Lecturers Array
 */
function getAllLecturers (){
    lecturers = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Lecturer/',
        success: function (data) {
            lecturers = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return lecturers;
}
/**
 * @Name: getAllTopics
 * @Parametre: None
 * @returns: Topics Array
 */
function getAllTopics (){
    topics = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/ResearchTopic/',
        success: function (data) {
            topics = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return topics;
}
/**
 * @Name: getProjectByLecturer
 * @Parametre: Lecturer
 * @returns: Projects Array
 */
function getProjectByLecturer(ProjectID) {
    lecturerProj = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/ResearchProject/',
        success: function (data) {
            projects = data;
            var i = 0;
            while (i<lecturerProj.length){
                project = projects[i];
                if (LecturerID == project.Lecturer){
                    lecturerProj.push(project);
                }
                i++;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return lecturerProj;
}
/**
 * @Name: getAssessmentByCourse
 * @Parametre: Course
 * @returns: Assessments Array
 */
function getAssessmentByCourse(courseID){
    AssessmentCourse = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Assessment/',
        success: function (data) {
            Assessments = data;
            var i = 0;
            while (i<Assessments.length){
                Assessment = Assessments[i];
                if (courseID == Assessment.Course){
                    AssessmentCourse.push(Assessment);
                }
                i++;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return AssessmentCourse;
}
/**
 * @Name: getSelectedecturers
 * @Parametre: LecturerID
 * @returns: Lecturers Array
 */
function getSelectedLecturer(ID){
    lecturers = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Lecturer/' + ID + "/",
        success: function (data) {
            lecturers = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return lecturers;
}
function getAllProgrammes (){
    programmes = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Programme/',
        success: function (data) {
            programmes = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return programmes;
}