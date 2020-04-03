function deleteGame(id) {
    //HTTP request using JQuery
    // $.post(`/games/delete/${id}`)
    $.post('/games/delete/' + id, function(err) {
        //callback
        // if (err) {
        //     //Oh no! an error ocurred!
        // } else {
        //     //All good
        // }
        window.location.reload();

    })
}