var locations = [
     ['2007 - Greektown Casino opened November 15, 2007 with a new 13-story, and 3,500-space, free parking garage . In January 2013, Rock Gaming, the company of Quicken Loans founder Dan Gilbert, agreed to buy a majority stake in Greektown, as part of Gilberts plan to help revitalize downtown Detroit. ', 42.3345, -83.0412, 1],

     ['1999- Motor City Casino - The $825 million complex incorporates a historic building that once housed the Wagner Baking Company, makers of Wonder Bread. The complex houses a 100,000 square-foot casino with approximately 3,000 slot machines; a 13,000-square-foot spa;, a live music theater with a capacity of 2,400 people; and a luxury hotel with 400 guest rooms and suites. The casino was purchased by Marian Ilitch of IH Gaming (Detroit Entertainment, LLC and owner of Little Ceasars).', 42.3390,-83.0690, 2],

     ['1999- MGM Grand Casino: The temporary MGM Grand Detroit Casino officially opened on July 29, 1999 to much fanfare. The facility has 30,000 square feet The permanent casino opened its doors to the public on October 3, 2007. The grand opening celebration attracted Hollywood stars. ', 42.332085, -83.049964, 3],


     ['2009- Tigers Stadium (Former)Tiger Stadium was a stadium located in the Corktown neighborhood of Detroit, Michigan. It hosted the Detroit Tigers Major League Baseball team from 1912–99, as well as the National Football Leagues Detroit Lions from 1938–74. The lastTigers game was held in September 1999. The stadium was demolished on September 21, 2009. A plan to redevelop the old Tiger Stadium site would retain the historic playing field for youth sports', 42.331944, -83.068889, 4],


     [' 2003- The One Campus Martius building sits on the once home to the Kern Department store (1900-1960) and the area remained greenspace until 1999. Compuware moved its headquarters to a newly constructed building on the site in 2003. The building was sold in a joint venture to Dan Gilberts real estate group Bedrock Real Estate and Meridian Health  in November 2014. The building now has Quicken Loans, Meridian Health, Plante Moran and Compuware as its major tenants.', 42.3327,-83.0464, 5],


     ['1968- Eastern Market - Check out Tuesday  and Saturday Farmer Markets. Shop for antiques, pottery, vintage clothing and artisan jewelry at boutiques surrounding the market. Unwind with some old-world Italian cuisine and pick up a parking pass for some Lions tailgating on Sunday. 
    <a ref="easternmarket.com">Eastern Market Website<a>', 42.3456,-83.0431, 6]


     ['2007- The Detroit RiverFront Conservancy (DRFC) opened the Detroit International River Walk in 2007, creating a unique Detroit resource with beautiful views and great family attractions along the Detroit River. Rivard Plaza highlights include the custom-designed River Carousel that features creatures that are native to the Detroit River. A ceremonial “first ride” on the River Carousel marked the occasion – with 5th graders from St. Scholastica Elementary School. 
    <a ref="http://detroitriverfront.org/riverfront/after">River Walk Website</a>', 42.3369, -83.0144, 7],


     ['2004-Campus Martius-The park is also where the point of origin of Detroits coordinate system is located. The new Campus Martius Park was dedicated November 19, 2004 and includes two performance stages, sculptures, public spaces and a seasonal ice skating rink.  Campus Martius Park is the home of the annual Motown Winter Blast, an event that has drawn more than 450,000 people to the downtown area every year and it has become the site of the citys annual Christmas tree lighting celebration, held the Monday before Thanksgiving. ', 442.3311, 83.0464, 8],
     
     ['1967- The 12th Street Riot lasted from July 23rd - July 27th. To help end the disturbance, Governor George W. Romney ordered the Michigan Army National Guard into Detroit, and President Lyndon B. Johnson sent in both the 82nd and 101st Airborne Divisions. The result was 43 dead, 1,189 injured, over 7,200 arrests, and more than 2,000 buildings destroyed.', 42.376389, -83.099444, 9]


];
var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 14,
     center: new google.maps.LatLng(42.334498, -83.049645),
     mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow;

var marker, i;

for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
         animation: google.maps.Animation.DROP,
         map: map
    }); 

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
             infowindow.setContent(locations[i][0]);
             infowindow.open(map, marker);
         }
    })(marker, i));
}

google.maps.event.addDomListener(window, 'load', initialize);
