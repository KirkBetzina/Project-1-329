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
    
    const $card1 = $('<card1>')

    $card1.appendTo("#cards")
    $('.card1').text('Startup Matchmaker')
    $('.card1').on('click', (event) => {
        event.preventDefault()
        window.location.href = 'https://git.generalassemb.ly/freakiestkirk/W01D02-Hw';  
        return false;
        console.log('click')
    })
       
    
    
    
    const $card2 = $('<card2>')
    $card2.appendTo('#cards')    
    $('.card2').text('code breakdowns')
    $('.card2').on('click', (event) =>{
        event.preventDefault()
        window.location.href = 'https://git.generalassemb.ly/freakiestkirk/W1D05-Homework';
        return false; 
    })
    
    

    const $card3 = $('<card3>')
    $card3.appendTo('#cards')
    $('.card3').text('LOTR')
    $('.card3').on('click', (event) =>{
        event.preventDefault()
        window.location.href= 'https://git.generalassemb.ly/freakiestkirk/jQuery_LOTR';
        return false;
    })
      
   


    










    ////////////////////////////////////
    // end jQuery here
    ////////////////////////////////////
})
//.catch in case of an error
.catch((error) => {
    console.log(error)
})