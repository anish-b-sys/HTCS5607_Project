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