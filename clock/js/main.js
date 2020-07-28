
(function main(){



let totalSeconds = 0;
let startButton = document.getElementById('start-clock');
let stopButton = document.getElementById('stop-clock');
let startTimer = document.getElementById('start-timer');
let stopTimer = document.getElementById('stop-timer');
let timerSeconds = document.getElementById('timer-second-hand');
let timerMinutes = document.getElementById('timer-minute-hand');
let timerHours = document.getElementById('timer-hour-hand');
let resetButton = document.getElementById('clear-timer');
let timer = null;


    var styleSecond = document.createElement('style');
    styleSecond.innerHTML = `
  .clock .second-hand {
  width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -40% -3px 0;
    padding: 40% 1px 0;
    background: #fff;
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }
  `;
    document.head.appendChild(styleSecond);

    var styleMinute = document.createElement('style');
    styleMinute.innerHTML = `
  .clock .minute-hand {
   width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -40% -3px 0;
    padding: 40% 2px 0;
    background: #fff;
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }
  `;
    document.head.appendChild(styleMinute);

    var styleHour = document.createElement('style');
    styleHour.innerHTML = `
  .clock .hour-hand {
   width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -4px 0 -4px -25%;
    padding: 4px 0 4px 25%;
    background: #fff;
    -webkit-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }
  `;
    document.head.appendChild(styleHour);




    startButton.onclick = function() {
        if (!timer) {
            timer = setInterval(setTimeClock, 100);
        }
    };

    stopButton.onclick = function() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    };
    startTimer.onclick = function() {
        if (!timer) {
            timer = setInterval(setTimeTimer, 1000);

        }
    };

    stopTimer.onclick = function() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        console.log(totalSeconds)
    };

    resetButton.onclick = function() {
        console.log("working")

        document.getElementById("timer-hour-hand").style.transform = "rotate(90deg)";
        document.getElementById("timer-minute-hand").style.transform = "rotate(0deg)";
        document.getElementById("timer-second-hand").style.transform = "rotate(0deg)";
    };


    function setTimeClock() {


        var now = moment(),
            second = now.seconds() * 6,
            minute = now.minutes() * 6 + second / 60,
            hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
        //console.log(now)

        $('#clock-hour-hand').css("transform", "rotate(" + hour + "deg)");
        $('#clock-minute-hand').css("transform", "rotate(" + minute + "deg)");
        $('#clock-second-hand').css("transform", "rotate(" + second + "deg)");

        //Display date and time just below the clock
        $('.currentDateTime').text(moment().format('MMM DD YYYY HH:mm:ss'));

    }

    function setTimeTimer(){

        var now = moment(),
            second = now.seconds() * 6,
            minute = now.minutes() * 6 + second / 60,
            hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;
        console.log(now)



        $('#timer-hour-hand').css("transform", "rotate(" + hour + "deg)");
        $('#timer-minute-hand').css("transform", "rotate(" + minute + "deg)");
        $('#timer-second-hand').css("transform", "rotate(" + second + "deg)");


        $('.totalSeconds').text(moment().format('HH:mm:ss'));
    }


})();

//}

