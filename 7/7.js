    function updateTimer() {
        var future=new Date(2021,11,17,17)
     now = new Date();
     diff = future - now;
    
     days = Math.floor(diff / (1000 * 60 * 60 * 24));
     hours = Math.floor(diff / (1000 * 60 * 60));
     mins = Math.floor(diff / (1000 * 60));
     secs = Math.floor(diff / 1000);
    
     day = Math.abs(days);
     hr = hours - days * 24;
     min = mins - hours * 60;
     sec = secs - mins * 60;
     document.getElementById("day").innerHTML="<h1>"+day+"</h1>"
     document.getElementById("hr").innerHTML="<h1>"+hr+"</h1"
     document.getElementById("min").innerHTML="<h1>"+min+"</h1>"
     document.getElementById("sec").innerHTML="<h1>" +sec+"</h1>"
    }
    setInterval('updateTimer()', 1000)
