 
        var styles = [{
            featureType: "administrative",
            elementType: "all",
            stylers: [{
                visibility: "on"
            }]
        }, {
            featureType: "landscape",
            elementType: "all",
            stylers: [{
                color: '#aaaaaa'
            }, {
                visibility: "on"
            }]
        }, {
            featureType: "poi",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "all",
            stylers: [{
                visibility: "on"
            }, {
                lightness: -30
            }]
        }, {
            featureType: "transit",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "all",
            stylers: [{
                color: '#cccccc'
            }]
        }];
        var map;
      
        function initMap() {
  var mapOptions = {
            center: new google.maps.LatLng(18.906128, 76.757098),
            zoom: 4,
            scrollwheel: false,
            panControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            disableDefaultUI: false,
            zoomControl: true,
            styles: styles
        }; 
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
            var bounds = new google.maps.LatLngBounds();
            var myIcon = new google.maps.MarkerImage("images/icons/location-pin-3.png", null, null, null, new google.maps.Size(24, 24));
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(10.013131, 76.957160),
                map: map,
                title: 'Safarihub',
                icon: myIcon
            });
        }
 