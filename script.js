let current_url = document.location

document.querySelectorAll(".changeable").forEach(function(e){
    if(e.href == current_url){
       e.classList += " current";
    }
})