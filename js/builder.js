"use strict"
function buildWithData(){
    patchWithData(document.documentElement)
}
function patchWithData(element, data=null){
    if(!element.dataset.value){
        [...element.children].forEach(child => patchWithData(child, data));
        return;
    }
    var dataFullPath = element.dataset.value.split('.');
    var source = dataFullPath[0];
    var dataPath = dataFullPath.slice(1);
    //source
    switch(source){
        case 'main':
            var dataValue = Object.valFromPath(mainData, dataPath);
            break;
        case 'sub':
            if(!data){
                throw new Error("can't use 'sub' data type because sub is not availible");
            }
            var dataValue = Object.valFromPath(data, dataPath);
            break;
        default:
            console.warn(`${source} source is not supported`);
    }

    
    //transformer
    if(element.dataset.transformer){
        var transformer = transformers[element.dataset.transformer]
        if(transformer){
            dataValue = transformers[element.dataset.transformer](dataValue);
        } else {
            console.warn(`transformer ${transformer} doesn't exist`);
        }
    }
    
    var shouldFillContent = true;
    if(element.dataset.builder){
        var customBuilder = customBuilders[element.dataset.builder]
        if(customBuilder){
            shouldFillContent = !!customBuilder(dataValue, element);
        } else {
            console.warn(`custom builder ${element.dataset.builder} doesn't exist`);
        }
    }
    if(!shouldFillContent){ //skipping
        [...element.children].forEach(child => patchWithData(child, data));
        return;
    }
    //array
    if(Array.isArray(dataValue)){
        var childrenToClone = [...element.children];
        childrenToClone.forEach(child=>child.remove())
        dataValue.forEach(datum=>{
            childrenToClone.forEach(childToClone=>{
                let clonedChild = childToClone.cloneNode(true);
                element.appendChild(clonedChild);
                patchWithData(clonedChild, datum);
            });
        });
        return;
    }
    // normal
    element.innerText = dataValue;
}
var transformers = {
    stampToLocalTimeElapsed(stamp){

    },
    yearsElapsedSinceDate(dateStamp){
        return Math.floor((Date.now() - dateStamp) / (3600*24*365*1000))
    },
    prettyDate(dateStamp){
        var date = new Date(dateStamp);
        return `${date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}`;
        // return `${date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long'})}`
    },
}
//returns shouldFillContent
var customBuilders = {
    skillPointStyle(data, element){
        var left = 400 / 10 * data - 10
        element.style.left = `${left}px`;
        element.setAttribute("value-left", left);
        return false;
    },
    toProjectBg(name, element){
        element.style.backgroundImage = `url(assets/images/projects/${name || "default.png"})`;
        return false;
    },
    toHref(href, element){
        element.href = href;
        return false;
    },
}