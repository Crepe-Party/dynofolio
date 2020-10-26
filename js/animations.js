var speed = 2;
function meAnimations(){
    var tlme = new TimelineLite();
    
    var split = new SplitText("#name", {type:"lines"});
    tlme.add(TweenMax.staggerFrom(split.lines, 2*speed, {z:-1000, opacity:0, force3D:true, ease: Elastic.easeOut.config(2, 0.2)}, 0.3*speed));
    var split = new SplitText("#title", {type:"lines"});
    tlme.add(TweenMax.staggerFrom(split.lines, 1*speed, {z:-1000, opacity:0, force3D:true, ease: Elastic.easeOut.config(2, 0.2)}, 0.3*speed));

    tlme.add(TweenMax.staggerFrom(".about", 1.5*speed, { rotationX:-90, transformOrigin:"50% 0%", ease:Elastic.easeOut}, 0.4*speed));

}
function jobsAnimations(){
    
}
function skillsAnimation(){
    TweenMax.set(".skill", {scale:0})
    TweenMax.staggerTo(".skill", 1*speed, {scale: 1, ease: Back.easeOut}, 0.5*speed);
    TweenMax.staggerFrom(".skill-point", 2*speed, {left: -10}, 0.5*speed);
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