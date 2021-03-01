import {renderNavbar} from './Navbar.js';
import {renderAbout} from './About.js';
import * as news from './News.js';
// import handlerRadio form 
// import renderNewsItems from './News.js'
import renderProjects, {handler} from './Projects.js';
import {renderFooter} from './Footer.js'

export default function renderMainPage(data){

    document.querySelector('.container').innerHTML = `
    ${renderNavbar()}
    ${renderAbout(data.about)}
    ${news.renderNews(data)}
    ${renderProjects(data)}
    ${renderFooter(data)}

  `

  document.querySelector("input[type=search]")
  .addEventListener('input', handler);

  news.handlerRadio();

  }