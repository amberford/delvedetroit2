var app = angular.module('delveApp');

app.controller('mapCtrl', function($scope) { 

  // var request = gapi.client.plus.people.get({
  //   'userId' : 'me'
  // });

  // request.execute(function(resp) {
  //   console.log('ID: ' + resp.id);
  //   console.log('Display Name: ' + resp.displayName);
  //   console.log('Image URL: ' + resp.image.url);
  //   console.log('Profile URL: ' + resp.url);
  // });

  $scope.get1890Map = function() {
    removeMarkers();
    initMarkers(oldLocs);
    drawMarkers(oldLocs);
    overlay1890.show();
    overlay1920.hide();
  }; 

  $scope.get1920Map = function() {
    removeMarkers();
    initMarkers(twentiesLocs);
    drawMarkers(twentiesLocs);
    overlay1890.hide();
    overlay1920.show();    
  };

  $scope.get1960Map = function() {
    removeMarkers();
    initMarkers(sixtiesLocs);
    drawMarkers(sixtiesLocs);
    overlay1890.hide();
    overlay1920.hide();    
  };

  $scope.get2015Map = function() {
    removeMarkers();
    initMarkers(newLocs);
    drawMarkers(newLocs);
    overlay1890.hide();
    overlay1920.hide();
  };

  $scope.museumMap = function() {
    removeMarkers();
    initMarkers(museumLocs);
    drawMarkers(museumLocs);
    overlay1890.hide();
    overlay1920.hide();
  };

  var oldLocs = [
    ['The Detroit Dry Dock Company was here. The company employed 600 people and built more ships than any other company in America in the 1890s.', 42.333359, -83.027398, 17],
    ["Detroit Stove Works was here. It was a major stove maker that had 1300-1400 employees in the 1890s. They produced 80,000 stoves annually and had more than 700 designs.", 42.346924, -83.003869, 18],
    ["1897- Sebastian S. Kresge opened his first 5 and 10 cent store here. It eventually develops into present day Kmart", 42.333416, -83.048587, 19],
    ["1892- Four Detroit streets (Jefferson, Lafayette, Cass and Second) are paved with asphalt. The rest are cobblestone, cedar block or unpaved.", 42.331389, -83.038246, 20],
    ["1896- Charles Brady King drives Detroit’s first gasoline powered car down Woodward Avenue", 42.335909, -83.050503, 21],
    ["1899- William Metzger and Seneca Lewis organize Detroit's first auto show. They showed 4 cars; 2 electric and 2 steam powered.", 42.338560, -83.028546, 22], 
    ["1899- Ransom E. Olds opens Detroit's first automobile manufacturing plant here.", 42.339602, -83.019011, 23],
    ["The Michigan Stove Company was here. It was a major stove maker that had 1200 employees. They produced 76,000 stoves annually and had over 200 designs.", 42.344329, -83.013808, 24]
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
    ['1961- Eleven year old Stevie Wonder signs with Motown', 42.364448, -83.087490, 2],
    ['1963- Dr. King delivered the I Have a Dream speech for the first time at Cobo Hall.', 42.332085, -83.049964, 3],
    ['1964- Dr. Charles Wright opens the International Afro-American Museum in his office on West Grand Boulevard.', 42.357764, -83.106319, 4],
    ['1964- On September 6th, The Beatles performed in Detroit for the first time at the Olympia Stadium.', 42.353641, -83.101121, 5],
    ["1965- The Charles H. Wright Museum of African American History is founded. It holds the world's largest permanent exhibit on African American culture.", 42.359083, -83.061005, 26],
    ['1968- The Detroit Tigers win the World Series against the St. Louis Cardinals.', 42.331944, -83.068889, 6],
    ['1969- In January, I Heard it Through the Grapevine by Marvin Gaye becomes the #1 song on the Billboard Hot 100 charts.', 42.363930, -83.088793, 7],
    ['1967- The 12th Street Riot lasted from July 23rd - July 27th. The result was 43 dead, 1,189 injured, over 7,200 arrests, and more than 2,000 buildings destroyed. To help end the disturbance, Governor George W. Romney ordered the Michigan Army National Guard into Detroit, and President Lyndon B. Johnson sent in both the 82nd and 101st Airborne Divisions.', 42.376389, -83.099444, 8]
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
    ["2013- Rock Gaming, the company of Quicken Loans founder Dan Gilbert, agreed to buy a majority stake in Greektown; as part of Gilbert's plan to help revitalize downtown Detroit.", 42.335091, -83.041370, 37],
    ["2004- In 2004, General Motors completed a US$500 million renovation of the Rennesance Center its world headquarters. The renovation included the addition of the five-story Wintergarden atrium, Renaissance Center totals 5,552,000 square feet making it one of the world's largest commercial complexes and boasts one of the worlds tallest hotels.", 42.3289, -83.0397, 38]

  ];

  var museumLocs = [
    ["Detroit Historical Museum", 42.359816, -83.066852, 38],
    ['Detroit Institute of Arts', 42.359220, -83.064483, 39],
    ["Motown Museum", 42.364072,-83.088293, 40]
  ];

  var map;
  var currentMap;
  var infowindow;
  var markers = [];
  var overlay1890;
  var overlay1920;
  USGSOverlay.prototype = new google.maps.OverlayView();


  var detroit = {lat: 42.336813, lng: -83.042773};

  // Initialize the map and the custom overlays.
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: detroit,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var bounds1890 = new google.maps.LatLngBounds(
        new google.maps.LatLng(42.310356, -83.169016),
        new google.maps.LatLng(42.362028, -83.043287));

      var bounds1920 = new google.maps.LatLngBounds(
        new google.maps.LatLng(42.257302, -83.476492),
        new google.maps.LatLng(42.447800, -83.099120));

      //nw: 42.450185, -83.098850  -83.098580 -82.910401 -83.286498

      var src1890Map = 'img/maps/map1897cropped2.png';
      var src1920Map = 'img/maps/map1950.png';

      overlay1890 = new USGSOverlay(bounds1890, src1890Map, map);
      overlay1920 = new USGSOverlay(bounds1920, src1920Map, map);

      infowindow = new google.maps.InfoWindow;

      var marker, i;

      map.addListener('click', function(event) {
        addMarker(event.latLng);
      });

      $scope.get2015Map();
    }

    function removeMarkers(){
      markers.forEach(function(el) {
        el.setMap(null);
      });
      markers = [];
    }

    function initMarkers(markerArray) {
      for (i = 0; i < markerArray.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(markerArray[i][1], markerArray[i][2]),
          animation: google.maps.Animation.DROP,
          map: map
        }); 
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(markerArray[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));

        markers.push(marker);
      }
    }

    function drawMarkers() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }

    function addMarker(coords) {
      marker = new google.maps.Marker({
          position: coords,
          animation: google.maps.Animation.DROP,
          map: map
      });

      marker.set("editing", false);

      var htmlBox = document.createElement("div");
      htmlBox.innerHTML = "test";
      htmlBox.style.width = "300px";
      htmlBox.style.height = "100px";

      var textBox = document.createElement("textarea");
      textBox.innerText = "test";
      textBox.style.width = "300px";
      textBox.style.height = "100px";
      textBox.style.display = "none";

      var container = document.createElement("div");
      container.style.position = "relative";
      container.appendChild(htmlBox);
      container.appendChild(textBox);
    
      var editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      container.appendChild(editBtn);
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(container);
          infowindow.open(map, marker);
        }
      })(marker, i));

      google.maps.event.addDomListener(editBtn, "click", function() {
        marker.set("editing", !marker.editing);
      });

      google.maps.event.addListener(marker, "editing_changed", function(){
        textBox.style.display = this.editing ? "block" : "none";
        htmlBox.style.display = this.editing ? "none" : "block";
      });

      google.maps.event.addListener(marker, "editing_changed", function(){
        textBox.style.display = this.editing ? "block" : "none";
        htmlBox.style.display = this.editing ? "none" : "block";
      });
      
      google.maps.event.addDomListener(textBox, "change", function(){
        htmlBox.innerHTML = textBox.value;
        marker.set("html", textBox.value);
      });
    }

    

    function USGSOverlay(bounds, image, map) {

      this.bounds_ = bounds;
      this.image_ = image;
      this.map_ = map;

      this.div_ = null;

      this.setMap(map);
    }

    USGSOverlay.prototype.onAdd = function() {

      var div = document.createElement('div');
      div.style.borderStyle = 'none';
      div.style.borderWidth = '0px';
      div.style.position = 'absolute';

      var img = document.createElement('img');
      img.src = this.image_;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.position = 'absolute';
      div.appendChild(img);

      this.div_ = div;

      var panes = this.getPanes();
      panes.overlayLayer.appendChild(div);
      overlay1890.hide();
      overlay1920.hide();
    };

    USGSOverlay.prototype.draw = function() {

      var overlayProjection = this.getProjection();

      var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
      var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

      var div = this.div_;
      div.style.left = sw.x + 'px';
      div.style.top = ne.y + 'px';
      div.style.width = (ne.x - sw.x) + 'px';
      div.style.height = (sw.y - ne.y) + 'px';
    };

    USGSOverlay.prototype.onRemove = function() {
      this.div_.parentNode.removeChild(this.div_);
      this.div_ = null;
    };

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