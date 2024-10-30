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

//Search functionality

var product=document.getElementById("product-container")
var Search=document.getElementById("Search")
var productlist = product.querySelectorAll("div")

Search.addEventListener("keyup",function(event){
    var enteredvalue= event.target.value.toUpperCase()

    for (var count = 0; count < productlist.length; count = count + 1) {
        var productnameElement = productlist[count].querySelector("h3");

        // Check if the element with "h3" exists
        if (productnameElement) {
            var productname = productnameElement.textContent || ""; // Use textContent

            if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
                productlist[count].style.display = "none";
            } else {
                productlist[count].style.display = "block";
            }
        }
    }
})