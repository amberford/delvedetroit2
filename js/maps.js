var locations = [
     ['1960- Berry Gordy incorporated Tamla Records as Motown Record Company on April 14th. Motown achieved spectacular success for a small record company: 79 records in the Top Ten of the Billboard Hot 100 record chart between 1960 and 1969. ', 42.364170, -83.088545, 1],
     ['1960- Detroit had the highest per capita income in the United States.', 42.3314, -83.0458, 2],
     ['1963- Martin Luther King delivered his I Have a Dream speech for the first time at Cobo Hall, during the Walk to Freedom march. This civil rights march drew crowds of an estimated 125,000 and was the largest civil rights demonstration in U.S. history up to that date.', 42.332085, -83.049964, 3],
     ['1964- Dr. Charles Wright opens the International Afro-American Museum in his office on West Grand Boulevard.', 42.345018, -83.107840, 4],
     ['1965- On March 6th, My Girl by The Temptations became the #1 song on the Billboard Hot 100 charts.', 42.364080, -83.088387, 5],
     ['1968- The Detroit Tigers win the World Series against the St. Louis Cardinals.', 42.331944, -83.068889, 6],
     ['1969- In January, I Heard it Through the Grapevine by Marvin Gaye becomes the #1 song on the Billboard Hot 100 charts.', 42.363989, -83.088298, 7],
     ['1967- The 12th Street Riot lasted from July 23rd - July 27th. To help end the disturbance, Governor George W. Romney ordered the Michigan Army National Guard into Detroit, and President Lyndon B. Johnson sent in both the 82nd and 101st Airborne Divisions. The result was 43 dead, 1,189 injured, over 7,200 arrests, and more than 2,000 buildings destroyed.', 42.376389, -83.099444, 8],
     
     ['1921- The Detroit Public Library was built at 5201 Woodward Avenue.', 42.358385, -83.066724, 9],
     ['1923- The Detroit Institute of Arts was built from 1923-1927 at 5200 Woodward Avenue.', 42.359343, -83.064912, 10],
     ['1925- Walter Chrysler starts the Chrysler Corporation.', 42.328633, -83.040364, 11],
     ['1928- The Fox Theatre opens at 2211 Woodward Avenue.', 42.338518, -83.052263, 12],
     ['1929- The Ambassador Bridge is completed and opens on November 11th.', 42.316689, -83.077232, 13],
     ['1927- On May 26th, Henry Ford ends production of the Model T.'  , 42.316689, -83.077232, 14],
     ['1927- The Purple Gang was the most notorious organized crime gang in Detroit in the 1920s and 1930s. The gang was made up of Jewish immigrants from the lower east side of Detroit. They were involved in murders, smuggling, extortion, kidnapping, gambling and more.', 42.391415, -83.070282, 15],
     ['1928- The 47-story Penobscot building was built. At the time, it was the tallest structure in Michigan and the 8th tallest building in the world.', 42.330547, -83.047419, 16]


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
