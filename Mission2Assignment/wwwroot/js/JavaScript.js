//Stetson Kent
//This Function takes the values passed from the form and generates the final overall percentage and leter grade for the course

$("#calculator").click(function () {
    let assignmentGrade = parseFloat($("#assignments").val());
    let projectGrade = parseFloat($("#groupproject").val());
    let quizGrade = parseFloat($("#quizzes").val());
    let examGrade = parseFloat($("#exams").val());
    let intexGrade = parseFloat($("#intex").val());

    //Calculates overall percentage
    finalGradePercentage = (assignmentGrade * .55) + (projectGrade * .05) + (quizGrade * .10) + (examGrade * .20) + (intexGrade * .10);

    //Determines what letter grade was earned
    if (finalGradePercentage >= 94) {
        finalLetterGrade = "A";
    }
    else if (finalGradePercentage >= 90) {
        finalLetterGrade = "A-";
    }
    else if (finalGradePercentage >= 87) {
        finalLetterGrade = "B+";
    }
    else if (finalGradePercentage >= 84) {
        finalLetterGrade = "B";
    }
    else if (finalGradePercentage >= 80) {
        finalLetterGrade = "B-";
    }
    else if (finalGradePercentage >= 77) {
        finalLetterGrade = "C+";
    }
    else if (finalGradePercentage >= 74) {
        finalLetterGrade = "C";
    }
    else if (finalGradePercentage >= 70) {
        finalLetterGrade = "C-";
    }
    else if (finalGradePercentage >= 67) {
        finalLetterGrade = "D+";
    }
    else if (finalGradePercentage >= 64) {
        finalLetterGrade = "D";
    }
    else if (finalGradePercentage >= 60) {
        finalLetterGrade = "D-";
    }
    else {
        finalLetterGrade = "E";
    }

    //Displays the final letter grade and percentage in an alert box
    alert("Final Grade: " + finalLetterGrade + "\n" + "Final Percentage: " + finalGradePercentage.toFixed(2));
 
    })
