function time() {
    const today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
     min = checkTime(min);
    sec = checkTime(sec);
    let currentTime = hour + ":" + min + ":" + sec;
    document.getElementById('txt').innerHTML = formatTime(currentTime);
    setTimeout(time, 1000);
}

     function formatTime(time) {
        let [hour,min,sec] = time.split(':');
        hour = parseInt(hour)
        let status = '';
  
        if(hour > 12) {
            hour-=12
            status='PM'
        } else {
            status = 'AM'
        }
        if(hour === 0) {
            hour+=12
        } 
  
        const finalTime = [hour,min,sec].join(':')
        const fullTime = finalTime + " " + status;
        return fullTime;
    }
    function checkTime(x){
        if(x<10){
            x="0" +x;
        }
        return x;
    }

