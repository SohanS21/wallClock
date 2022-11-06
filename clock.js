console.log('moshi moshi');


function updateClock(){
    let currentTime = new Date();
    

    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    // console.log(currentMinutes);
    
    //choosing am/pm to clock
    timeofDay = (currentHours<12)?'AM':'PM';

    //pad 0 to minute and seconds
    currentMinutes = (currentMinutes<10?'0':'')+currentMinutes;
    currentSeconds = (currentSeconds<10?'0':'')+currentSeconds;

    //convert railway clock to am/pm
    currentHours = currentHours>12?currentHours-12:currentHours;
    currentHours = currentHours==0?12:currentHours;
    
    //prepare the time 
    let currentTimestr = currentHours + ':' + currentMinutes + ":" + currentSeconds + ' ' + timeofDay;
    // console.log(currentTimestr);

    //insert in the dom
    document.getElementById('clock').innerHTML=currentTimestr;
}
