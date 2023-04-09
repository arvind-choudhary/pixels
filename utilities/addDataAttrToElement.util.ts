export const addPropToDataAttrUtil = (htmlElem: HTMLElement, attr: string, value?: any) => {
    if (!htmlElem) { throw new Error('HTML element is not defined.') }
    if (!attr) { throw new Error('Element attribute is not defined.') }
    if (htmlElem) { htmlElem.setAttribute(`data-${attr}`, value ?? '') }
}

export const setMultiplePropsToDataAttr = (listOfAttributes: Array<string | any>, htmlElem: HTMLElement) => {
    if (!htmlElem) { throw new Error('HTML element is not defined.') }
    if (!listOfAttributes) { throw new Error('List of attribute is not defined.') }
    listOfAttributes.forEach((currentNode) => {
        if (typeof currentNode === 'string') {
            addPropToDataAttrUtil(htmlElem, currentNode)
        } else {
            // else it should be an object with key and value
            // key act as attibute and value act as a value of attribute
            const keyName = Object.keys(currentNode)[0];
            addPropToDataAttrUtil(htmlElem, keyName, currentNode[keyName])
        }
    })
}