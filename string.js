let a = "name is";
let b = "Azizul";

console.log("My " + a + " " + b);
console.log(`My ${a} ${b}`); //Template literals

{ //Escape Sequence
    console.log("Exam\"ple");
    console.log('Exam"ple');
    console.log(`Exam"ple`);
}

console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))