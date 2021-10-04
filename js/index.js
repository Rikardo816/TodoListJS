import Model from './model.js'
import View from './view.js'

//Esto nos permite asuguerar que el DOM haya cargado
document.addEventListener("DOMContentLoaded", () => {
    const model = new Model();
    const view = new View();
    model.setView(view);
    view.setModel(model);

    view.render();
});