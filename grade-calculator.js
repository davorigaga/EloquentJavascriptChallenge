//students score, total possible score
//A 90 - 100, B. 80 - 89 C. 70 - 79 D. 60 - 69 F. 0 - 59 
let gradeCalculator = function(score, total){
    let grade = (score/total) * 100 
    if(grade>=90){
        console.log(`You scored ${grade} and you fall in the A category`)
    }else if(grade >= 80){
        console.log(`You scored ${grade} and you fall in the B category`)
    }else if(grade >= 70){
        console.log(`You scored ${grade} and you fall in the C category`)
    }else if(grade>=60){
        console.log(`You scored ${grade} and you fall in the D category`)
    }else{
        console.log((`You scored ${grade} and you fall in the F category`))
    }
}
let score = 10
let total = 20
gradeCalculator(score, total)