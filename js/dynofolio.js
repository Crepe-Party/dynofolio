document.addEventListener('DOMContentLoaded', boot);
function boot(){
    console.log(mainData);
    buildWithData();
    document.body.classList.remove("loading");
        
    document.querySelectorAll(".menu-child").forEach(child => child.addEventListener("click", evt => {
        document.querySelectorAll(".menu-child").forEach(child => child.classList.remove("menu-active"));
        document.querySelectorAll(".content-child").forEach(child => child.classList.add("hidden"));
        
        var menu_id = evt.target.id;
        var content_id = menu_id.split("-").pop()
        document.getElementById(menu_id).classList.add("menu-active");
        document.getElementById(content_id).classList.remove("hidden");
    }));
}