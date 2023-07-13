function displayTime(){
    const now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const formattedTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerHTML = formattedTime;

    const interval = setInterval(displayTime, 1000);
}

displayTime();