


//    $(document).ready(function(){


//     $('#clock-b').countdown('2021/1/1').on('update.countdown', function(event) {
//         var $this = $(this).html(event.strftime(''
//           + '<div class="holder m-2"><span class="h1 font-weight-bold">%D</span> Day%!d</div>'
//           + '<div class="holder m-2"><span class="h1 font-weight-bold">%H</span> Hr</div>'
//           + '<div class="holder m-2"><span class="h1 font-weight-bold">%M</span> Min</div>'
//           + '<div class="holder m-2"><span class="h1 font-weight-bold">%S</span> Sec</div>'));
//       });

//     });

function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
   // var endTime = new Date("17 May 2020 00:10:00 GMT+05:30");
  var endTime = new Date("16 May 2020 23:43:00 GMT+05:30");
 
   endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    
    // $("#hours").html(hours + "<span>Hour</span>");
    // $("#minutes").html(minutes + "<span>Minutes</span>");
    // $("#seconds").html(seconds + "<span>Seconds</span>");
if(days==0 && hours==0 && minutes==0 && seconds==0){
window.location.pathname="bava/index1.html";
}
else{
    $("#days").html("<span class='h1 font-weight-bold'>" + days + "</span> Day</div>")
    $("#hours").html("<span class='h1 font-weight-bold'>" + hours + "</span> Hr</div>")
    $("#minutes").html("<span class='h1 font-weight-bold'>" + minutes + "</span> Min</div>")
    $("#seconds").html("<span class='h1 font-weight-bold'>" + seconds + "</span> Sec</div>")

    // $("#days").html(days + "<span>Days</span>");
}

}

setInterval(function () { makeTimer(); }, 1000);
