function patchWithData(element, data=null){
    if(!element.dataset.value){
        console.info("pass to children");
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

    if(element.dataset.customBuilder){
        var customBuilder = customBuilders[element.dataset.customBuilder]
        if(customBuilder){
            let shouldStop = customBuilder(dataValue);
            if(shouldStop) 
                return;
        } else {
            console.warn(`custom builder ${element.dataset.customBuilder} doesn't exist`);
        }
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

    //array
    if(Array.isArray(dataValue)){
        console.info("am array")
        var childrenToClone = [...element.children];
        childrenToClone.forEach(child=>child.remove())
        dataValue.forEach(datum=>{
            childrenToClone.forEach(childToClone=>{
                let clonedChild = childToClone.cloneNode(true);
                element.appendChild(clonedChild);
                console.info("clonedChild", clonedChild)
                patchWithData(clonedChild, datum);
            });
        });
        return;
    }
    // normal
    element.innerText = dataValue;    
}

patchWithData(document.body);