"use strict"
function buildWithData(){
    bindOnElem(document.body)
}
function bindOnElem(baseElems, myData, deep = 0){
    console.info("bind on elems", baseElems, myData, deep)
    if(baseElems instanceof Element){
        baseElems = [baseElems]
    }
    var elems = [];
    baseElems.forEach(baseElem=>{
        if(baseElem.dataset.value){
            elems.push(baseElem);
        }
        var selector = "";
        if(deep){
            selector += `:not(${new Array(deep).fill('[data-value]').join(' ')}) `
        }
        elems.push(...(baseElem.querySelectorAll(`${selector} [data-value]`)));
    });
    console.log([...elems]," woa")
    elems = elems.flat()
    console.log("elems: ", elems, myData, elems.length)
    var paul = {...myData}
    for(let indElem = 0; indElem < elems.length; indElem++){
        let elem = elems[indElem]
        console.log(indElem);
        console.log("____________________", elem, myData, paul)
        if(elem.dataset.customBinder){
            console.warn('custom binders are not supported yet');
            return;
        }
        let dataFullPath = elem.dataset.value.split('.');
        let source = dataFullPath[0];
        let dataPath = dataFullPath.slice(1);
        switch(source){
            case 'main':
                var dataValue = Object.valFromPath(mainData, dataPath);
                break;
            case 'sub':
                var dataValue = Object.valFromPath(myData, dataPath);
                break;
            default:
                console.warn(`${source} source is not supported`);
        }
        if(elem.dataset.transformer){
            var transformer = transformers[elem.dataset.transformer]
            if(transformer){
                dataValue = transformers[elem.dataset.transformer](dataValue);
            } else {
                console.warn(`transformer ${transformer} doesn't exist`);
            }
        }
        console.log("value", source, dataValue, dataPath);
        if(Array.isArray(dataValue)){
            console.log("JE SUIS ARRAY")
            var childrenToClone = [...elem.children]
            dataValue.forEach(datum => {
                console.log("datum", datum)
                var clonedChildren = childrenToClone.map(child=>child.cloneNode(true))
                bindOnElem(clonedChildren, datum, deep + 1);
                clonedChildren.forEach(clonedChild=>elem.appendChild(clonedChild));
            })
            childrenToClone.forEach(child=>child.remove());
        }else{
            console.log("JE SUIS PAS ARRAY")
            elem.textContent = dataValue; 
        }
    }
}
var transformers = {
    stampToLocalTimeElapsed(stamp){

    },
    yearsElapsedSinceDate(dateStamp){
        return Math.floor((Date.now() - dateStamp) / (3600*24*365*1000))
    }
}