function meAnimations(){
    var speed = 1;
    var tl = new TimelineLite();
    console.log(10, split);
    
    var split = new SplitText("#name", {type:"lines"});
    tl.add(TweenMax.staggerFrom(split.lines, 1*speed, {z:-1000, opacity:0, force3D:true, ease: Elastic.easeOut.config(2, 0.2)}, 0.3*speed));
    var split = new SplitText("#title", {type:"lines"});
    tl.add(TweenMax.staggerFrom(split.lines, 1*speed, {z:-1000, opacity:0, force3D:true, ease: Elastic.easeOut.config(2, 0.2)}, 0.3*speed));

    tl.add(TweenMax.staggerFrom(".about", 1.5, { rotationX:-90, transformOrigin:"50% 0%", ease:Elastic.easeOut}, 0.4));

}
function jobsAnimations(){
    
}
function skillsAnimation(){
    
}
function projectsAnimations(){
    
}
document.addEventListener("DOMContentLoaded", event => {
    meAnimations();
    document.getElementById("menu-jobs").addEventListener("click", event => {
        jobsAnimations();
    })
    document.getElementById("menu-skills").addEventListener("click", event => {
        skillsAnimation();
    })
    document.getElementById("menu-skills").addEventListener("click", event => {
        projectsAnimations();
    })
})