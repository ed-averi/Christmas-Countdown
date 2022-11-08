var interval = 1000;
var timeAnnouncement = document.getElementById('time-announcement');
let timerId

const countdown =()=>{
    const countDate = new Date("November 8, 2022 15:26:00").getTime();
    // console.log(countDate)
    const now = new Date().getTime();
    const gap = countDate - now;

    //setting up the time
    const second= 1000;
    const minute=  second * 60;
    const hour=  minute * 60;
    const day=  hour * 24;

    //doing the countdown
    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

    //what if christmas has passed
    if (gap <= -textDay) {
        timeAnnouncement.innerHTML = "Hope you all had a great day";
        document.querySelector(".day").innerText = "";
        document.querySelector(".day-text").innerHTML = "";
        document.querySelector(".hour").innerText = "";
        document.querySelector(".hour-text").innerHTML="";
        document.querySelector(".minute").innerText = "";
        document.querySelector(".minute-text").innerHTML="";
        document.querySelector(".second").innerText = "";
        document.querySelector(".second-text").innerHTML="";
        clearInterval(timerId);
        return
    }

    //thinking about when the countdown reaches zero
    if (gap <= second) {
        timeAnnouncement.innerHTML = "Time is up";
        document.querySelector(".day").innerText = "";
        document.querySelector(".day-text").innerHTML = "";
        document.querySelector(".hour").innerText = "";
        document.querySelector(".hour-text").innerHTML="";
        document.querySelector(".minute").innerText = "";
        document.querySelector(".minute-text").innerHTML="";
        document.querySelector(".second").innerText = "";
        document.querySelector(".second-text").innerHTML="";
        clearInterval(timerId);
        return
    }   
};

timerId=setInterval(countdown, interval);
