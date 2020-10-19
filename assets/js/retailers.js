var markers = [];
$(function(){

});

function closeAllMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].close();
  }
}

// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 45.5745595, lng: 20 },
    styles: [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#212121"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#212121"
                  }
                ]
              },
              {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#181818"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#1b1b1b"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#2c2c2c"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#8a8a8a"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#373737"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#3c3c3c"
                  }
                ]
              },
              {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#4e4e4e"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#000000"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#3d3d3d"
                  }
                ]
              }
            ]
  });

  $(".shops-container .shop").each(function(i){
    if (!$(this).attr("data-position-lat")) {
      return;
    }
    var lat = parseFloat($(this).attr("data-position-lat"));
    var lng = parseFloat($(this).attr("data-position-lng"));
    var title = $(this).attr("data-shop-name");
    var shop = $(this).html();

    const infowindow = new google.maps.InfoWindow({
      content: shop,
    });

    const marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng
      },
      map,
      title: title,
      icon: "/images/priest/lynx-white-trans-marker.png"
    });
    markers.push(infowindow);
    marker.addListener("click", () => {
      closeAllMarkers();
      infowindow.open(map, marker);
    });
  });

  $(".shops-container .address").click(function(){
    var title = $(this).closest(".shop").attr("data-shop-name");
    if (!$("div[title='" + title + "']").length) return;
    // Close all windows.
    closeAllMarkers();
    // Scroll up the browser.
    $("html, body").animate({ scrollTop: 0 }, "slow", function(){
      // Click on a info window...
      $("div[title='" + title + "']").click();
    });
  });
}
