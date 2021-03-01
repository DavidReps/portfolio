import {renderNavbar} from './Navbar.js';
import {renderSpecificProject} from "./Projects.js";

export function renderProjectPage(project){
    document.querySelector('.container').innerHTML=`
    ${renderNavbar(1)}
    ${renderSpecificProject(project)}
    `;
}