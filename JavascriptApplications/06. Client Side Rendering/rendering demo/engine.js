export function renderTemplate(templateString, data) {    
    let result = templateString;
    const pattern = /{{(.+)}}/gm;

    return result.replace(pattern, (match, propName) => {
        return data[propName];
    });

    // // или:
    // const pattern = /{{(.+)}}/gm;
    // return templateString.replace(pattern, (match, propName) => data[propName]);
}