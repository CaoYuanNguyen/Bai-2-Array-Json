var khachHang = [
  {
    name: "Minh",
    age: 18,
  },
  {
    name: "Lan",
    age: 11,
  },
  {
    name: "Tuan",
    age: 23,
  },
  {
    name: "Thao",
    age: 21,
  },
  {
    name: "Nhan",
    age: 32,
  },
  {
    name: "Tung",
    age: 21,
  },
  {
    name: "Hoang",
    age: 33,
  },
];

//Tạo ra một mảng mới sắp xếp dựa theo độ tuổi tăng dần
khachHang.sort(function (a, b) {
  return a.age - b.age;
});
document.getElementById("content").innerHTML = khachHang[1].name;

//Tạo ra một bảng gồm data đẫ được sắp xếp rồi in ra html (gợi ý: dùng forEach rồi tạo ra khung)
var txt = `
    <div>
        <table class="my-chart">
            <tr>
                <th>Ten</th>
                <th>Tuoi</th>
            </tr>
            <tr>
                <th>${khachHang[0].name}</th>
                <th>${khachHang[0].age}</th>
            </tr>
            <tr>
                <th>${khachHang[1].name}</th>
                <th>${khachHang[1].age}</th>
            </tr>
            <tr>
                <th>${khachHang[2].name}</th>
                <th>${khachHang[2].age}</th>
            </tr>
            <tr>
                <th>${khachHang[3].name}</th>
                <th>${khachHang[3].age}</th>
            </tr>
            <tr>
                <th>${khachHang[4].name}</th>
                <th>${khachHang[4].age}</th>
            </tr>
            <tr>
                <th>${khachHang[5].name}</th>
                <th>${khachHang[5].age}</th>
            </tr>
            <tr>
                <th>${khachHang[6].name}</th>
                <th>${khachHang[6].age}</th>
            </tr>
        </table>
    </div>
`;
// khachHang.forEach(function (value) {
//   txt += `
//         <div> ${value.name} </div>
//         <div>${value.age}</div>
//     `;
// });
document.getElementById("content").innerHTML = txt;

// khachHang.forEach(function(value){
//     txt += value.age + "<br>"
// })
// document.getElementById('content').innerHTML = txt;

// for(i=0;i<khachHang.length;i++){
//     document.getElementById('content').innerHTML += khachHang[i].name + khachHang[i].age + "tuoi";
// }
