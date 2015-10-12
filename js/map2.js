$(document).ready(function(){
    //Global Variables
    var mapCentre;
    var map;
    
    initialize();
    
    function initialize() {
        var mapOptions;
                
        if(localStorage.mapLat!=null && localStorage.mapLng!=null && localStorage.mapZoom!=null){
            mapOptions = {
              center: new google.maps.LatLng(localStorage.mapLat,localStorage.mapLng),
              zoom: parseInt(localStorage.mapZoom),
              scaleControl: true
            };
        }else{
            //Choose some default options
            mapOptions = {
              center: new google.maps.LatLng(0,0),
              zoom: 11,
              scaleControl: true
            };
        }
                
        //MAP
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        
        mapCentre = map.getCenter();
        
        //Set local storage variables.
        localStorage.mapLat = mapCentre.lat();
        localStorage.mapLng = mapCentre.lng();
        localStorage.mapZoom = map.getZoom();
        
        google.maps.event.addListener(map,"center_changed", function() {
            //Set local storage variables.
            mapCentre = map.getCenter();
            
            localStorage.mapLat = mapCentre.lat();
            localStorage.mapLng = mapCentre.lng();
            localStorage.mapZoom = map.getZoom();    
        });
        
        google.maps.event.addListener(map,"zoom_changed", function() {
            //Set local storage variables.
            mapCentre = map.getCenter();
            
            localStorage.mapLat = mapCentre.lat();
            localStorage.mapLng = mapCentre.lng();
            localStorage.mapZoom = map.getZoom();     
        });
    }
});