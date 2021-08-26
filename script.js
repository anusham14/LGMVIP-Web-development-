function gMap(){

    var mapProp = {
        center:new google.maps.LatLng(27.0,0.0),zoom:5,
    };

    var map = new google.maps.map(document.getElementById("gmap"),mapProp);
}
 