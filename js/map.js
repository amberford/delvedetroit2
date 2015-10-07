var app = angular.module('delveApp');

app.controller('mapCtrl', function() { 
  // [START region_initialization]
  // This example creates a custom overlay called USGSOverlay, containing
  // a U.S. Geological Survey (USGS) image of the relevant area on the map.

  // Set the custom overlay object's prototype to a new instance
  // of OverlayView. In effect, this will subclass the overlay class therefore
  // it's simpler to load the API synchronously, using
  // google.maps.event.addDomListener().
  // Note that we set the prototype to an instance, rather than the
  // parent class itself, because we do not wish to modify the parent class.

  var overlay;
  USGSOverlay.prototype = new google.maps.OverlayView();

  var detroit = {lat: 42.3332871, lng: -83.0461940};

  // Initialize the map and the custom overlay.
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: detroit,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      });

      var bounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(42.320606, -83.092100),
          new google.maps.LatLng(42.350712, -83.010218));

      // The photograph is courtesy of the U.S. Geological Survey.
      var srcImage = 'img/maps/map1897cropped2.png';

      // The custom USGSOverlay object contains the USGS image,
      // the bounds of the image, and a reference to the map.
      overlay = new USGSOverlay(bounds, srcImage, map);
      overlay.hide();

      // Create the DIV to hold the control and call the CenterControl() constructor
      // passing in this DIV.
      var centerControlDiv = document.createElement('div');
      var centerControl = new CenterControl(centerControlDiv, map, detroit);

      centerControlDiv.index = 1;
      centerControlDiv.style['padding-top'] = '10px';
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
    }
    // [END region_initialization]

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

    // [START region_removal]
    // The onRemove() method will be called automatically from the API if
    // we ever set the overlay's map property to 'null'.
    USGSOverlay.prototype.onRemove = function() {
      this.div_.parentNode.removeChild(this.div_);
      this.div_ = null;
    };
    // [END region_removal]

    // Set the visibility to 'hidden' or 'visible'.
    USGSOverlay.prototype.hide = function() {
      if (this.div_) {
        console.log('blarp');
        // The visibility property must be a string enclosed in quotes.
        this.div_.style.visibility = 'hidden';
      }
    };

    USGSOverlay.prototype.show = function() {
      if (this.div_) {
        this.div_.style.visibility = 'visible';
      }
    };


    /**
     * The CenterControl adds a control to the map that recenters the map on
     * Chicago.
     * @constructor
     * @param {!Element} controlDiv
     * @param {!google.maps.Map} map
     * @param {?google.maps.LatLng} center
     */
    function CenterControl(controlDiv, map, center) {
      // We set up a variable for this since we're adding event listeners later.
      var control = this;

      // Set the center property upon construction
      control.center_ = center;
      controlDiv.style.clear = 'both';

      // Set CSS for the control border
      var goCenterUI = document.createElement('div');
      goCenterUI.id = 'goCenterUI';
      goCenterUI.title = 'Click to recenter the map';
      controlDiv.appendChild(goCenterUI);

      // Set CSS for the control interior
      var goCenterText = document.createElement('div');
      goCenterText.id = 'goCenterText';
      goCenterText.innerHTML = '1890s';
      goCenterUI.appendChild(goCenterText);

      // Set CSS for the setCenter control border
      var setCenterUI = document.createElement('div');
      setCenterUI.id = 'setCenterUI';
      setCenterUI.title = 'Click to change the center of the map';
      controlDiv.appendChild(setCenterUI);

      // Set CSS for the control interior
      var setCenterText = document.createElement('div');
      setCenterText.id = 'setCenterText';
      setCenterText.innerHTML = 'Today';
      setCenterUI.appendChild(setCenterText);

      // Set up the click event listener for 'Center Map': Set the center of the map
      // to the current center of the control.
      goCenterUI.addEventListener('click', function() {
        overlay.show();
      });

      // Set up the click event listener for 'Set Center': Set the center of the
      // control to the current center of the map.
      setCenterUI.addEventListener('click', function() {
        overlay.hide();
      });
    }

    /**
     * Define a property to hold the center state.
     * @private
     */
    CenterControl.prototype.center_ = null;


  google.maps.event.addDomListener(window, 'load', initMap);

});