function initialize() {

    /* Style of the map */
    var styles = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#ffd166"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    /* Lat. and Lon. of the center of the map */
    var myCenter = new google.maps.LatLng(51.5285300, -0.1357400);

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
        zoom: 14, 				//zoom level
        center: myCenter, 		//center position
        scrollwheel: false, 	//zoom when scroll disable
        zoomControl: true, 		//show control zoom

        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }

    };

    var map = new google.maps.Map(document.getElementById('pb-gmap'),mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    /* Marker Berlin */
    var contentString =

        ' '; // marker html

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 0,
        maxHeight: 0,

    });

    var myLatlng = new google.maps.LatLng(51.5285300, -0.1357400);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'London',
        icon: 'http://localhost:8888/higgs/assets/img/pin-black.png',
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);


