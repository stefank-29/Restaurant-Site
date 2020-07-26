import {renderMenuPage} from './menu-page';
import { renderHomePage } from "./home-page";

const renderAboutPage = (() => {
    const container = document.querySelector('#page-container');
    const _deletePage = () => {
        let child = container.lastChild;
        while(child){
            container.removeChild(child);
            child = container.lastChild;
        }
    }

    const render = () => {
        _deletePage();





    }


    return {
        render,
    }

})()


export {renderAboutPage}