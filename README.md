# dynofolio
Easy to implement animated portfolio (for developpers).

The project start with the idea to have a dynamic e-portfolio with some little cool and justified animations.

This project has been developed in 4 mornings to 2 people.
____

## Functionality display the Curriculum vitæ

This functionality is to display data file content into the e-portfolio dynamically.

The web site is adapted on mobile but best use is on computer.

The style of me section is inspired by the portfolio of [Eliel Dinaully](http://elieldinaully.fr/#)  
The style of jobs is inspired by the tutorial [on codepen](https://codepen.io/mikeK/pen/OwPmEa)  
The style of skills card is inspired by the tutorial [on codepen](https://codepen.io/MAW/pen/azOogg)

All animation are from gsap library and plugin used are :
- TweenMax
- TimelineMax
- utils/SplitText
- TweenMax
- ScrollMagic
- debug.addIndicators
- animation.gsap
____

## Building the page
The page builds itself using the data in `data.js`.  
The `index.html` then populated with the data where the `data-value` attribute has been set.  
If it references an array, the content of the html tag will be repeated.

__example__

`data.js`:
```js
    var mainData = {
        name: "Nicolas Maitre",
        infos:{
            currentJob: "gamer pro"
        },
        skills: [
            "php",
            "ruby",
            "javascript"
        ],
        jobs: [
            {
                title: "McDonald's",
                place: "Lausanne",
                length: "2 ans",
                description: "J'ai fait des frites",
            },
            {
                title: "Éboueur",
                place: "Region de Nyon",
                length: "3 semaines",
                description: "J'ai ramassé les poubelles",
            },
        ],
    }
```
`index.html`:
```html
    <h1 data-value="main.name">...</h1>
    <b data-value="main.infos.currentJob">...</b>

    <h2>Skills</h2>
    <ul data-value="main.skills">
        <li data-value="sub">...</li>
    </ul>

    <h2>Jobs</h2>
    <table>
        <thead>
            <th>Title</th>
            <th>Place</th>
            <th>Length</th>
            <th>Description</th>
        </thead>
        <tbody data-value="main.jobs">
            <td data-value="sub.title">...</td>
            <td data-value="sub.place">...</td>
            <td data-value="sub.length">...</td>
            <td data-value="sub.description">...</td>
        </tbody>
    </table>
```
`result`:
<h1 data-value="main.name">Nicolas Maitre</h1>
<b data-value="main.infos.currentJob">gamer pro</b>

<h2>Skills</h2>
<ul data-value="main.skills">
    
<li data-value="sub">php</li><li data-value="sub">ruby</li><li data-value="sub">javascript</li></ul>

<h2>Jobs</h2>
<table>
    <thead>
        <tr><th>Title</th>
        <th>Place</th>
        <th>Length</th>
        <th>Description</th>
    </tr></thead>
    <tbody data-value="main.jobs">
        <tr><td data-value="sub.title">McDonald's</td>
        <td data-value="sub.place">Lausanne</td>
        <td data-value="sub.length">2 ans</td>
        <td data-value="sub.description">J'ai fait des frites</td>
    </tr><tr><td data-value="sub.title">Éboueur</td>
        <td data-value="sub.place">Region de Nyon</td>
        <td data-value="sub.length">3 semaines</td>
        <td data-value="sub.description">J'ai ramassé les poubelles</td>
    </tr></tbody>
</table>

___

# Future improvement
- Split jobs and skill in categories
- Links between jobs skills and skills
- Links between skills proof and projects
- Anchor for section
