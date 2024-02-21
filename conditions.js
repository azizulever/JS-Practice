let mark = 456;

if (mark > 32) {
    console.log("Passed!");
}
else if (mark < 2) {
    console.log("Dabba!");
}
else {
    console.log("Failed!");
}

{ //equal to
    if ("3" == 3) { 
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

{ //equal value and equal type
    if ("3" === 3) { 
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

{ //ternary
    let x = "3" === 3 ? console.log("Yes") : console.log("No");
}