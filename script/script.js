 var input = document.getElementById("input");
 var numbers = 0;
 var first_num = 0;
 var second_num = 0;
 var operator = "";
 var result = 0;
 start();

function start(){
    input.innerHTML = 0;
    document.getElementById("nama").innerHTML = "...";
}
function update_text(text){
    input.innerHTML = text;
}
function key(num){
    if(numbers + num !=0)
    numbers = String(numbers + num);
    update_text(numbers);
}
function sum(){
    operator = "sum";
    if(first_num == 0){
        first_num = numbers;
        numbers = 0;
    }else if(second_num == 0){
        second_num = numbers;
        numbers = 0;
    }else{
        first_num = result;
        second_num = 0;
    }
        result = Number(first_num) + Number(second_num);
        document.getElementById("nama").innerHTML = "+";
}
function sub(){
    operator = "sub";
    if(first_num == 0){
        first_num = numbers;
        numbers = 0;
    }else if (second_num == 0){
        second_num = numbers;
        numbers = 0;
    }else{
        first_num = result;
        second_num = 0;
    }
        result = Number(first_num) - Number(second_num);
        document.getElementById("nama").innerHTML = "-";
}
function times(){
    operator = "times";
    if(first_num == 0){
        first_num = numbers;
        numbers = 0;
    }else if (second_num == 0){
        second_num = numbers;
        numbers = 0;
    }else{
        first_num = result;
        second_num = 0;
    }
        result = Number(first_num) * Number(second_num);
        document.getElementById("nama").innerHTML = "⨯";
}
function divide(){
    operator = "divide"; 
    if(first_num == 0){
        first_num = numbers;
        numbers = 0;
    }else if (second_num == 0){
        second_num = numbers;
        numbers = 0;
    }else{
        first_num = result;
        second_num = 0;
    }
        result = Number(first_num) / Number(second_num) ;
        document.getElementById("nama").innerHTML = "/"; 
}
function tasavi(){
    if(operator == "sum"){
    sum();
    }else if (operator == "sub"){
    sub();
    }else if (operator == "times"){
    times();
    operator = 0;
    }else if (operator == "divide"){
    divide();
    operator = 0;
    }
    update_text(result)
}
function clear_all(){
    start();
    numbers = 0;
    first_num = 0;
    second_num = 0;
    result = 0;
    operator = "";
}
function remove_back(){
    if(numbers.length > 0){
    numbers = numbers.substring(0,numbers.length - 1);
    }
    update_text(numbers);
    
}
