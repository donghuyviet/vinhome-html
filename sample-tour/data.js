/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var data = {
  "scenes": [
    {
      "id": "oriente-station",
      "name": "Tiểu khu Phong Lan",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.12678386676067,
          "pitch": -0.0076340532339251865,
          "rotation": 0,
          "target": "electricity-museum"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.00038049728702915786,
          "pitch": 0.014985751462495145,
          "title": "Tiểu khu Phong Lan",
          "text": "Tiểu khu Phong Lan Vinhomes Riverside The Harmony nổi bật mang phong cách kiến trúc Pháp, đất nước nổi tiếng với lối kiến trúc tinh tế, trang nhã, sang trọng. Kiến trúc Pháp lãng mạn vốn chú tâm đến việc tạo dựng nên các công trình định hình phong cách trang nhã sang trọng. Các căn biệt thự tại tiểu khu Phong Lan, chắc chắn sẽ mang tới cho các quý chủ nhân có gu thẩm mỹ tinh tế sự lựa chọn khác biệt và xứng tầm."
        }
      ]
    },
    {
      "id": "electricity-museum",
      "name": "Electricity Museum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3152585099587224,
          "pitch": 0.045251205931975846,
          "rotation": 5.497787143782138,
          "target": "jeronimos"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1606464893205768,
          "pitch": -0.17433292221669205,
          "title": "Tiểu khu Hướng Dương",
          "text": "Tiểu khu Hướng Dương Vinhomes Riverside The Harmony được các kiến trúc sư chú trọng tạo nên điểm nhấn nổi bật kiến trúc địa phương thuần chất Á Đông cùng tinh hoa của kiến trúc Pháp. Sự kết hợp đầy tinh tế của hai nền văn hóa này tạo nên cho các ngôi biệt thự một nét đặc trưng về kiến trúc không thể hòa lẫn."
        }
      ]
    },
    {
      "id": "jeronimos",
      "name": "Tiểu khu Nguyệt Quế",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.775981148319735,
          "pitch": 0.2661802812323746,
          "rotation": 0,
          "target": "oriente-station"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5350080558065997,
          "pitch": 0.24525106321929435,
          "title": "Tiểu khu Nguyệt Quế",
          "text": "Tiểu khu Nguyệt QuếVinhomes Riverside The Harmony là sự hội tụ tinh hoa của thiết kế cổ điển, mang cảm hứng từ ngôi đền Parthenon nổi tiếng, với sự cách tân mang hơi hướng hiện đại. Các ngôi biệt thự sang trọng và bề thế tại Vinhomes Riverside The Harmony đem tới cho các chủ nhân một không gian sống hoàn mỹ, hợp lý trong bố trí không gian sinh hoạt mang phong cách thiết kế phù hợp với sở thích riêng của gia chủ."
        }
      ]
    }
  ],
  "name": "Sample Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
