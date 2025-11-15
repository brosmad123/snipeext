if (document.URL.indexOf("https://www.rolimons.com/deals") < 0) {
if (document.getElementsByTagName("nav")[0]) {
var parentGuest = document.getElementsByTagName("nav")[0];
var childGuest = document.createElement("div");
childGuest.id = "SnipeExtNotification";
parentGuest.parentNode.insertAdjacentElement("beforebegin", childGuest);
document.getElementById("SnipeExtNotification").style.textAlign = "center";
if (sessionStorage.getItem("SnipeExtmaxPrice")) {
document.getElementById("SnipeExtNotification").style.position = "sticky";
document.getElementById("SnipeExtNotification").style.top = "0";
document.getElementById("SnipeExtNotification").style.zIndex = "9999999999";
document.getElementById("SnipeExtNotification").innerHTML = '<div style="background-color:white;color:black;">SnipeExt filters are currently active. Press the "Reset" button to reset all of the filters. <button onclick="window.location.href = ' + "'https://www.rolimons.com/deals?SnipeExtreset'" + '">Reset</button></div>';
}
if (!sessionStorage.getItem("SnipeExtmaxPrice")) {
    document.getElementById("SnipeExtNotification").innerHTML = '<div style="background-color:white;color:black;">SnipeExt filters have not been set yet. Go to the <a style="color:blue;" href="https://www.rolimons.com/deals">Deals</a> page to start using SnipeExt.</div>';
}
}
}