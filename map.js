var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(37.495711,127.0717957), // 지도의 중심좌표
    level: 12 // 지도의 확대 레벨
};  

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
// 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
function setMapType(maptype) { 
var roadmapControl = document.getElementById('btnRoadmap');
var skyviewControl = document.getElementById('btnSkyview'); 
if (maptype === 'roadmap') {
    map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);    
    roadmapControl.className = 'selected_btn';
    skyviewControl.className = 'btn';
} else {
    map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);    
    skyviewControl.className = 'selected_btn';
    roadmapControl.className = 'btn';
}
}

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
map.setLevel(map.getLevel() + 1);
}
  // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
  /*if (navigator.geolocation) {
      
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
          
          var lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도
          
          var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
              message = '<div style="padding:5px;">현위치</div>'; // 인포윈도우에 표시될 내용입니다
          
          // 마커와 인포윈도우를 표시합니다
          displayMarker(locPosition, message);
              
        });
      
  } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      
      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
          message = 'geolocation을 사용할수 없습니다'
          
      displayMarker(locPosition, message);
  }*/

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.495711, 127.0717957); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div style="padding:5px;">2022 보드게임페스타 <br><a href="https://map.kakao.com/link/map/2022보드게임페스타,37.495711,127.0717957" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/2022보드게임페스타,37.495711,127.0717957" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.495711, 127.0717957); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 