
var result= document.getElementById("result");
function display(number) {
result.value += number;
}
function calculate(){
     var final_number=result.value;
     var final_result = eval(final_number)
     result.value=final_result;
}
function farhad() {
    result.value="";

}
function snjan() {
    result.value=result.value.slice(0,-1);

}

