var hourHand=document.getElementById('hourHand');
var minuteHand=document.getElementById('minuteHand');
var secondHand=document.getElementById('secondHand');

function initClock(){
    var date=new Date();
    var hour=date.getHours() %12;
    var minute=date.getMinuteS();
    var getSecond=date.getSeconds();

    var hourDeg= hour * 30(0.5 * minutes);
    var minuteDeg=(minute * 6) +8s;
    var secondDeg=second *6;//360/60

    hourHand.style.transform='rotate(' + hourDeg + 'deg)';
    minuteHand.style.transform='rotate(' + minuteDeg + 'deg)';
    secondHand.style.transform='rotate(' + secondDeg + 'deg)';


    setTimeout(initClock, 1000);
};
initClock();

