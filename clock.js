let time = document.getElementById("time")
setInterval(() => {
    let dd = new Date();
    let hh = dd.getHours();
    let mm = dd.getMinutes();
    let ss = dd.getSeconds();
    let ms = dd.getMilliseconds();
    let session = "AM"

    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh- 12;
        session = "PM"
    }

     hh = hh < 10 ? "0" + hh : "" + hh;
     mm = mm < 10 ? "0" + mm : "" + mm;
     ss = ss < 10 ? "0" + ss : "" + ss;


    time.innerHTML= hh + ":" + mm + ":" + ss + " " + session;

}, 1000);

//adding alarm 
function setAlarm(){
  const alarmTimeInput = document.getElementById("timeInput");
  const alarmTime = alarmTimeInput.value;

  if (alarmTime.trim() !== "") {
    // Set the alarm time
    const [hours, minutes] = alarmTime.split(":");
    const alarmDate = new Date();
    alarmDate.setHours(hours);
    alarmDate.setMinutes(minutes);
    alarmDate.setSeconds(0);

    // Display Alarm time
    const display = document.getElementById("display");
    display.innerHTML = `Alarm set for ${alarmTime}`;

    // Check current time against alarm time every second
    const checkAlarm = setInterval(() => {
      const currentTime = new Date();

      // Check if current time matches alarm time
      if (currentTime.getTime() >= alarmDate.getTime()) {
        playAlarm();
        clearInterval(checkAlarm);
      }
    }, 1000);
  } else {
    // If the input value is empty, you can clear the display
    const display = document.getElementById("display");
    display.innerHTML = "";
  }
}
function playAlarm(){
    document.getElementById('audio').play();
}
function stopAlarm(){
    document.getElementById('audio').pause();
    display.innerHTML = "";
}

// function clock(){
//     let dd = new Date();
//     var hh = dd.getHours();
//     var mm = dd.getMinutes();
//     let ss = dd.getSeconds();
//     let ms = dd.getMilliseconds();
//     ms /= 10
//     let session = "AM."

//     if(hh>12){
//         hh = hh-12;
//         session = "PM"
//     }
    
//     (hh < 10)? "0"+hh:hh;
//     (mm < 10)? "0"+mm:mm;
//     (ss < 10)? "0" +ss:ss;
//     let currentTime = hh + ":" + mm + ":" + ss + " " + session ;
//     time.innerHTML = currentTime
//     setTimeout(() => {
//         clock();
//     }, 1000);
// }
// clock();
