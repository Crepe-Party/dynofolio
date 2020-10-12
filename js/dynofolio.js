document.addEventListener('DOMContentLoaded', boot);
function boot(){
    console.log(mainData);
    buildWithData();
    document.body.classList.remove("loading");
}