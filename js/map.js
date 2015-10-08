var app = angular.module('delveApp');

app.controller('mapCtrl', function($scope) { 

  $scope.oldMap = function() {
    removeMarkers();
    initMarkers(oldLocs);
    drawMarkers(oldLocs);
    overlay.show();
  };

  $scope.newMap = function() {
    removeMarkers();
    initMarkers(newLocs);
    drawMarkers(newLocs);
    overlay.hide();
  };

  var oldLocs = [
    ['1896- On June 4th, Henry Ford drives his first automobile through the streets of Detroit.', 42.338041, -83.051588, 17],
    ["1896- Central High School is built on the corner of Cass and Warren. Today, it is Wayne State University's Old Main building.", 42.355046, -83.067359, 18],
    ["1896- The last horse-drawn carriage is replaced by electric trolleys.", 42.347054, -83.055765, 19],
    ["1892- Four Detroit streets (Jefferson, Lafayette, Cass and Second) are paved with asphalt. The rest are cobblestone, cedar block or unpaved.", 42.331389, -83.038246, 20],
    ["1893- Detroiter Marie Owen beomes the first policewoman in the United States.", 42.346292, -83.078598, 21],
    ["1899- William Metzger and Seneca Lewis organize Detroit's first auto show. They showed 4 cars; 2 electric and 2 steam powered.", 42.338560, -83.028546, 22], 
    ["1895- The Detroit Public Schools establish Kindergartens.", 42.333921, -83.054699, 23],
    ["1895- Detroit begins to supply power for streetlights and public buildings.", 42.335646, -83.041582, 24],
    ["1890- Detroit's population is 205,876; the 15th largest city in America.", 42.336657, -83.046571, 25],
  ];

  var twentiesLocs = [  
    ['1921- The Detroit Public Library was built at 5201 Woodward Avenue.', 42.358385, -83.066724, 9],
    ['1923- The Detroit Institute of Arts was built from 1923-1927 at 5200 Woodward Avenue.', 42.359343, -83.064912, 10],
    ['1925- Walter Chrysler starts the Chrysler Corporation.', 42.328633, -83.040364, 11],
    ['1928- The Fox Theatre opens at 2211 Woodward Avenue.', 42.338518, -83.052263, 12],
    ['1928- The Detroit Historical Museum is founded.', 42.359641, -83.067326, 27],
    ['1929- The Ambassador Bridge is completed and opens on November 11th.', 42.316689, -83.077232, 13],
    ['1927- On May 26th, Henry Ford ends production of the Model T.'  , 42.316689, -83.077232, 14],
    ['1927- The Purple Gang was the most notorious organized crime gang in Detroit in the 1920s and 1930s. The gang was made up of Jewish immigrants from the lower east side of Detroit. They were involved in murders, smuggling, extortion, kidnapping, gambling and more.', 42.391415, -83.070282, 15],
    ['1928- The 47-story Penobscot building was built. At the time, it was the tallest structure in Michigan and the 8th tallest building in the world.', 42.330547, -83.047419, 16]
  ];

  var sixtiesLocs = [
    ['1960- Berry Gordy incorporated Tamla Records as Motown Record Company on April 14th. Motown achieved spectacular success for a small record company: 79 records in the Top Ten of the Billboard Hot 100 record chart between 1960 and 1969. ', 42.364170, -83.088545, 1],
    ['1960- Detroit had the highest per capita income in the United States.', 42.3314, -83.0458, 2],
    ['1963- Martin Luther King delivered his I Have a Dream speech for the first time at Cobo Hall, during the Walk to Freedom march. This civil rights march drew crowds of an estimated 125,000 and was the largest civil rights demonstration in U.S. history up to that date.', 42.332085, -83.049964, 3],
    ['1964- Dr. Charles Wright opens the International Afro-American Museum in his office on West Grand Boulevard.', 42.345018, -83.107840, 4],
    ['1965- On March 6th, My Girl by The Temptations became the #1 song on the Billboard Hot 100 charts.', 42.364080, -83.088387, 5],
    ["1965- The Charles H. Wright Museum of African American History is founded. It holds the world's largest permanent exhibit on African American culture.", 42.359083, -83.061005, 26],
    ['1968- The Detroit Tigers win the World Series against the St. Louis Cardinals.', 42.331944, -83.068889, 6],
    ['1969- In January, I Heard it Through the Grapevine by Marvin Gaye becomes the #1 song on the Billboard Hot 100 charts.', 42.363989, -83.088298, 7],
    ['1967- The 12th Street Riot lasted from July 23rd - July 27th. To help end the disturbance, Governor George W. Romney ordered the Michigan Army National Guard into Detroit, and President Lyndon B. Johnson sent in both the 82nd and 101st Airborne Divisions. The result was 43 dead, 1,189 injured, over 7,200 arrests, and more than 2,000 buildings destroyed.', 42.376389, -83.099444, 8]
  ];

  var newLocs = [
    ["2004- Campus Martius Park was dedicated on November 19th and includes two performance stages, sculptures, public spaces and a seasonal ice skating rink. It is the home of the annual Motown Winter Blast, an event that has drawn more than 450,000 people to the downtown area every year. It is also the site of the city's annual Christmas tree lighting celebration, held the Monday before Thanksgiving.", 42.331657, -83.046618, 28],
    ['2007- The Detroit RiverFront Conservancy (DRFC) opened the Detroit International River Walk in 2007, creating a unique Detroit resource with beautiful views and great family attractions along the Detroit River.', 42.3369, -83.0144, 29],
    ["2003- Compuware moved its world headquarters (and 4,000 employees) from Farmington Hills, MI to a newly constructed building at 1 Campus Martius in Detroit.", 42.332601,-83.046628, 30],
    ["2014- The Compuware building was sold in a joint venture to Dan Gilbert's real estate group Bedrock Real Estate and Meridian Health in November. The building now has Quicken Loans, Meridian Health, Plante Moran and Compuware as its major tenants.", 42.3327,-83.0464, 31],
    ["2009- The Tigers Stadium was demolished on September 21st. It hosted the Detroit Tigers Major League Baseball team from 1912–99, as well as the NFL's Detroit Lions from 1938–74.", 42.331944, -83.068889, 32],
    ['1999- The temporary MGM Grand Detroit Casino officially opened on July 29th to much fanfare.', 42.332650, -83.061224, 33],
    ['2007-  The permanent MGM Grand Casino Resort opened its doors to the public on October 3rd. MGM is one of the top employers in the area, with approximately 3,000 team members. The casino includes 100,000 square feet of gaming space, over 4,000 slot machines, upscale restaurants and more.', 42.333229, -83.061063, 34],
    ['1999- The Motor City Casino Hotel opened on December 14th. The $825 million complex incorporates a historic building that once housed the Wagner Baking Company, makers of Wonder Bread. The building includes a 100,000 square-foot casino with approximately 3,000 slot machines, a 13,000-square-foot spa, a live music theater and a luxury hotel. It was purchased by Marian Ilitch of IH Gaming (Detroit Entertainment, LLC and owner of Little Ceasars).', 42.3390,-83.0690, 35],
    ['2007 - The Greektown Casino Hotel opened November 15th with a 13-story, 3,500-space parking garage.', 42.3345, -83.0412, 36],
    ["2013- Rock Gaming, the company of Quicken Loans founder Dan Gilbert, agreed to buy a majority stake in Greektown; as part of Gilbert's plan to help revitalize downtown Detroit.", 42.335091, -83.041370, 37]
  ];

  var myMap;
  var markers = [];
  var overlay;
  USGSOverlay.prototype = new google.maps.OverlayView();


  var detroit = {lat: 42.336813, lng: -83.042773};

  // Initialize the map and the custom overlay.
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: detroit,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      });

      myMap = map;


      var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(42.310356, -83.169016),
        new google.maps.LatLng(42.362028, -83.043287));

      // The photograph is courtesy of the U.S. Geological Survey.
      var srcImage = 'img/maps/map1897cropped2.png';

      // The custom USGSOverlay object contains the USGS image,
      // the bounds of the image, and a reference to the map.
      overlay = new USGSOverlay(bounds, srcImage, map);

      var infowindow = new google.maps.InfoWindow;

      var marker, i;
    }

    function removeMarkers(){
      markers = [];
    }

    function initMarkers(markerArray) {
      for (i = 0; i < markerArray.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(markerArray[i][1], markerArray[i][2]),
            animation: google.maps.Animation.DROP,
              map: myMap
        }); 
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(markerArray[i][0]);
              infowindow.open(myMap, marker);
          }
        })(marker, i));
        markers.push(marker);
      }
    }

    function drawMarkers() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(myMap);
      }
    }

    // [START region_constructor]
    /** @constructor */
    function USGSOverlay(bounds, image, map) {

      // Initialize all properties.
      this.bounds_ = bounds;
      this.image_ = image;
      this.map_ = map;

      // Define a property to hold the image's div. We'll
      // actually create this div upon receipt of the onAdd()
      // method so we'll leave it null for now.
      this.div_ = null;

      // Explicitly call setMap on this overlay.
      this.setMap(map);
    }
    // [END region_constructor]

    // [START region_attachment]
    /**
     * onAdd is called when the map's panes are ready and the overlay has been
     * added to the map.
     */
    USGSOverlay.prototype.onAdd = function() {

      var div = document.createElement('div');
      div.style.borderStyle = 'none';
      div.style.borderWidth = '0px';
      div.style.position = 'absolute';

      // Create the img element and attach it to the div.
      var img = document.createElement('img');
      img.src = this.image_;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.position = 'absolute';
      div.appendChild(img);

      this.div_ = div;

      // Add the element to the "overlayLayer" pane.
      var panes = this.getPanes();
      panes.overlayLayer.appendChild(div);
      overlay.hide();
    };
    // [END region_attachment]

    // [START region_drawing]
    USGSOverlay.prototype.draw = function() {

      // We use the south-west and north-east
      // coordinates of the overlay to peg it to the correct position and size.
      // To do this, we need to retrieve the projection from the overlay.
      var overlayProjection = this.getProjection();
      // Retrieve the south-west and north-east coordinates of this overlay
      // in LatLngs and convert them to pixel coordinates.
      // We'll use these coordinates to resize the div.
      var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
      var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

      // Resize the image's div to fit the indicated dimensions.
      var div = this.div_;
      div.style.left = sw.x + 'px';
      div.style.top = ne.y + 'px';
      div.style.width = (ne.x - sw.x) + 'px';
      div.style.height = (sw.y - ne.y) + 'px';
    };
    // [END region_drawing]

    USGSOverlay.prototype.onRemove = function() {
      this.div_.parentNode.removeChild(this.div_);
      this.div_ = null;
    };

    // Set the visibility to 'hidden' or 'visible'.
    USGSOverlay.prototype.hide = function() {
      if (this.div_) {
        this.div_.style.visibility = 'hidden';
      }
    };

    USGSOverlay.prototype.show = function() {
      if (this.div_) {
        this.div_.style.visibility = 'visible';
      }
    };

  google.maps.event.addDomListener(window, 'load', initMap);

});