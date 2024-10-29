var sidebar=document.getElementById("sidebar")
var menuicon=document.getElementById("menuicon")
var closebar=document.getElementById("close-sidebar")

menuicon.addEventListener("click",function()
{
    sidebar.style.right=0
})

closebar.addEventListener("click",function(){
    sidebar.style.right="-50%"
})