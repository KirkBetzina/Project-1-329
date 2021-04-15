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
    const $section = $('<section>')
    $section.attr('id', 'cards1')
    $('section').appendTo($('body'))
    const $div = $('<div>').attr('id', 'cards')
    $div.appendTo($section)

    





    ////////////////////////////////////
    // end jQuery here
    ////////////////////////////////////
})
//.catch in case of an error
.catch((error) => {
    console.log(error)
})