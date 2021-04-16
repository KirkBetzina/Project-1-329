/////////////////////////////////////
//get data from google sheets
/////////////////////////////////////

$.ajax('https://spreadsheets.google.com/feeds/list/1gm0-doCsKu-xwV47uUdRMPSOmVrM_SQv7-Vyk5xQZwM/1/public/full?alt=json')
//.then for when the data arrives

.then((data) => {
    console.log(data)

    // map over data to create a simpler data set
    const project = data.feed.entry.map((item) => {
        return {
            
            description: item.gsx$description.$t,
            giturl: item.gsx$giturl.$t,
            image: item.gsx$image.$t,
            liveurl: item.gsx$liveurl.$t,
            project: item.gsx$project.$t,

        }
        
    })
    console.log(project)
    ////////////////////////////////////
    // jQuery to render your projects
    ///////////////////////////////////
    const cards = $("#cards")
    project.forEach( project => {
        let card = `    
            <div class="card">
                <img class="card-img-top" src="${project.image}" alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title">${project.project}</h4>
                    <p class="card-text">
                    ${project.description}
                    </p>
                    <a target="_" href="${project.giturl}" class="btn btn-primary">Github</a>
                </div>
             </div>`;
        cards.append(card)
    })
    
    // const $card1 = $('<card1>')

    // $card1.appendTo("#cards")
    // $('.card1').text('Startup Matchmaker')
    // $('.card1').on('click', (event) => {
    //     event.preventDefault()
    //     window.location.href = 'https://git.generalassemb.ly/freakiestkirk/W01D02-Hw';  
    // })
       
    
    
    
    // const $card2 = $('<card2>')
    // $card2.appendTo('#cards')    
    // $('.card2').text('code breakdowns')
    // $('.card2').on('click', (event) =>{
    //     event.preventDefault()
    //     window.location.href = 'https://git.generalassemb.ly/freakiestkirk/W1D05-Homework';    
    // })
    
    

    // const $card3 = $('<card3>')
    // $card3.appendTo('#cards')
    // $('.card3').text('LOTR')
    // $('.card3').on('click', (event) =>{
    //     event.preventDefault()
    //     window.location.href= 'https://git.generalassemb.ly/freakiestkirk/jQuery_LOTR';    
    // })
      
   const icon =document.getElementById("icon");
   const navUL = document.getElementById('icon');

   icon.addEventListener('click', () => {
       navUL.classList.toggle('show')
   })


    










    ////////////////////////////////////
    // end jQuery here
    ////////////////////////////////////
})
//.catch in case of an error
.catch((error) => {
    console.log(error)
})