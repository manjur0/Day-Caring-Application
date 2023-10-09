 # Answers to the provider questions.
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer: B: ReferenceError: greetign is not defined

In your code, there is a typo. You declared the variable as greeting but later tried to access it using greetign, which results in a ReferenceError because greetign is not defined.

### Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer: A: NaN (Not-a-Number)

Explanation: In the given code, the sum function is designed to add two numbers. However, when you call sum(1, "2"), you're trying to add a number (1) and a string ("2"). JavaScript will attempt to perform type coercion and convert the string to a number, but since it's not a straightforward numeric conversion, it results in NaN (Not-a-Number).

## Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer: A: ['🍕', '🍫', '🥑', '🍔']

Explanation: In the code, the info.favoriteFood property is initially set to "🍕," which is the first element of the food array. Later, it is updated to "🍝," but this change doesn't affect the food array. Therefore, when you console.log(food), it will still display the original array ['🍕', '🍫', '🥑', '🍔'].

## Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer: B: Hi there, undefined

Explanation: In the sayHi function, there is a parameter name that is not given a default value. When you call sayHi() without passing any argument, name is undefined within the function, resulting in "Hi there, undefined" as the output.

## Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer: B: 2

Explanation: The forEach loop iterates over the nums array, and for each non-zero number (1, 2, and 3), it increments the count by 1. So, after the loop, count is equal to 3, resulting in the output of 2 when you console.log(count).
