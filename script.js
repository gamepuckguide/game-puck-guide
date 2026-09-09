const pucks=[
["Winnipeg Jets","2025-26 • NHL"],["Wisconsin Badgers","2024-25 • NCAA"],["Grand Rapids Griffins","2024-25 • AHL"],
["Idaho Steelheads","2024-25 • ECHL"],["London Knights","2024-25 • OHL"],["Team USA","2024-25 • International"]
];
const logo="gpg-logo.png";
const grid=document.getElementById("pucks");
function render(list){grid.innerHTML=list.map(x=>`<article class="puck-card"><div class="puck-img"><img src="${logo}" alt=""></div><b>${x[0]}</b><small>${x[1]}</small></article>`).join("")}
render(pucks);
function search(v){const q=v.toLowerCase();render(q?pucks.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(q)):pucks);document.getElementById("database").scrollIntoView({behavior:"smooth"});}
document.getElementById("topSearch").addEventListener("submit",e=>{e.preventDefault();search(document.getElementById("topInput").value)});
document.getElementById("databaseSearch").addEventListener("submit",e=>{e.preventDefault();search(document.getElementById("dbInput").value)});
