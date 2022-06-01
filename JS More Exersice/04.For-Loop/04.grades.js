function grades(input){
    let index = 0;
    let students = Number(input[index++]);

    let topStudents = 0;
    let studentsAbove4 = 0;
    let studentsAbove3 = 0;
    let failedStudents = 0;
    let avgGrades = 0;
    let topStudentsPersentage = 0;
    let studentsAbove4Persentage = 0;
    let studentsAbove3Persentage = 0;
    let failedStudentsPersentage = 0;
    let sumGrades = 0;

    for(let i = 0; i < students; i++){
        let grade = Number(input[index++]);
        if(grade <= 2.99){
            failedStudents++;
            sumGrades += grade;
        } else if(grade <= 3.99){
            studentsAbove3++;
            sumGrades += grade;
        } else if(grade <= 4.99){
            studentsAbove4++;
            sumGrades += grade;
        } else if(grade >= 5){
            topStudents++;
            sumGrades += grade;
        }
        
    }
    avgGrades = sumGrades / students;
    topStudentsPersentage = (topStudents / students) * 100;
    studentsAbove4Persentage = (studentsAbove4 / students) * 100;
    studentsAbove3Persentage = (studentsAbove3 / students) * 100;
    failedStudentsPersentage = (failedStudents / students) * 100;

    console.log(`Top students: ${topStudentsPersentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${studentsAbove4Persentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${studentsAbove3Persentage.toFixed(2)}%`);
    console.log(`Fail: ${failedStudentsPersentage.toFixed(2)}%`);
    console.log(`Average: ${avgGrades.toFixed(2)}`);
}
grades(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"]);