document.addEventListener('DOMContentLoaded', boot);
function boot() {
    console.log(mainData);
    buildWithData();
    document.body.classList.remove("loading");

    //menu
    var lastContent = document.querySelector(".content-child:not(.hidden)");
    var menuChildren = [...document.querySelectorAll(".menu-child")];
    var contentChilds = [...document.querySelectorAll(".content-child")];
    var availibleToTransition = true;
    menuChildren.forEach(child => child.addEventListener("click", async evt => {
        var lastMenuItem = document.querySelector("#menu > .menu-child.menu-active");
        var newMenuItem = evt.target;
        lastMenuItem.classList.remove("menu-active");
        newMenuItem.classList.add("menu-active");

        var contentId = newMenuItem.id.split("-").pop()
        var newContent = document.getElementById(contentId);

        if (lastContent.id == contentId) {
            return;
        }
        if (!availibleToTransition) {
            return;
        }
        availibleToTransition = false;

        //direction
        var isLeftTransition = lastMenuItem.getBoundingClientRect().x < newMenuItem.getBoundingClientRect().x;
        console.log("ouep",lastMenuItem, lastMenuItem.getBoundingClientRect(),newMenuItem, newMenuItem.getBoundingClientRect())
        var lastClass = isLeftTransition ? "left-position" : "right-position";
        var newClass = isLeftTransition ? "right-position" : "left-position";
        //animate
        await async_requestAnimationFrame();
        newContent.classList.add(newClass);
        await async_requestAnimationFrame();
        newContent.classList.remove("content-hidden");
        lastContent.classList.add(lastClass);
        await async_requestAnimationFrame();
        newContent.classList.remove(newClass);
        await async_setTimeout(300);
        await async_requestAnimationFrame();
        lastContent.classList.add("content-hidden")
        await async_requestAnimationFrame();
        lastContent.classList.remove(lastClass);

        lastContent = newContent;
        availibleToTransition = true;
    }));
}