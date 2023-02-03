 // Initialize and add the map
    function initMap() {
        var map;
        var bounds = new google.maps.LatLngBounds();
        var mapOptions = {
            mapTypeId: 'roadmap'
        };

        // Display a map on the web page
        map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
        map.setTilt(50);

        // Multiple markers location, latitude, and longitude
        var markers = [
            ['Niagara Falls, State Park, NY 14303', 43.08783773165759, -79.06850072680379],
            ['Fort Niagara, Youngstown, NY 14174', 43.264308218335245, -79.06243064079692],
            ['Buffalo City Hall, 65 Niagara Square, Buffalo, NY 14202', 42.887468386249836, -78.87928208465354],
            ['Corning Museum of Glass, 1 Museum Way, Corning, NY 14830', 42.149947656107585, -77.05416371540996],
            ['Watkins Glen State Park, 1009 N Franklin St, Watkins Glen, NY 14891', 42.376281311586034, -76.87155283231647]
        ];

        // Info window content
        var infoWindowContent = [
            ['<div class="info_content">' +
                '<h3>Niagara Falls</h3>' +
                '<p>Niagara Falls, NY 14303</p>' +
                '<p> Panoramic views of Niagara Falls are the major attraction at this observation deck.</p>' +
                '</div>'],
            ['<div class="info_content">' +
                '<h3>Fort Niagara</h3>' +
                '<p>Youngstown, NY 14174</p>' +
                '<p>Historic fort and living history museum.</p>' +
                '</div>'],
            ['<div class="info_content">' +
                '<h3>Buffalo City Hall</h3>' +
                '<p>65 Niagara Square, Buffalo, NY 14202</p>' +
                '<p>Grand municipal building with an art deco design, offering guided tours & an observation deck.</p>' +
                '</div>'],
            ['<div class="info_content">' +
                '<h3>Corning Museum of Glass</h3>' +
                '<p>1 Museum Way, Corning, NY 14830</p>' +
                '<p>Covers 3,500 years of glass art, from Egyptian artifacts to modern pieces, plus workshops & demos.</p>' +
                '</div>'],
            ['<div class="info_content">' +
                '<h3>Watkins Glen State Park</h3>' +
                '<p>1009 N Franklin St, Watkins Glen, NY 14891</p>' +
                '<p>Rocky cliffs, cascading waterfalls & scenic views from rim trails, plus lakes for trout fishing.</p>' +
                '</div>']
        ];

        // Add multiple markers to map
        var infoWindow = new google.maps.InfoWindow(), marker, i;

        // Place each marker on the map  
        for (i = 0; i < markers.length; i++) {
            var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
            bounds.extend(position);
            marker = new google.maps.Marker({
                position: position,
                map: map,
                title: markers[i][0]
            });

            // Add info window to marker    
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infoWindow.setContent(infoWindowContent[i][0]);
                    infoWindow.open(map, marker);
                }
            })(marker, i));

            // Center the map to fit all markers on the screen
            map.fitBounds(bounds);
        }

        // Set zoom level
        var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
            this.setZoom(7);
            google.maps.event.removeListener(boundsListener);
        });
    }

    window.initMap = initMap;
