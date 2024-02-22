let i = 0;

{ //for loop
    for(i; i<6; i++) {
        console.log(i);
    }
}

{ //for in loop
    let value = {
        v1: "no",
        v2: "hello"
    }
    for (let key in value) {
        console.log(value[key]);
    }
}

{ //for of loop
    for (let c of "Data") {
        console.log(c);
    }
}

{ //while loop
    let condition = 5;
    while (condition != 0) {
        console.log(condition);
        condition--;
    }
}

{ //do while loop
    let j = 5;
    do {
        console.log("Hello User!");
        j--;
    } while (j != 0);

}

