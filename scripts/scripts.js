var titlecard = [
    {
        title1: `Animation class`,
        title2: `Unit 5 Lab Questions`,
        name: `Zakariah Y.`
    }
];

var mycards = [
    {
        q: ``,
        q2: `Explain why the film Benjamin Button was considered such a groundbreaking project?`,
        a: `Because the head of Ben was a Computer Generated Image.`
    }
    ,
    {
        q: ``,
        q2: `Explain why the idea of using makeup was ruled out in the making of this film?`,
        a: `Apperently it doesn't hold up (or something like that) they want to be able to show realistic aging, to me that sounds very hard with makeup.`
    }
    ,
    {
        q: `How does Ulbrich describe motion capture?`,
        q2: `Why did they decide to abandon this technology for the making of Benjamin Button?`,
        a: `With motion capture, you would require multiple actors, plus makeup was already ruled out.`
    }
    ,
    {
        q: ``,
        q2: `What was the "aha!" moment or breakthrough that Ulbrich describes?`,
        a: `The "aha!" moment was when they found out they could generate a new face, and imitate human behavior with new technology.`
    }
    ,
    {
        q: `Ulbrich describes a variety of different complex steps that were taken to make this whole movie possible.`,
        q2: `Which was the most interesting to you? Why?`,
        a: `I do photo editing sometimes as a hobbie, what was cool is how they could keep the lighting the same for each place Ben had to be.`
    }
    ,
    {
        q: `How did the process of making Benjamin Button differ from what you read in the unit about animating the human form? How was it similar?`,
        q2: `Explain.`,
        a: `In the class, so far we have been drawing out each slide / frame of the animation. In the movie they were able to just record themselves and get the finished product.`
    }
];









// The Logic \/

function loadtitlecard() {
    for (var titles of titlecard) {
        document.getElementById('main').innerHTML += `
<div class="bg-text" data-aos="flip-down" data-aos-duration="1000">
        <h3>${titles.title1}</h3>
        <h4>${titles.title2}</h4>
        <h5>${titles.name}</h5>
        <br />
        <p class="lead floating">Scroll</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-double-down floating" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
`
    }
}


function load() {
    for (var card of mycards) {
        document.getElementById('main').innerHTML += `
        <div class="bg-text" data-aos="flip-down" data-aos-duration="1000">
        <h3>${card.q}</h3>
        <h4 class="floating">${card.q2}</h4>
        <br />
        <p class="lead">
          ${card.a}
        </p>
      </div>
    `
    }


    document.getElementById('main').innerHTML += `<div>Built by ProtonZ With &hearts;</div>`
}
