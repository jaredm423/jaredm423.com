function dropdownClick(){
    document.getElementById("myDropdown").classList.toggle("show");
}
function bugreportClick(){
    document.getElementById("bugreportBtn").onclick = function () {
        location.href = "http://bugreport.jaredm423.com";
    };
}
window.onclick = function(event){
    if(!event.target.matches('.dropdownBtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

function emailClick(){
    navigator.clipboard.writeText("jaredm423@gmail.com");
    alert("Copied email address to clipboard");
}