function timing(){
    var now =  new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hour = now.getHours();

    document.getElementById("current_time").innerHTML = hour + ":"+minutes+":"+seconds;
}
//timing();
