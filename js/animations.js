var speed = 1;
function meAnimations(){
    var tlme = new TimelineLite();
    // animated firstname and lastname
    var split = new SplitText("#name", {type:"lines"});
    tlme.add(TweenMax.staggerFrom(split.lines, 3*speed, {z:-1000, opacity:0, force3D:true, ease: Elastic.easeOut.config(2, 0.2)}), 0);
    // animated user job title
    var split = new SplitText("#title", {type:"lines"});
    tlme.add(TweenMax.staggerFrom(split.lines, 1*speed, {z:-1000, opacity:0, force3D:true, ease: Elastic.easeOut.config(2, 0.2)}), 1);
    // animated about box
    tlme.add(TweenMax.staggerFrom(".about", 2.5*speed, { rotationX:-90, transformOrigin:"50% 0%", ease:Elastic.easeOut}), 2);
}
function jobsAnimations(){
    var controller = new ScrollMagic.Controller();
    // animated each job
    document.querySelectorAll(".job").forEach(job => {
        new ScrollMagic.Scene({triggerElement: job, triggerHook: 0.9})
        .setTween(TweenMax.fromTo(job, 1, {x: "-101%", opacity: 0}, {x: "0%", opacity: 1}))
        // .addIndicators({name: "animation"})
        .addTo(controller);
    })
}
function skillsAnimation(timeSkill){
    timeSkill.clear();
    // Set skill to hide
    TweenMax.set(".skill", {scale:0})
    // animated each skill
    var start = 0
    document.querySelectorAll(".skill").forEach(skill => {
        var skillPoint = skill.querySelector(".skill-point");
        var left = skillPoint.getAttribute("value-left");
        
        timeSkill.add(TweenMax.to(skill, 1*speed, {scale: 1, ease: Back.easeOut}), start*speed);
        timeSkill.add(TweenMax.fromTo(skillPoint, 3*speed, { left: 0}, {left: left}), start*speed);
        
        start++;
    })
}
function projectsAnimations(){
    // animated project
    TweenMax.set('.project', {marginTop: 400, opacity: 0, rotation: 20});
    TweenMax.staggerTo('.project', 1*speed, {marginTop: 0, opacity: 1, rotation:0}, 0.5*speed);
}
// add animation after the dom is loaded to skip problem
document.addEventListener("DOMContentLoaded", event => {
    meAnimations();
    jobsAnimations();
    var timeSkill = new TimelineLite();
    // animated each section with the clic on menu
    document.getElementById("menu-jobs").addEventListener("click", event => {
        jobsAnimations();
    })
    document.getElementById("menu-skills").addEventListener("click", event => {
        skillsAnimation(timeSkill);
    })
    document.getElementById("menu-projects").addEventListener("click", event => {
        projectsAnimations();
    })
})