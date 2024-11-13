let map;
let geocoder;

function initMap() {
  const initialLocation = { lat: 35.7240216724222, lng: 139.77678972347857 }; 
  map = new google.maps.Map(document.querySelector("#map"), {
    center: initialLocation,
    zoom: 15
  });
  geocoder = new google.maps.Geocoder();
}

// 場所のデータ
const locationData = {
  Chilling: [
    { name: "Hagiso", address: "Hagiso" },
    { name: "Landabout", address: "Landabout" },
  ],
  Bath: [
    { name: "萩の湯", address: "萩の湯" },
    { name: "サウナセンター鶯谷", address: "サウナセンター鶯谷" },
    { name: "サウナ&カプセルホテル北欧", address: "東京都台東区上野７丁目２−２−１６" },
    { name: "宝仙湯", address: "宝仙湯" },
    { name: "萩の湯", address: "萩の湯" },
  ],
  Dinner: [
    { name: "ラーメン長山", address: "ラーメン長山" },
  ],
  Station: [
    { name: "鶯谷駅", address: "鶯谷駅" },
  ],
  sightseeing: [
    { name: "スカイツリー", address: "スカイツリー" },
  ],
  shopping: [
    { name: "銀座", address: "銀座" },
  ],
  Other: [
    { name: "Other", address: "鶯谷駅" },
  ],
};

// ジャンル別のスポットデータ
const recommendedSpots = {
    Onsen: [
    {
      imgs: ["img/hagiso01", "img/hagiso02"],
      name: "Hokuou",
      vicinity: "東京都台東区上野７丁目２−２−１６",
      lat: 35.726372112715445,
      lng: 139.76603526245788
    },
    {
      imgs: ["img/landabout01.jpg", "img/landabout02.jpg"],
      name: "landabout",
      vicinity: "東京都台東区根岸3-4-5-1",
      lat: 35.7216780002154,
      lng: 139.7806135257007
    },
    {
      imgs: ["images/lemon.jpg", "images/lime.jpg"],
      name: "上野動物園",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7222484623036,
      lng: 139.78489799686534
    },
    {
      imgs: ["img/fuglen1", "images/fuglen2"],
      name: "fuglen Tokyo",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7222484623036,
      lng: 139.78489799686534
    }
  ],
  cafe: [
    {
      imgs: ["img/hagiso01", "img/hagiso02"],
      name: "Hagiso",
      vicinity: "東京都台東区谷中3-10-25 HAGISO 1F",
      lat: 35.726372112715445,
      lng: 139.76603526245788
    },
    {
      imgs: ["img/landabout01.jpg", "img/landabout02.jpg"],
      name: "landabout",
      vicinity: "東京都台東区根岸3-4-5-1",
      lat: 35.7216780002154,
      lng: 139.7806135257007
    },
    {
      imgs: ["images/lemon.jpg", "images/lime.jpg"],
      name: "上野動物園",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7222484623036,
      lng: 139.78489799686534
    },
    {
      imgs: ["img/fuglen1", "images/fuglen2"],
      name: "fuglen Tokyo",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7222484623036,
      lng: 139.78489799686534
    }
  ],
  dinner: [
    {
      imgs: ["img/nagayama01.png", "img/nagayama02.jpg"],
      name: "ラーメン長山",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7176,
      lng: 139.7728
    },
    {
      imgs: ["img/kimihan01.jpg", "img/kimihan02.jpg"],
      name: "きみはん",
      vicinity: "東京都台東区根岸3-3-18",
      lat: 35.7176,
      lng: 139.7728
    },
    {
      imgs: ["img/hantei01.jpg", "img/hantei02.jpg"],
      name: "はんてい",
      vicinity: "東京都文京区根津2-12-15",
      lat: 35.7176,
      lng: 139.7728
    },
    {
      imgs: ["img/touen01.jpg", "img/hantei02.jpg"],
      name: "桃園",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7176,
      lng: 139.7728
    }  
  ],
  lunch: [
    {
      imgs: ["img/nagayama01.png", "img/nagayama02.jpg"],
      name: "ラーメン長山",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7176,
      lng: 139.7728
    },
    {
      imgs: ["img/ramen01.jpg", "img/ramen02.jpg"],
      name: "きみはん",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7176,
      lng: 139.7728
    },
    {
      imgs: ["img/ramen01.jpg", "img/ramen02.jpg"],
      name: "ラーメン長山",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7176,
      lng: 139.7728
    },
    {
      imgs: ["img/ramen01.jpg", "img/ramen02.jpg"],
      name: "桃園",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7176,
      lng: 139.7728
    }  
  ],
  bar: [
    {
      imgs: ["img/ramen01.jpg", "img/ramen02.jpg"],
      name: "ラーメン長山",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7176,
      lng: 139.7728
    },
    {
      imgs: ["img/ramen01.jpg", "img/ramen02.jpg"],
      name: "きみはん",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7176,
      lng: 139.7728
    },
    {
      imgs: ["img/ramen01.jpg", "img/ramen02.jpg"],
      name: "ラーメン長山",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7176,
      lng: 139.7728
    },
    {
      imgs: ["img/ramen01.jpg", "img/ramen02.jpg"],
      name: "きみはん",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7176,
      lng: 139.7728
    },
  ],
  sightseeing: [
    {
      imgs: ["img/skytree01.jpg", "img/skytree02.jpg"],
      name: "スカイツリー",
      vicinity: "東京都墨田区押上1-1-2",
      lat: 35.7101,
      lng: 139.8107
    },
    {
      imgs: ["images/lemon.jpg", "images/lime.jpg"],
      name: "上野動物園",
      vicinity: "東京都台東区上野公園9-83",
      lat: 35.7222484623036,
      lng: 139.78489799686534
    },
    {
      imgs: ["images/odaiba1.jpg", "images/odaiba2.jpg"],
      name: "お台場海浜公園",
      vicinity: "東京都港区台場1-4",
      lat: 35.6311,
      lng: 139.7753
    },
    {
      imgs: ["images/meiji1.jpg", "images/meiji2.jpg"],
      name: "明治神宮",
      vicinity: "東京都渋谷区代々木神園町1-1",
      lat: 35.6764,
      lng: 139.6993
    },
  ],
  shopping: [
    {
      imgs: ["img/ginza01.jpg", "img/ginza02.jpg"],
      name: "銀座",
      vicinity: "東京都中央区銀座4-12",
      lat: 35.6717,
      lng: 139.765
    }
  ]
};

