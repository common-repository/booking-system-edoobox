export default function () {
    var script = document.createElement('script');
    var apiKey = window.googleMapsApiKey?.[0];
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=window.initialiseGoogleMaps&key=' + apiKey;
    document.body.appendChild(script);
}

export function initialiseGoogleMaps() {
    const mapCollection: NodeList = document.querySelectorAll(".wdg_google_init");
    mapCollection.forEach(function (element: HTMLElement) {
        const googleMarker: string = element.dataset.gmarker;
        const googleStyle: string = element.dataset.gstyle;
        const googleType: string = element.dataset.gtype;
        const styleIsJson: boolean = googleStyle === "json";
        const addMarker: boolean = googleMarker === "1";
        const zoom: number = +element.dataset.zoom || 0;
        const langitude: number = parseFloat(element.dataset.lan);
        const latitude: number = parseFloat(element.dataset.lat);
        const myLatlng = new google.maps.LatLng(latitude, langitude);

        let map: google.maps.Map = new google.maps.Map(element, buildMapOptions({
            zoom,
            center: myLatlng,
            googleStyle,
            googleType
        }));

        if (styleIsJson) {
            setCustomEdooboxMapType(map);
        }

        if (addMarker) {
            setMapMarker({ map, position: myLatlng });
        }
    });
}

function buildMapOptions({ zoom, center, googleStyle, googleType }) {
    const edooboxStyle = "edooboxstyle";
    return googleStyle === "json" ? {
        zoom,
        center,
        streetViewControl: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId[googleType], edooboxStyle]
        },
        mapTypeId: edooboxStyle
    } : {
        zoom,
        center,
        streetViewControl: true,
        mapTypeId: googleType.toLowerCase()
    };
}

function setCustomEdooboxMapType(map: google.maps.Map) {
    map.mapTypes.set('edooboxstyle', new google.maps.StyledMapType(window.googlemapstyle, {
        name: 'Event Style'
    }));
}

function setMapMarker({ map, position }): google.maps.Marker {
    return new google.maps.Marker({
        position,
        map,
        animation: google.maps.Animation.DROP,
        title: "Location"
    });
}