var center = [40.7829656,-74.0227719];

$('.map')
    .gmap3({
        center:center,
        zoom:12,
        scrollwheel: false,
        draggable: false,
        mapTypeId: "hasanmap", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "hasanmap"]
        }
    })
    .marker({
        position: center,
        icon: 'assets/img/map-marker.png'
    })
    .styledmaptype(
        "hasanmap",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ededed"},{"lightness":20}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":21}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#eeeeee"},{"lightness":16}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#dddddd"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#edeeee"},{"lightness":18}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#b5b5b5"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#c8d7d4"},{"lightness":10}]}
        ],
        {name: "Map By Hasan"}
      );

