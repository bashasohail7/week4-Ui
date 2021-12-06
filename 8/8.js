var tipPercent=0;
var bill=document.getElementById("bill").value;
var person=document.getElementById("person").value;

// if we already got values of tippercent and number of people and bill is the last input we r getting then will get result
document.getElementById("bill").onkeyup=function(){
      bill=document.getElementById("bill").value
      if(tipPercent>0&&person>0) cal()
}

// if we already got values of tippercent and bill and Person is the last input we r getting then will get result
document.getElementById("person").onkeyup=function(){
    person=document.getElementById("person").value
if(tipPercent>0&&bill>0) cal()
}

// if we already got values of bill and number of people and tipPercent is the last input we r getting then will get result
//creating a single function for 6 buttons by checking tagname
document.getElementById("tip").onclick = function(event) {
    let target = event.target; // where was the click?
    if (target.tagName === 'BUTTON'){ 
         tipPercent=target.innerText.replace("%","")
         //if tipPercent is custom then we are creating a prompt , to get a custom value and make tip 
         if(tipPercent==="Custom"){
              tipPercent=prompt("Enter ur  Tip Percent")
         }
        // alert(tipPercent)
        if(bill>0&&person>0) cal()
    }
  }

  function cal(){
   var tipPerPerson=Math.ceil((bill*tipPercent)/(100*person))
   var totalPerPerson=Math.ceil(bill/person+(bill*tipPercent)/(100*person))
    if(person>0) {
        document.getElementById("tipper").innerHTML="<label class='rs' >Rs.</label>"+tipPerPerson
        document.getElementById("totalper").innerHTML="<label class='rs' >Rs.</label>"+totalPerPerson
    }
    else{
    document.getElementById("tipper").innerHTML="<label class='rs' >Rs.</label>-"
    document.getElementById("totalper").innerHTML="<label class='rs' >Rs.</label>-"
    }
  }
  function reset(){
      document.getElementById("bill").value=0
      document.getElementById("person").value=0
      person=0
      cal()
  }
