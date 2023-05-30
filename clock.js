let time=document.getElementById("time");
setInterval(()=>{

    const date = new Date();
    const htime = date.getHours();
    const mtime = date.getMinutes();
    const stime = date.getSeconds();

    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    document.querySelector(`#time`).innerHTML=(`${htime}:${mtime}:${stime}`);
    document.querySelector('#hour').style.transform = `rotate(${hrotation}deg)`;
    document.querySelector('#minute').style.transform = `rotate(${mrotation}deg)`;
    document.querySelector('#second').style.transform = `rotate(${srotation}deg)`; 
}, 1000);


