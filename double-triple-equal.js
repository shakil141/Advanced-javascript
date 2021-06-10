// double equal vs triple equal explain

// double equal = The double equal means left operand and right operand value same . it checks  for value equality only
// triple equal = the triple equal means left operand and right operand checks for value equality and data types same.

// double equal (==)
// triple equal (===)

// This program explain for double equal 

    let x = "test";
    let y = "test";

    if(x == y)
    {
        console.log("The condition is true");
    }else{
        console.log("The condition is false");
    }


// This program explain for triple equal

    let number = 20;
    let stringNumber = "20";

    if(number === stringNumber)
    {
        console.log("The Condition is true");
    }else{
        console.log("The Condition is false");
    }