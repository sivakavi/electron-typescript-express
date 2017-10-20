const fs = require('fs');

export let ModuleHandler = (addModule, path = __dirname, ) => {
    let model = [path + '/../models'];
    let modulePath = path + '/../modules';
    let modules = addModule;
    modules.forEach((element, index) => {
        let path = modulePath + "/" + element + "/" + "models";
        if (fs.existsSync(path)) {
            model.push(path);
        }
    })
    return model; 
}