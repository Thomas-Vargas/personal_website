let current_url = document.location

document.querySelectorAll(".changeable").forEach(function(e){
    if(e.href == current_url){
        console.log(e.href)
       e.classList += " current";
    }
})