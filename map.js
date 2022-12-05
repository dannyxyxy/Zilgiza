var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(36.9910113,127.9259497), // 지도의 중심좌표
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

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(34.9548461, 127.4824741); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div style="padding:5px;">문화인 쌀롱데이 <br><a href="https://map.kakao.com/link/map/문화인쌀롱데이,34.9548461,127.4824741" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/문화인쌀롱데이,34.9548461,127.4824741" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(34.9548461, 127.4824741); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.5765072, 127.0015243); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div style="padding:5px;">제12회 서울미래연극제 <br><a href="https://map.kakao.com/link/map/제12회서울미래연극제,37.5765072,127.0015243 style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/제12회서울미래연극제,37.5765072,127.0015243" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.5765072, 127.0015243); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.5030682, 128.761216); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div style="padding:5px;">외계인 대축제 <br><a href="https://map.kakao.com/link/map/외계인대축제,35.5030682,128.761216" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/외계인대축제,35.5030682,128.761216" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.5030682, 128.761216); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.0912316, 129.0681448); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div style="padding:5px;">별바다부산 나이트페스타 <br><a href="https://map.kakao.com/link/map/별바다부산나이트페스타,35.0912316,129.0681448" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/별바다부산나이트페스타,35.0912316,129.0681448" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.0912316, 129.0681448); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.3409994, 127.2911455); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">화담숲 가을단풍축제 <br><a href="https://map.kakao.com/link/map/화담숲가을단풍축제,37.3409994,127.2911455" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/화담숲가을단풍축제,37.3409994,127.2911455" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.3409994, 127.2911455); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.8153492, 127.1497938); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">2022 경기전 수문장 교대의식-경기전을 지켜라 <br><a href="https://map.kakao.com/link/map/2022 경기전 수문장 교대의식-경기전을 지켜라,35.8153492,127.1497938" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/화담숲가을단풍축제,35.8153492,127.1497938" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.8153492, 127.1497938); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.4650414, 126.6807024); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">2022 미추홀 윈터마켓 <br><a href="https://map.kakao.com/link/map/2022 미추홀 윈터마켓,37.4650414,126.6807024" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/2022 미추홀 윈터마켓,37.4650414,126.6807024" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.4650414, 126.6807024); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.5882041, 127.0066598); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">2022 제11회 유러피언 크리스마스 마켓 <br><a href="https://map.kakao.com/link/map/22022 제11회 유러피언 크리스마스 마켓,37.5882041,127.0066598" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/2022 제11회 유러피언 크리스마스 마켓,37.5882041,127.0066598" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.5882041, 127.0066598); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.506032, 126.7218291); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">4th ASCOM BLUES FESTIVAL <br><a href="https://map.kakao.com/link/map/4th ASCOM BLUES FESTIVAL,37.506032,126.7218291" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/4th ASCOM BLUES FESTIVAL,37.506032,126.7218291" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.506032, 126.7218291); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.1586975, 129.1603842); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">제35회 해운대 북극곰축제 <br><a href="https://map.kakao.com/link/map/제35회 해운대 북극곰축제,35.1586975,129.1603842" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/제35회 해운대 북극곰축제,35.1586975,129.1603842" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.1586975, 129.1603842); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.5116828, 127.059151); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">코엑스 윈터 페스티벌 (Coex Winter Festival) <br><a href="https://map.kakao.com/link/map/코엑스 윈터 페스티벌 (Coex Winter Festival),37.5116828,127.059151" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/코엑스 윈터 페스티벌 (Coex Winter Festival),37.5116828,127.059151" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.5116828, 127.059151); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.4860985, 126.4907077); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">누웨마루 페스티벌 더 크리스마스 <br><a href="https://map.kakao.com/link/map/누웨마루 페스티벌 더 크리스마스,33.4860985,126.4907077" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/누웨마루 페스티벌 더 크리스마스,33.4860985,126.4907077" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(33.4860985, 126.4907077); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.5716352,126.9767435); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">2022 서울 빛초롱 <br><a href="https://map.kakao.com/link/map/2022 서울 빛초롱,37.5716352,126.9767435" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/2022 서울 빛초롱,37.5716352,126.9767435" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.5716352, 126.9767435); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.1689766,129.1360411); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">부산국제광고제 <br><a href="https://map.kakao.com/link/map/부산국제광고제,35.1689766,129.1360411" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/부산국제광고제,35.1689766,129.1360411" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.1689766, 129.1360411); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.9215327,127.7202201); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">제34회 춘천인형극제 <br><a href="https://map.kakao.com/link/map/제34회 춘천인형극제,37.9215327,127.7202201" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/제34회 춘천인형극제,37.9215327,127.7202201" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.9215327, 127.7202201); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.3394089,126.8634489); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">안산별빛마을 <br><a href="https://map.kakao.com/link/map/안산별빛마을,37.3394089,126.8634489" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/안산별빛마을,37.3394089,126.8634489" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.3394089, 126.8634489); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.5112348,127.0980274); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">롯데월드 miracle winter <br><a href="https://map.kakao.com/link/map/롯데월드 miracle winter,37.5112348,127.0980274" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/롯데월드 miracle winter,37.5112348,127.0980274" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.5112348, 127.0980274); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.6529618,127.0122387); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">근현대사 추리여행, 사라진 열쇠를 찾아라 <br><a href="https://map.kakao.com/link/map/근현대사 추리여행, 사라진 열쇠를 찾아라,37.6529618,127.0122387" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/근현대사 추리여행, 사라진 열쇠를 찾아라,37.6529618,127.0122387" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.6529618, 127.0122387); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(34.4794776,126.2698671); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">진도토요민속여행 상설공연 <br><a href="https://map.kakao.com/link/map/진도토요민속여행 상설공연,34.4794776,126.2698671" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/진도토요민속여행 상설공연,34.4794776,126.2698671" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(34.4794776, 126.2698671); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.3364972,127.9461321); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">대한민국 독서대전 <br><a href="https://map.kakao.com/link/map/대한민국 독서대전,37.3364972,127.9461321" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/대한민국 독서대전,37.3364972,127.9461321" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.3364972, 127.9461321); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.7316756,126.7947146); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">퍼스트가든 빛축제 <br><a href="https://map.kakao.com/link/map/퍼스트가든 빛축제,37.7316756,126.7947146" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/퍼스트가든 빛축제,37.7316756,126.7947146" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.7316756, 126.7947146); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.1531696,129.118666); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">2023 카운트다운부산 <br><a href="https://map.kakao.com/link/map/2023 카운트다운부산,35.1531696,129.118666" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/2023 카운트다운부산,35.1531696,129.118666" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.1531696, 129.118666); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(36.12878,126.5073833); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">서천 마량진항 해넘이·해돋이 축제<br><a href="https://map.kakao.com/link/map/서천 마량진항 해넘이·해돋이 축제,36.12878,126.5073833" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/서천 마량진항 해넘이·해돋이 축제,36.12878,126.5073833" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(36.12878, 126.5073833); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.5665256,127.0092236); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">서울라이트 DDP<br><a href="https://map.kakao.com/link/map/서울라이트 DDP,37.5665256,127.0092236" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/서울라이트 DDP,37.5665256,127.0092236" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.5665256, 127.0092236); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.8276358,128.6177221); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">제4회 수성빛예술제<br><a href="https://map.kakao.com/link/map/제4회 수성빛예술제,35.8276358,128.6177221" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/제4회 수성빛예술제,35.8276358,128.6177221" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.8276358, 128.6177221); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.5541778,126.9229848); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">헬로, 메리크리스마루 「CHRISTMAS MARKET」<br><a href="https://map.kakao.com/link/map/헬로, 메리크리스마루 「CHRISTMAS MARKET」,37.5541778,126.9229848" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/헬로, 메리크리스마루 「CHRISTMAS MARKET」,37.5541778,126.9229848" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.5541778, 126.9229848); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.7880646,128.635446); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">네이처파크 [미라클 크리스마스]<br><a href="https://map.kakao.com/link/map/네이처파크 [미라클 크리스마스],35.7880646,128.635446" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/네이처파크 [미라클 크리스마스],35.7880646,128.635446" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.7880646, 128.635446); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.5179805,127.117733); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">2022 별빛내린천 신사리상권 릴레이 이벤트<br><a href="https://map.kakao.com/link/map/2022 별빛내린천 신사리상권 릴레이 이벤트,37.5179805,127.117733" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/2022 별빛내린천 신사리상권 릴레이 이벤트,37.5179805,127.117733" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.5179805, 127.117733); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.1586975,129.1603842); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">제9회 해운대 빛축제<br><a href="https://map.kakao.com/link/map/제9회 해운대 빛축제,35.1586975,129.1603842" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/제9회 해운대 빛축제,35.1586975,129.1603842" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.1586975, 129.1603842); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.6866787,127.9095168); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">제10회 거창크리스마스트리문화축제<br><a href="https://map.kakao.com/link/map/제10회 거창크리스마스트리문화축제,35.6866787,127.9095168" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/제10회 거창크리스마스트리문화축제,35.6866787,127.9095168" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.6866787, 127.9095168); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.3087565,126.6337938); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">휴애리 동백축제<br><a href="https://map.kakao.com/link/map/휴애리 동백축제,33.3087565,126.6337938" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/휴애리 동백축제,33.3087565,126.6337938" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(33.3087565, 126.6337938); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.6843559,128.7182178); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">청도 프로방스 크리스마스 산타마을 빛축제<br><a href="https://map.kakao.com/link/map/청도 프로방스 크리스마스 산타마을 빛축제,35.6843559,128.7182178" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/청도 프로방스 크리스마스 산타마을 빛축제,35.6843559,128.7182178" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.6843559, 128.7182178); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.0063612,127.428636); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">안성두메호수빙어축제<br><a href="https://map.kakao.com/link/map/안성두메호수빙어축제,37.0063612,127.428636" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/안성두메호수빙어축제,37.0063612,127.428636" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.0063612, 127.428636); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.4797276,127.9152754); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">제8회 고니골빛축제<br><a href="https://map.kakao.com/link/map/제8회 고니골빛축제,37.4797276,127.9152754" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/제8회 고니골빛축제,37.4797276,127.9152754" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.4797276, 127.9152754); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.8534682,128.5639178); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">이월드 일루미네이션 2022<br><a href="https://map.kakao.com/link/map/이월드 일루미네이션 2022,35.8534682,128.5639178" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/이월드 일루미네이션 2022,35.8534682,128.5639178" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(35.8534682, 128.5639178); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.8399858,127.5203856); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">제12회 자라섬씽씽겨울축제<br><a href="https://map.kakao.com/link/map/제12회 자라섬씽씽겨울축제,37.8399858,127.5203856" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/제12회 자라섬씽씽겨울축제,37.8399858,127.5203856" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.8399858, 127.5203856); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.9654806,127.131773); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">허브아일랜드 불빛동화축제<br><a href="https://map.kakao.com/link/map/허브아일랜드 불빛동화축제,37.9654806,127.131773" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/허브아일랜드 불빛동화축제,37.9654806,127.131773" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.9654806, 127.131773); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.4350434,127.8180827); 
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
var iwContent = '<div style="padding:5px;">오크밸리 3D 라이팅쇼 소나타오브라이트<br><a href="https://map.kakao.com/link/map/오크밸리 3D 라이팅쇼 소나타오브라이트,37.4350434,127.8180827" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/오크밸리 3D 라이팅쇼 소나타오브라이트,37.4350434,127.8180827" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.4350434, 127.8180827); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);