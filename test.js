// 1.Define a variable named totalExerciseGoal and assign it a value of 150 minutes. This represents the total exercise time goal for the week.
const totalExerciseGoal = 150;  //total exercise time goal for the week


// 2. Define variables for the time spent exercising each day:
const mondayExercise = 30;
const tuesdayExercise = 25;
const wednesdayExercise = 20;
const thursdayExercise = 15;
const fridayExercise = 35;
const saturdayExercise = 40;
const sundayExercise = 25;

// 3. Calculate the total exercise time for the week by adding the exercise time for each day and assigning it to a variable named totalExerciseTime.

const totalExerciseTime = mondayExercise + tuesdayExercise + wednesdayExercise + thursdayExercise + fridayExercise + saturdayExercise + sundayExercise;


// 4. Calculate the remaining exercise time by subtracting totalExerciseTime from totalExerciseGoal and assign it to a variable named remainingExerciseTime.
const remainingExerciseTime = totalExerciseGoal - totalExerciseTime;

// 5.Determine the exercise status based on the remainingExerciseTime using an if-else statement:
let exerciseStatus;

if(remainingExerciseTime < 0) {
    exerciseStatus = "You have exceeded your exercise goal for the week.";
} else if(remainingExerciseTime < 20) {
    exerciseStatus = "You are close to reaching your exercise goal. Keep it up!";
} else if(remainingExerciseTime < 50) {
    exerciseStatus = "You are doing well, but aim to reach your goal by the end of the week.";
} else {
    exerciseStatus = "You are on track with your exercise goal.";
}

console.log("Weekly Exercise Report");
console.log("----------------------");

console.log("Total Exercise Goal: ", totalExerciseGoal + ` minutes`); 
console.log("Total Exercise Time: ", totalExerciseTime + ` minutes` ); 
console.log("Remaining Exercise Time: ", remainingExerciseTime + ` minutes`); 

console.log("Exercise Status: ", exerciseStatus );

