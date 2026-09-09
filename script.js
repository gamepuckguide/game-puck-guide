const records=[
 {name:"Wisconsin Badgers",meta:"2025-26 • NCAA Division I"},
 {name:"Boston College",meta:"2024-25 • NCAA Division I"},
 {name:"Minnesota Golden Gophers",meta:"2025-26 • NCAA Division I"},
 {name:"Winnipeg Jets",meta:"2024-25 • NHL"},
 {name:"St. Norbert College",meta:"2024-25 • NCAA Division III"},
 {name:"Idaho Steelheads",meta:"2024-25 • ECHL"}
];
document.getElementById("searchForm").addEventListener("submit",e=>{
 e.preventDefault();
 const q=document.getElementById("searchInput").value.trim().toLowerCase();
 const matches=q?records.filter(r=>(r.name+" "+r.meta).toLowerCase().includes(q)):records;
 const box=document.getElementById("results");
 box.innerHTML=matches.length
  ? "<div class='puck-grid'>"+matches.map(r=>`<article class="puck-card"><div class="puck">${r.name.split(" ").map(x=>x[0]).slice(0,3).join("")}</div><b>${r.name}</b><small>${r.meta}</small></article>`).join("")+"</div>"
  : "<p>No sample results found. Your real puck database will replace these records.</p>";
 document.getElementById("database").scrollIntoView({behavior:"smooth"});
});
