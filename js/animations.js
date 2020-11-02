var speed = 1;
function meAnimations(){
    var tlme = new TimelineLite();
    
    var split = new SplitText("#name", {type:"lines"});
    tlme.add(TweenMax.staggerFrom(split.lines, 2*speed, {z:-1000, opacity:0, force3D:true, ease: Elastic.easeOut.config(2, 0.2)}, 0.3*speed));
    var split = new SplitText("#title", {type:"lines"});
    tlme.add(TweenMax.staggerFrom(split.lines, 1*speed, {z:-1000, opacity:0, force3D:true, ease: Elastic.easeOut.config(2, 0.2)}, 0.3*speed));

    tlme.add(TweenMax.staggerFrom(".about", 1.5*speed, { rotationX:-90, transformOrigin:"50% 0%", ease:Elastic.easeOut}, 0.4*speed));

}
function jobsAnimations(){
    var controller = new ScrollMagic.Controller();
    document.querySelectorAll(".job").forEach(job => {
        new ScrollMagic.Scene({triggerElement: job, triggerHook: 0.9})
            .setTween(TweenMax.from(job, 1, {x: "-101%"}))
            .addIndicators({name: "animation"})
            .addTo(controller);
    })
}
function skillsAnimation(){
    var time = new TimelineLite();
    TweenMax.set(".skill", {scale:0})
    
    var start = 0
    document.querySelectorAll(".skill").forEach(skill => {
        var skillPoint = skill.querySelector(".skill-point");
        var left = skillPoint.getAttribute("value-left");
        
        time.add(TweenMax.to(skill, 1*speed, {scale: 1, ease: Back.easeOut}), start*speed);
        time.add(TweenMax.fromTo(skillPoint, 3*speed, { left: 0}, {left: left}), start*speed);

        start++;
    })
}
function projectsAnimations(){
    
}
document.addEventListener("DOMContentLoaded", event => {
    meAnimations();
    jobsAnimations();
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