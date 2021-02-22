fetch('data.json')

.then(response => {
  console.log(response)
  return response.json();
})


.then(data => {

  console.log("test");
  const params = new URLSearchParams(window.location.search);
  // const page = 

  if (params.get("project") === null){
    renderMainPage(data);
  } else {
      console.log("renderProjectPage");
      let id = params.get("project");
      console.log(id);
      if (id === "stream search") {
        renderProjectPage(data.projects[0]);
      }
      else if (id === "Vision Education Foundation") {
        renderProjectPage(data.projects[1]);
      }
    }
});



  function renderMainPage(data){

    document.querySelector('.container').innerHTML = `
    ${renderNavbar()}
    ${renderAbout(data.about)}
    ${renderNews(data.news)}
    ${renderProjects(data.projects)}
  `;
  // <div class = "col-12">
  // </div>

  }

  function renderNavbar(page){
    console.log("hi my name davud")
    return `
    <nav>
    <div class="flex-container">
        <div class="nav-item"><a href="#About">About</a></div>
        <div class="nav-item"><a href="#projects">Projects</a></div>
        <div class="nav-item"><a href="#news">News</a></div>
        <div class="nav-item"><a href="#Contact">Contact</a></div>
    </div>
  </nav> 
    `;
  }



  function renderAbout(about){

    return `
    <section id ="about">
    <h1 class = "title"> ${about.name}</h1>
    <a href="https://github.com/DavidReps"><i class="fab fa-github"></i></a>
    <a href="https://www.linkedin.com/in/david-reps/"><i class="fab fa-linkedin"></i></a>
    <i class="fas fa-air-freshener"></i>

      <div class ="row">
    

        <div class ="col-6">
          <img class = "pic" src="${about.photo}" width="90%">
        </div>
        <div class="col-6">
          <p>${about.info}</p>
        </div>
      </div>
    </section>
    `;

  }

  function renderNews(news){
    console.log(news[0].title)
    console.log(news[0].date)
    return `
    <section id ="news">
      <h1 class = "title">News</h1>
      
      <div class="row">
      <div class="col-6">
      <div class="news-info">
      <p> ${news[0].title}  </p>      
      </div>
      </div>
      <div class="news-dates">
      <div class="col-6">

      <p> ${news[0].date}  </p>      
      <br>
      </div>

      </div>
      </section> `;

  }


  function renderProjects(projects){
    return `
    <section id="projects">
        <h1 class="title">Projects</h1>
        <!-- we will add a filter interface here in the next lab -->

        <div class="project-list">

            ${renderProjectItems(projects)}
        </div>
    </section>`;
}
function renderProjectItems(projects){

	return projects.map(d=>`
	  <div class="row">
      <div class="col-6">
        <div class="project-title">
          <a href="?project=${d.id}"><strong>${d.title}</strong></a>
        </div>
        <div class="project-authors">
          ${d.authors}<br>
        </div>
			<div class="col-6">
        <img class="pic" src="${d.teaser}" width="90%">
      </div>
		</div>
	`).join('');


  }

  function renderProjectPage(project){
    document.querySelector('.container').innerHTML=`
    ${renderNavBar(1)}
    ${renderSpecificProject(project)}
    `;
  }

  function renderSpecificProject(project){
    return `
    <a href="?project=${d.id}"><strong>${d.title}</strong></a>

    <section>
    <div>

    <h1>${project.id}</h1>
    <h3> ${project.title}</h3>

    <h5> ${project.authors}</h5>

    <p> ${project.description}<p>
    </div>
    </section>

    `;
    }