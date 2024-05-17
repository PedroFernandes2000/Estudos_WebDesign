function change1(){
    document.getElementById("changeMe").innerHTML = "poderei";
}
function matematicaNaoFuncinaAssim(){
    var none1 = prompt("number 1")
    var none2 = prompt("number 2")
    none1 = parseInt(none1, 10);
    none2 = parseInt(none2, 10);
    document.write("say my name.")
    document.getElementById("demo").innerHTML = none1 + none2;
}