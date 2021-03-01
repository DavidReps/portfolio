// import data from './index.js'

let data= null;
export function renderNews(_data){

    data = _data;
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
        ${renderNewsItems(_data.news)}
      </div>
     
      </section> `;
}


export function renderNewsItems(news){
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


export function handlerRadio(event){

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