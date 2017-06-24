function openSideNav(){
    var sideBarDisplay = document.getElementById("side-bar").style.width;
    if(sideBarDisplay == "150px")
    {
      document.getElementById("side-bar").style.width="0px";
    document.getElementById("body-content").style.marginLeft = "0px";  
}
else{
       document.getElementById("side-bar").style.width="150px";
    document.getElementById("body-content").style.marginLeft = "150px";  
}
    
}