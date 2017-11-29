$(document).ready(function(){
    
    $('#submit').click(function( event ){
        console.log('bouton');
        apiKey = 'f00169735244915fda23496d28781fb1';

        var city = $("#city").val();
        console.log(city);
        if(city != ''){
            $.ajax({
                
                url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&lang=fr&units=metric'+
                 '&APPID=' + apiKey,
                type: "GET",
                datatype: "jsonp",
                success: function show(data){
                    console.log(data);
                    var iconCode = data.list[0].weather[0].icon;
                    console.log(iconCode);
                    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                    $("#icon").html("<img src='" + iconUrl  + "'>");
                    $("#result").html('<div class="alert alert-info">La température à '+ city + ' est de '+data.list[0].main.temp+'°C.</div>');
                    $("#description").html('<div class="alert alert-info">Description : '+data.list[0].weather[0].description+'</div>');
        
                }
                
            });
            $("#error").html('<div class="alert alert-danger">Veuillez remplir ce champ</div>').remove();
            
        }else {
            $("#error").html('<div class="alert alert-danger">Veuillez ajouter une ville</div>');
            
        }
    });
});



