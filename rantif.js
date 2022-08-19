{
  "#comment": "",
  "div": {
    "@class": "gila_temax_looping atas",
    "#comment": [
      "",
      "",
      ""
    ],
    "div": [
      {
        "@class": "looping_ad_wrap",
        "div": [
          {
            "@class": "head_left",
            "div": [
              {
                "@class": "thumb",
                "#comment": "",
                "img": {
                  "@alt": "Image",
                  "@src": "MASUKKAN_URL_GAMBAR_DISINI"
                }
              },
              {
                "@class": "description",
                "#comment": [
                  "",
                  ""
                ],
                "span": "TULIS JUDUL DISINI",
                "p": "TULIS DESKRIPSI DISINI"
              }
            ]
          },
          {
            "@class": "head_right",
            "#comment": "",
            "a": {
              "@class": "link_button",
              "@href": "MASUKKAN_LINK_TUJUAN_DISINI",
              "#text": "TULIS NAMA TOMBOL DISINI"
            },
            "div": {
              "@class": "close_button",
              "svg": {
                "@viewbox": "0 0 24 24",
                "path": {
                  "@d": "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                }
              }
            }
          }
        ]
      },
      {
        "@class": "looping_ad_wrap",
        "div": [
          {
            "@class": "head_left",
            "div": [
              {
                "@class": "thumb",
                "#comment": "",
                "img": {
                  "@alt": "Image",
                  "@src": "MASUKKAN_URL_GAMBAR_DISINI"
                }
              },
              {
                "@class": "description",
                "#comment": [
                  "",
                  ""
                ],
                "span": "TULIS JUDUL DISINI",
                "p": "TULIS DESKRIPSI DISINI"
              }
            ]
          },
          {
            "@class": "head_right",
            "#comment": "",
            "a": {
              "@class": "link_button",
              "@href": "MASUKKAN_LINK_TUJUAN_DISINI",
              "#text": "TULIS NAMA TOMBOL DISINI"
            },
            "div": {
              "@class": "close_button",
              "svg": {
                "@viewbox": "0 0 24 24",
                "path": {
                  "@d": "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                }
              }
            }
          }
        ]
      },
      {
        "@class": "looping_ad_wrap",
        "div": [
          {
            "@class": "head_left",
            "div": [
              {
                "@class": "thumb",
                "#comment": "",
                "img": {
                  "@alt": "Image",
                  "@src": "MASUKKAN_URL_GAMBAR_DISINI"
                }
              },
              {
                "@class": "description",
                "#comment": [
                  "",
                  ""
                ],
                "span": "TULIS JUDUL DISINI",
                "p": "TULIS DESKRIPSI DISINI"
              }
            ]
          },
          {
            "@class": "head_right",
            "#comment": "",
            "a": {
              "@class": "link_button",
              "@href": "MASUKKAN_LINK_TUJUAN_DISINI",
              "#text": "TULIS NAMA TOMBOL DISINI"
            },
            "div": {
              "@class": "close_button",
              "svg": {
                "@viewbox": "0 0 24 24",
                "path": {
                  "@d": "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                }
              }
            }
          }
        ]
      }
    ]
  },
  "style": ".looping_ad_wrap {\r\n    position:fixed;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:space-between;\r\n    gap:20px;\r\n    background-color:#fff;\r\n    box-shadow:rgb(0 0 0 / 10%) 0px 2px 10px 0px;\r\n    border-radius:8px;\r\n    max-width:450px;\r\n    z-index:9999;\r\n    padding:15px;\r\n    transition:all .5s ease;\r\n  }\r\n  .gila_temax_looping.atas .looping_ad_wrap {\r\n    top:15px;\r\n    right:15px;\r\n    transform:translateY(-300px);\r\n  }\r\n  .gila_temax_looping.atas .looping_ad_wrap.active {\r\n    transform:translateY(0);\r\n  }\r\n  .gila_temax_looping.tengah .looping_ad_wrap {\r\n    top:50%;\r\n    right:15px;\r\n    transform:translate(500px, -50%);\r\n  }\r\n  .gila_temax_looping.tengah .looping_ad_wrap.active {\r\n    transform:translateY(-50%);\r\n  }\r\n  .gila_temax_looping.bawah .looping_ad_wrap {\r\n    bottom:15px;\r\n    right:15px;\r\n    transform:translateY(300px);\r\n  }\r\n  .gila_temax_looping.bawah .looping_ad_wrap.active {\r\n    transform:translateY(0);\r\n  }\r\n  .looping_ad_wrap .head_left {\r\n    display:flex;\r\n    align-items:center;\r\n    gap:10px;\r\n    width:100%;\r\n  }\r\n  .looping_ad_wrap .head_left .thumb img {\r\n    width:50px;\r\n    height:50px;\r\n    border-radius:50%;\r\n  }\r\n  .looping_ad_wrap .head_left .description span {\r\n    display:block;\r\n    font-size:16px;\r\n    font-weight:700;\r\n    color:#000;\r\n    margin-bottom:3px;\r\n  }\r\n  .looping_ad_wrap .head_left .description p {\r\n    font-size:14px;\r\n    color:#5f6368;\r\n    margin:0;\r\n  }\r\n  .looping_ad_wrap .head_right .link_button {\r\n    display:block;\r\n    background-color:#1a73e8;\r\n    color:#fff;\r\n    border-radius:30px;\r\n    font-size:14px;\r\n    font-weight:700;\r\n    text-transform:uppercase;\r\n    white-space:nowrap;\r\n    padding:10px 15px;\r\n  }\r\n  .looping_ad_wrap .head_right .close_button {\r\n    position:absolute;\r\n    top:5px;\r\n    right:5px;\r\n    line-height:0;\r\n    cursor:pointer;\r\n  }\r\n  .looping_ad_wrap .head_right .close_button svg {\r\n    width:15px;\r\n    height:15px;\r\n    fill:#000;\r\n  }\r\n  @media screen and (max-width:480px) {\r\n    .gila_temax_looping.atas .looping_ad_wrap, .gila_temax_looping.tengah .looping_ad_wrap, .gila_temax_looping.bawah .looping_ad_wrap {\r\n      right:0;\r\n      left:0;\r\n      margin:0 15px;\r\n    }\r\n    .looping_ad_wrap {\r\n      flex-direction:column;\r\n    }\r\n    .looping_ad_wrap .head_right {\r\n      place-self:end;\r\n    }\r\n  }",
  "script": "$(function() {\r\n  var $anchors = $('.gila_temax_looping .looping_ad_wrap');\r\n\r\n  (function loop_element(idx) {\r\n    $anchors.removeClass('active').eq(idx).addClass('active');\r\n    setTimeout(function () {\r\n      loop_element((idx + 1) % $anchors.length);\r\n    }, 3000); // Atur waktu sesuai keinginan dengan format (1000 = 1 detik)\r\n  }(0));\r\n\r\n  // Close Button\r\n  $('.close_button').click(function(){\r\n    $('.looping_ad_wrap.active').remove();\r\n  });\r\n});"
}