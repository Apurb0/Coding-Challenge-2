const marksMass = 95;
const johnMass = 85;
const marksHeight = 1.88;
const johnsHeight = 1.76;

const marksBmi = marksMass / marksHeight ** 2;
const johnBmi = johnMass / (johnsHeight * johnsHeight);

const markHigherBMI = marksBmi > johnBmi;

console.log(markHigherBMI)

if (marksBmi > johnBmi) {
    console.log(`Mark's BMI (${marksBmi}) is higher than John's (${johnBmi})!`);
} else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${marksBmi})!`);
}
