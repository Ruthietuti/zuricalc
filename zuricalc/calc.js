function myFunction() {
    var x,y,z,oper;
    x= prompt(" first number");
    y=prompt("type second number");
    oper=prompt("Operator");

    if(oper=="+"){
        z=Number(x)+Number(y);
    }
    else if (oper=!null){
        z="Error"
    }
    else if(x=!null){
        z="Error"
    }
    else if(y=!null){
        z="Error"
    }
    else if (oper =="/"){
        z=Number(x)/Number(y);
    }
    else if (oper=="*"){
        z=Number(x)*Number(y);
    }
    else if(oper=="_"){
        z=Number(x)-Number(y);
    }
    return z
    ;
}
document.getElementById("calc").innerHTML =myFunction();
