import renderMainPage from './components/MainPage.js';
import renderProjectPage from './components/Projects.js';

let data = null;
fetch('data.json')

.then(response => {
  console.log("test")
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
      else if (id === "Sentiment analysis with LSTM") {
        renderProjectPage(_data.projects[2]);
      }
    }
});