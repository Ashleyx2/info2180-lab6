$(document).ready(function(){
    $(".search").click(function(){
        
        let searchList = $('#search').val();
        searchList = searchList.trim();
        $.ajax("superheroes.php", {
            method: 'GET',
            data: {
                query: searchList
            }
        }).done(function(response){
            let ans = response;
            $('#result').html(ans);
        }).fail(function(){
            alert('An error occured.');
        });
    });