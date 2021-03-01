
let data = null;
fetch('data.json')

.then(response => {
  console.log(response)
  return response.json();
})


.then(_data => {
  const params = new URLSearchParams(window.location.search);
  data = _data;

  if (params.get("project") === null){
    renderMainPage(_data);
  } else {
      let id = params.get("project");
      if (id === "Stream Search") {
        renderProjectPage(_data.projects[0]);
      }
      else if (id === "Vision Education Foundation") {
        renderProjectPage(_data.projects[1]);
      }
    }
});


  function renderMainPage(data){

    document.querySelector('.container').innerHTML = `
    ${renderNavbar()}
    ${renderAbout(data.about)}
    ${renderNews(data.news)}
    ${renderProjects(data.projects)}
    ${renderFooter(data)}

  `
  handler();
  handlerRadio();


  }


  function renderNavbar(page){
    return `
    <nav>
    <div class="flex-container">
        <div class="nav-item"><a href="#About">About</a></div>
        <div class="nav-item"><a href="#projects">Projects</a></div>
        <div class="nav-item"><a href="#news">News</a></div>
        <div class="nav-item"><a href="/">Home</a></div>
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
  
    return `
    <section id ="news">
      <h1 class = "title">News</h1>
      
      <div class="filter">
	    <label>
	    <input id = "tic" type="radio" name="filter" value="all" checked>
    All
      </label>

	  <label>
	    <input id = "tic" type="radio" name="filter" value="economic">
     Economic
	    </label>

      <label>
	    <input id = "tic" type="radio" name="filter" value="academic">
     Academic
	    </label>

      <label>
	    <input id = "tic" type="radio" name="filter" value="leisure">
     Leisure
	    </label>
	
      </div>
      

      <div class="news-items">
        ${renderNewsItems(news)}
      </div>
     
      </section> `;

  }


  function renderNewsItems(news){

    return news.map(d=>`

      <div class="row">
        <div class="col-6">
          <div class="project-title">
            <p> ${d.title}</p>
          </div>
          </div>
        <div class="col-6">
          <p> ${d.date} </p>
        </div>
      </div>
    `).join('');
  
    }

  function renderProjects(projects){
    return `
    <section id="projects">
        <h1 class="title">Projects</h1>

        <div class="search">
        <input type="search" name='input' placeholder="Search projects...">
        </div>

        <!-- we will add a filter interface here in the next lab -->

        <div class="project-list">
            ${renderProjectItems(projects)}
        </div>
    </section>
    `;
}
function renderProjectItems(projects){

	return projects.map(d=>`

	  <div class="row">
      <div class="col-6">
        <div class="project-title">
          <a href="?project=${d.id}"><p>${d.title}</p></a>
          <img class="pic" src="${d.teaser}" width="80%">
          <br>

        </div>
        </div>

      </br>
			<div class="col-6">

        <div class="project-description">
        <br>
        <p>${d.description}</p>
        </div>

      </div>

		</div>
	`).join('');

  }

  function renderProjectPage(project){
    document.querySelector('.container').innerHTML=`
    ${renderNavbar(1)}
    ${renderSpecificProject(project)}
    `;
  }

  function renderSpecificProject(project){
    return `

    <section>
      <div class= "col-6">

        <div class ="title">
          <h3>${project.id}</h3>
        </div>
        <h5> ${project.title}</h5>
      </div>


      <div class="row">
        <div class="col-6">
        <img class="pic" src="${project.teaser}" width="90%">
       <br>
       </div>

       <div class="col-6">
        <p> ${project.description}<p>
       </div>
    </section>

    `;
    }

function handler(event){

  let input = document.querySelector("input[type=search]");
  // const searchResult = this.value;

  input.addEventListener('input', (event)=>{
    console.log(event.target.value)
    // console.log(filteredData)



    const filteredData = data.projects.filter(projects => projects.id.toLowerCase().includes(event.target.value.toLowerCase()));
    console.log(filteredData)

    document.querySelector('.project-list').innerHTML = renderProjectItems(filteredData);
    console.log(filteredData)
  });

}

  // const filteredData = data.projects.filter(project => {
  //   return project.title, searchResult, project.id.toLowerCase().includes(searchResult.toLowerCase());

  // });
  // document.querySelector('.project-lisst').innerHTML = renderProjectItems(filteredData);


  // document.querySelector(renderProjectItems(filtered));

  // const container = document.querySelector('.container');
  // container.innerHTML = `

  // ${renderNavbar()}
  // ${renderProjectItems(filteredData)}
  // `
 

function handlerRadio(event){

  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  buttons.forEach(cond=>cond.addEventListener('change', function(event){
    let tag = event.target.value;

    if (tag === 'all'){
      document.querySelector('.news-items').innerHTML = renderNewsItems(data.news);
    } else {
      const filtered = data.news.filter(news =>((news.tags.toLowerCase()===(event.target.value))));
      document.querySelector('.news-items').innerHTML = renderNewsItems(filtered);
      console.log(filtered)

    }
  }));
}


function renderFooter(data){
  return`
  <footer>
  <p>For business inquiries please contact me via one of below option</p>

    <ul>
      <li>Email: Reps@bc.edu <i class="fab fa-bitcoin"></i></li>
      <li>Instagram: @bellamafiabonsai</li>

    </ul>
    <h3 class="animate__animated animate__infinite animate__bounce animate__delay-2s">Come again soon</h3> 

</footer>
`;
}


// <div class="col-6">
// <div class="news-info">
// <p> ${news[0].title}  </p>      
// <p> ${news[1].title}  </p>      
// <p> ${news[2].title}  </p>      

// </div>
// </div>
// <div class="news-dates">
// <div class="col-6">

// <p> ${news[0].date}  </p>      
// <p> ${news[1].date}  </p>      
// <p> ${news[2].date}  </p>      

// <br>
// </div>

// </div>