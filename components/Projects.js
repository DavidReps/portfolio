let data = null;

export default function renderProjects(_data){
  data = _data;

return `
<section id="projects">
    <h1 class="title">Projects</h1>

    <div class="search">
    <input type="search" name='input' placeholder="Search projects...">
    </div>



    <!-- we will add a filter interface here in the next lab -->

    <div class="project-list">

        ${renderProjectItems(data.projects)}
    </div>
</section>
`;
}

export function renderProjectItems(projects){

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


export function renderSpecificProject(project){
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

export function handler(event){

  let input = document.querySelector("input[type=search]");

  input.addEventListener('input', (event)=>{
    const filteredData = data.projects.filter(projects => projects.id.toLowerCase().includes(event.target.value.toLowerCase()));
    document.querySelector('.project-list').innerHTML = renderProjectItems(filteredData);
    console.log(filteredData);

  });

}

// export function handler(event){

//   const searchResult = this.value;
//   const filteredData = data.projects.filter(project => {
//     return project.title, searchResult, project.id.toLowerCase().includes(searchResult.toLowerCase());

//   });
//   // document.querySelector('.project-lisst').innerHTML = renderProjectItems(filteredData);


//   // document.querySelector(renderProjectItems(filtered));

//   const container = document.querySelector('.container');
//   container.innerHTML = `

//   ${renderNavbar()}
//   ${renderProjectItems(filteredData)}
//   `
// }
  