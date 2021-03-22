function time_box(){
    var now =  new Date();
    var n = now.getDate();

    document.getElementById("current_time").innerHTML = n;
}
time_box();
