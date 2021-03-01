
export function renderAbout(about){

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