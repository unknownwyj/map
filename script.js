mapboxgl.accessToken = 'pk.eyJ1Ijoib25nenoiLCJhIjoiY2trdDNldXAwMGtsbzJ1cGk0dGJzYnJibyJ9.Dp3Woc0ws3NCWUmR_qIpyg';

function getLocation(){

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    // if finish then chat type woohoo
    
    var map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [longitude, latitude],
      zoom: 9,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    var marker = new mapboxgl.Marker({
      color: "#FF0000",
      draggable: true
    }).setLngLat([longitude, latitude])
    .addTo(map);
  }

  function error(e) {
    console.log(e.message)
  }

  if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert('Geolocation is not supported by your browser');
  }
}