function populateLocationOptions() {
  const locationSelect = document.querySelector("#location");
  locationSelect.innerHTML = '<option value="">Select Location</option>';

  for (const category in locationData) {  //locationDataの中のchilling, bath, shopping
    const optgroup = document.createElement("optgroup");
    optgroup.label = category;  //labelをカテゴリーにする

    locationData[category].forEach((location) => {
      const option = document.createElement("option");
      option.value = location.address;
      option.textContent = location.name;
      optgroup.appendChild(option);
    });

    locationSelect.appendChild(optgroup);
  }
}

// エラーハンドリング。選択しなかったら選択しろ
function displayRecommendedSpots() {
  const genre = document.querySelector("#genre").value; // 選択されたジャンル
  const suggestedList = document.querySelector("#suggestedList");
  suggestedList.innerHTML = ""; // リストをクリア

  if (genre && recommendedSpots[genre]) {
    recommendedSpots[genre].forEach((spot) => {
      addSuggestedPlaceToList(spot);
    });
  } else {
    suggestedList.innerHTML = "<li>Please select a genre</li>";
  }
}

function addSuggestedPlaceToList(place) {
  const suggestedList = document.querySelector("#suggestedList");

  const listItem = document.createElement("li");
  listItem.className = "suggested-item";

  // サムネイル画像を表示
  const thumbnails = place.imgs.map((imgSrc) => `<img src="${imgSrc}" class="thumbnail" alt="${place.name}の画像">`).join("");

  listItem.innerHTML = `
    <div class="area">
      <div class="sch_box">
        ${thumbnails}
        <p class="sch_title">${place.name}</p>
        <p class="sch_tx">${place.vicinity}</p>
      </div>
    </div>
  `;

  const timeInput = document.createElement("input");
  timeInput.type = "time";
  timeInput.placeholder = "Select Time";
  listItem.appendChild(timeInput);

  const addButton = document.createElement("button");
  addButton.textContent = "Add to schedule";
  addButton.onclick = function() {
    if (timeInput.value) {
      addSuggestedPlaceToSchedule(place, timeInput.value);
      listItem.remove();
    } else {
      alert("Please select time");
    }
  };
  listItem.appendChild(addButton);

  suggestedList.appendChild(listItem);
}

function addSuggestedPlaceToSchedule(place, time) {
  const scheduleList = document.querySelector("#scheduleList");

  const marker = new google.maps.Marker({
    map: map,
    position: { lat: place.lat, lng: place.lng }
  });

  const listItem = document.createElement("li");
  listItem.className = "schedule-item";
  listItem.innerHTML = `
    <span class="time">${time}</span>
    <div class="area">
      <div class="sch_box">
        <p class="sch_title">${place.name}</p>
        <p class="sch_tx">${place.vicinity}</p>
      </div>
    </div>
  `;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.float = "right";
  deleteButton.onclick = function() {
    scheduleList.removeChild(listItem);
    marker.setMap(null);
  };
  listItem.appendChild(deleteButton);

  scheduleList.appendChild(listItem);
}

window.onload = function() {
  initMap();
  populateLocationOptions();
  displayRecommendedSpots();
};

function addSchedule() {
  // 入力フィールドの値を取得
  const timeInput = document.querySelector("#time").value;
  const titleInput = document.querySelector("#title").value;
  const contentInput = document.querySelector("#content").value;
  const locationInput = document.querySelector("#location").value;
  const scheduleList = document.querySelector("#scheduleList");

  // 入力チェック
  if (timeInput && titleInput && contentInput && locationInput) {
    // ジオコーディングして住所から緯度経度を取得
    geocoder.geocode({ address: locationInput }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        const location = results[0].geometry.location;

        // マーカーを地図に追加
        const marker = new google.maps.Marker({
          map: map,
          position: location
        });
        map.setCenter(location); // 地図をマーカー位置に移動

        // スケジュールリストに追加
        const listItem = document.createElement("li");
        listItem.className = "schedule-item";
        listItem.innerHTML = `
          <span class="time">${timeInput}</span>
          <div class="area">
            <div class="sch_box">
              <p class="sch_title">${titleInput}</p>
              <p class="sch_tx">${contentInput}</p>
              <p class="sch_tx">Place: ${locationInput} (${location.lat().toFixed(6)}, ${location.lng().toFixed(6)})</p>
            </div>
          </div>
        `;

        // 削除ボタンを追加
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.float = "right";
        deleteButton.onclick = function() {
          scheduleList.removeChild(listItem); // リストから削除
          marker.setMap(null); // マーカーを地図から削除
        };
        listItem.appendChild(deleteButton);

        scheduleList.appendChild(listItem); // スケジュールリストに項目を追加

        // 入力フィールドをリセット
        document.querySelector("#time").value = "";
        document.querySelector("#title").value = "";
        document.querySelector("#content").value = "";
        document.querySelector("#location").value = "";
      } else {
        alert("Location not found. Please try another location.");
      }
    });
  } else {
    alert("Please enter time, title, details, and location.");
  }
}
