function one() {
    // alert(1)
    var innervalue=document.getElementById("basic").innerText;
    if(innervalue==="$19.99"){
        document.getElementById("basic").innerHTML="<span>$</span>199.99"
        document.getElementById("professional").innerHTML="<span>$</span>229.99"
        document.getElementById("master").innerHTML="<span>$</span>369.99"
    }
    else{
    document.getElementById("basic").innerHTML="<span>$</span>19.99"
    document.getElementById("professional").innerHTML="<span>$</span>24.99"
    document.getElementById("master").innerHTML="<span>$</span>39.99"
    }
   
}