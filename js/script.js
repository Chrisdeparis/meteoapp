$(document).ready(function(){
    
    $('#submit').click(function( event ){
        // key de l'api OpenWeatherMap
        apiKey = 'f00169735244915fda23496d28781fb1';
        // recupere la valeur de l'input
        var city = $("#city").val();
        // recupere les infos de l'input en ajax
        if(city != ''){
            $.ajax({
                
                url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&lang=fr&units=metric'+
                 '&APPID=' + apiKey,
                type: "GET",
                datatype: "jsonp",
                success: function show(data){
                    // recuperer l'icon
                    var iconCode = data.list[0].weather[0].icon;
                    
                    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                    // afficher l'icon
                    $("#icon").html("<img src='" + iconUrl  + "'>");
                    // afficher la température
                    $("#result").html('<div class="alert alert-info">La température à '+ city + ' est de '+data.list[0].main.temp+'°C.</div>');
                    // afficher la description
                    $("#description").html('<div class="alert alert-info">Description : '+data.list[0].weather[0].description+'</div>');
                    $("#icon").show();
                    $("#result").show();
                    $("#description").show();

        
                }
                
            });
            $("#error").html('<div class="alert alert-danger">Veuillez remplir ce champ</div>').remove();
            
        }else {
            // affiche l'erreur si input vide
            $("#error").html('<div class="alert alert-danger">Veuillez ajouter une ville</div>');
            
        }
    });
    $('#city').on('keyup', function(e) {
        if($('#city').val() == ""){
            $("#icon").hide();
            $("#result").hide();
            $("#description").hide();
        }
    });
});



