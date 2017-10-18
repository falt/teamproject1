document.getElementById("span").addEventListener("click", ExpandToggle)
var d = document.getElementById("span");


function ExpandToggle(){
  var expand = document.getElementById("topic1");
  if(!expand)return true;
  if(expand.style.display=="none"){
    expand.style.display="block";
    d.innerHTML = "Visa mindre";
  }
  else{
    expand.style.display="none";
    d.innerHTML = "Visa mer...";
    window.scrollTo(0, 0);
  }
}
