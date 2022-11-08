var interval = 1000;

const countdown =()=>{
    const countDate = new Date("December 25, 2022 00:00:00").getTime();
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

    //thinking about when the countdown reaches zero
    // if (gap <= 0) {
    //     clearInterval(countInterval);
    // }   
};

setInterval(countdown, interval);
