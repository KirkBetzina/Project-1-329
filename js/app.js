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
    URL ='https://git.generalassemb.ly/freakiestkirk/W01D02-Hw.git'
    $card1.appendTo("#cards")
    $(':button1').text('Startup Matchmaker')
    
    const $card2 = $('<card2>')
    URL = 'https://git.generalassemb.ly/freakiestkirk/W1D05-Homework.git'
    $card2.appendTo('#cards')
    $(':button2').text('code breakdowns')
   
    const $card3 = $('<card3>')
    URL = 'https://git.generalassemb.ly/freakiestkirk/jQuery_LOTR.git' 
    $card3.appendTo('#cards')
    $(':button3').text('LOTR')



    










    ////////////////////////////////////
    // end jQuery here
    ////////////////////////////////////
})
//.catch in case of an error
.catch((error) => {
    console.log(error)
})