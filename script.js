const IMAGE_WIDTH = 792;
const IMAGE_HEIGHT = 612;
const CELL_LEFT = 18, CELL_TOP = 60, CELL_X_STEP = 42, CELL_Y_STEP = 52, CELL_WIDTH = 40, CELL_HEIGHT = 50;
const LANTH_LEFT = 122, LANTH_TOP = 449, ACT_TOP = 501, SERIES_X_STEP = 42, SERIES_CELL_WIDTH = 40, SERIES_CELL_HEIGHT = 50;

const ELEMENTS = [
[1,"H","Hydrogen"],[2,"He","Helium"],[3,"Li","Lithium"],[4,"Be","Beryllium"],[5,"B","Boron"],[6,"C","Carbon"],[7,"N","Nitrogen"],[8,"O","Oxygen"],[9,"F","Fluorine"],[10,"Ne","Neon"],[11,"Na","Sodium"],[12,"Mg","Magnesium"],[13,"Al","Aluminium"],[14,"Si","Silicon"],[15,"P","Phosphorus"],[16,"S","Sulfur"],[17,"Cl","Chlorine"],[18,"Ar","Argon"],[19,"K","Potassium"],[20,"Ca","Calcium"],[21,"Sc","Scandium"],[22,"Ti","Titanium"],[23,"V","Vanadium"],[24,"Cr","Chromium"],[25,"Mn","Manganese"],[26,"Fe","Iron"],[27,"Co","Cobalt"],[28,"Ni","Nickel"],[29,"Cu","Copper"],[30,"Zn","Zinc"],[31,"Ga","Gallium"],[32,"Ge","Germanium"],[33,"As","Arsenic"],[34,"Se","Selenium"],[35,"Br","Bromine"],[36,"Kr","Krypton"],[37,"Rb","Rubidium"],[38,"Sr","Strontium"],[39,"Y","Yttrium"],[40,"Zr","Zirconium"],[41,"Nb","Niobium"],[42,"Mo","Molybdenum"],[43,"Tc","Technetium"],[44,"Ru","Ruthenium"],[45,"Rh","Rhodium"],[46,"Pd","Palladium"],[47,"Ag","Silver"],[48,"Cd","Cadmium"],[49,"In","Indium"],[50,"Sn","Tin"],[51,"Sb","Antimony"],[52,"Te","Tellurium"],[53,"I","Iodine"],[54,"Xe","Xenon"],[55,"Cs","Caesium"],[56,"Ba","Barium"],[57,"La","Lanthanum"],[58,"Ce","Cerium"],[59,"Pr","Praseodymium"],[60,"Nd","Neodymium"],[61,"Pm","Promethium"],[62,"Sm","Samarium"],[63,"Eu","Europium"],[64,"Gd","Gadolinium"],[65,"Tb","Terbium"],[66,"Dy","Dysprosium"],[67,"Ho","Holmium"],[68,"Er","Erbium"],[69,"Tm","Thulium"],[70,"Yb","Ytterbium"],[71,"Lu","Lutetium"],[72,"Hf","Hafnium"],[73,"Ta","Tantalum"],[74,"W","Tungsten"],[75,"Re","Rhenium"],[76,"Os","Osmium"],[77,"Ir","Iridium"],[78,"Pt","Platinum"],[79,"Au","Gold"],[80,"Hg","Mercury"],[81,"Tl","Thallium"],[82,"Pb","Lead"],[83,"Bi","Bismuth"],[84,"Po","Polonium"],[85,"At","Astatine"],[86,"Rn","Radon"],[87,"Fr","Francium"],[88,"Ra","Radium"],[89,"Ac","Actinium"],[90,"Th","Thorium"],[91,"Pa","Protactinium"],[92,"U","Uranium"],[93,"Np","Neptunium"],[94,"Pu","Plutonium"],[95,"Am","Americium"],[96,"Cm","Curium"],[97,"Bk","Berkelium"],[98,"Cf","Californium"],[99,"Es","Einsteinium"],[100,"Fm","Fermium"],[101,"Md","Mendelevium"],[102,"No","Nobelium"],[103,"Lr","Lawrencium"],[104,"Rf","Rutherfordium"],[105,"Db","Dubnium"],[106,"Sg","Seaborgium"],[107,"Bh","Bohrium"],[108,"Hs","Hassium"],[109,"Mt","Meitnerium"],[110,"Ds","Darmstadtium"],[111,"Rg","Roentgenium"],[112,"Cn","Copernicium"],[113,"Nh","Nihonium"],[114,"Fl","Flerovium"],[115,"Mc","Moscovium"],[116,"Lv","Livermorium"],[117,"Ts","Tennessine"],[118,"Og","Oganesson"]
];

const POSITIONS = {1:["main",1,1],2:["main",1,18],3:["main",2,1],4:["main",2,2],5:["main",2,13],6:["main",2,14],7:["main",2,15],8:["main",2,16],9:["main",2,17],10:["main",2,18],11:["main",3,1],12:["main",3,2],13:["main",3,13],14:["main",3,14],15:["main",3,15],16:["main",3,16],17:["main",3,17],18:["main",3,18],19:["main",4,1],20:["main",4,2],21:["main",4,3],22:["main",4,4],23:["main",4,5],24:["main",4,6],25:["main",4,7],26:["main",4,8],27:["main",4,9],28:["main",4,10],29:["main",4,11],30:["main",4,12],31:["main",4,13],32:["main",4,14],33:["main",4,15],34:["main",4,16],35:["main",4,17],36:["main",4,18],37:["main",5,1],38:["main",5,2],39:["main",5,3],40:["main",5,4],41:["main",5,5],42:["main",5,6],43:["main",5,7],44:["main",5,8],45:["main",5,9],46:["main",5,10],47:["main",5,11],48:["main",5,12],49:["main",5,13],50:["main",5,14],51:["main",5,15],52:["main",5,16],53:["main",5,17],54:["main",5,18],55:["main",6,1],56:["main",6,2],57:["lanth",1,1],58:["lanth",1,2],59:["lanth",1,3],60:["lanth",1,4],61:["lanth",1,5],62:["lanth",1,6],63:["lanth",1,7],64:["lanth",1,8],65:["lanth",1,9],66:["lanth",1,10],67:["lanth",1,11],68:["lanth",1,12],69:["lanth",1,13],70:["lanth",1,14],71:["lanth",1,15],72:["main",6,4],73:["main",6,5],74:["main",6,6],75:["main",6,7],76:["main",6,8],77:["main",6,9],78:["main",6,10],79:["main",6,11],80:["main",6,12],81:["main",6,13],82:["main",6,14],83:["main",6,15],84:["main",6,16],85:["main",6,17],86:["main",6,18],87:["main",7,1],88:["main",7,2],89:["act",1,1],90:["act",1,2],91:["act",1,3],92:["act",1,4],93:["act",1,5],94:["act",1,6],95:["act",1,7],96:["act",1,8],97:["act",1,9],98:["act",1,10],99:["act",1,11],100:["act",1,12],101:["act",1,13],102:["act",1,14],103:["act",1,15],104:["main",7,4],105:["main",7,5],106:["main",7,6],107:["main",7,7],108:["main",7,8],109:["main",7,9],110:["main",7,10],111:["main",7,11],112:["main",7,12],113:["main",7,13],114:["main",7,14],115:["main",7,15],116:["main",7,16],117:["main",7,17],118:["main",7,18]};

const symbols = Object.fromEntries(ELEMENTS.map(e => [e[0], e[1]]));
const bounds = {};
for (const [an, [section, row, col]] of Object.entries(POSITIONS)) {
  let x1, y1, x2, y2;
  if (section === "main") {
    x1 = CELL_LEFT + (col - 1) * CELL_X_STEP; y1 = CELL_TOP + (row - 1) * CELL_Y_STEP;
    x2 = x1 + CELL_WIDTH; y2 = y1 + CELL_HEIGHT;
  } else {
    x1 = LANTH_LEFT + (col - 1) * SERIES_X_STEP; y1 = section === "lanth" ? LANTH_TOP : ACT_TOP;
    x2 = x1 + SERIES_CELL_WIDTH; y2 = y1 + SERIES_CELL_HEIGHT;
  }
  bounds[an] = [x1,y1,x2,y2];
}

const OXIDE_ROUNDS = [
  {name:"basiske oksider", prompt:"Kor i periodesystemet finn vi grunnstoff som typisk dannar basiske oksider?", targets:new Set([3,11,19,37,55,87,12,20,38,56,88]), color:"#facc15"},
  {name:"amfotære oksider", prompt:"Kva grunnstoff dannar ofte amfotære oksider? Klikk på dei.", targets:new Set([4,13,30,31,32,49,50,51,82]), color:"#22c55e"},
  {name:"sure oksider", prompt:"Kva grunnstoff dannar typisk sure oksider? Klikk på dei.", targets:new Set([5,6,7,14,15,16,17,33,34,35,52,53]), color:"#3b82f6"}
];

const HSAB_ROUNDS = [
  {name:"harde syrer", prompt:"Kva grunnstoff dannar ofte harde syrer?", question:"Kva er eigenskapane til ei hard syre?", answer:"Liten ion, høg positiv ladning", keys:["liten","hog","positiv"], targets:new Set([3,4,11,12,13,19,20,21,22,24,26,37,38,39,40,55,56,57,58,64,71,72,88,90,92]), color:"#dc2626"},
  {name:"harde baser", prompt:"Kva grunnstoff er typiske harde baser?", question:"Kva er eigenskapane til ein hard base?", answer:"Liten ion, høg negativ ladning", keys:["liten","hog","negativ"], targets:new Set([8,9,17,7]), color:"#1e3a8a"},
  {name:"mjuke syrer", prompt:"Kva grunnstoff dannar ofte mjuke syrer?", question:"Kva er eigenskapane til ei mjuk syre?", answer:"Stort ion, låg positiv ladning", keys:["stort","lag","positiv"], targets:new Set([29,30,46,47,48,78,79,80,81,82]), color:"#f9a8d4"},
  {name:"mjuke baser", prompt:"Kva grunnstoff er typiske mjuke baser?", question:"Kva er eigenskapane til ein mjuk base?", answer:"Stort ion, låg negativ ladning", keys:["stort","lag","negativ"], targets:new Set([16,34,52,15,33,51,53]), color:"#14b8a6"}
];

const REAGENTS = [
  {name:"LiAlH4", display:"LiAlH₄\nLitiumaluminiumhydrid", img:"lialh4.png"},
  {name:"DIBAL-H", display:"DIBAL-H\nDiisobutylaluminiumhydrid", img:"Dibalh.png"},
  {name:"NaBH4", display:"NaBH₄\nNatriumborhydrid", img:"nabh4.png"},
  {name:"PCC", display:"PCC\nPyridinium chlorochromate", img:"pcc.png"},
  {name:"Kaliumpermanganat", display:"KMnO₄\nKaliumpermanganat", img:"kmno4.png"},
  {name:"Zinc amalgam", display:"Zn(Hg), HCl\nZinc amalgam", img:"ZnHgHCl.png"}
];

const TEXT_TASKS = [
  ["primær alkohol → karboksylsyre",["Kaliumpermanganat"]],
  ["primær alkohol → aldehyd → karboksylsyre",["Kaliumpermanganat"]],
  ["primær alkohol → aldehyd",["PCC"]],
  ["sekundær alkohol → keton",["Kaliumpermanganat","PCC"]],
  ["Aldehyd → primær alkohol",["NaBH4","LiAlH4"]],
  ["Keton → sekundær alkohol",["NaBH4","LiAlH4"]],
  ["aldehyd/keton → alkohol",["NaBH4","LiAlH4"]],
  ["Karboksylsyre → primær alkohol",["LiAlH4"]],
  ["Ester → to alkoholar",["LiAlH4"]],
  ["Ester → aldehyd",["DIBAL-H"]],
  ["Nitril → aldehyd",["DIBAL-H"]],
  ["Aldehyd/keton → alkan",["Zinc amalgam"]]
];
const FORMULA_TASKS = [
  ["R-CH₂OH → R-COOH",["Kaliumpermanganat"]],
  ["R-CH₂OH → R-CHO",["PCC"]],
  ["R-CH(OH)-R' → R-CO-R'",["Kaliumpermanganat","PCC"]],
  ["R-CHO → R-CH₂OH",["NaBH4","LiAlH4"]],
  ["R-COOH → R-CH₂OH",["LiAlH4"]],
  ["R-COOR' → R-CHO",["DIBAL-H"]],
  ["R-CN → R-CHO",["DIBAL-H"]],
  ["R-CHO → R-CH₃",["Zinc amalgam"]]
];

const el = id => document.getElementById(id);
let state = {};

function show(section) {
  ["menu","wordleMenu","organicMenu","game","stats"].forEach(id => el(id).classList.add("hidden"));
  el(section).classList.remove("hidden");
}
document.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => {
  const m = b.dataset.mode;
  if (m === "wordle-menu") show("wordleMenu");
  else if (m === "organic-menu") show("organicMenu");
  else if (m === "oxides") startOxides();
  else if (m === "hsab") startHSAB();
  else show("menu");
});
el("backToMenu").onclick = () => show("menu");
document.querySelectorAll("[data-start-wordle]").forEach(b => b.onclick = () => startWordle(b.dataset.startWordle));
document.querySelectorAll("[data-start-organic]").forEach(b => b.onclick = () => startOrganic(b.dataset.startOrganic));

function svg(tag, attrs) {
  const n = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([k,v]) => n.setAttribute(k,v));
  return n;
}
function clearOverlay() { el("overlay").innerHTML = ""; }
function center(an) { const [x1,y1,x2,y2] = bounds[an]; return [(x1+x2)/2,(y1+y2)/2]; }
function drawSymbol(an, color="#111827") {
  const [cx,cy] = center(an);
  const t = svg("text", {x:cx, y:cy, class:"symbol", fill:color});
  t.textContent = symbols[an];
  el("overlay").appendChild(t);
}
function fillTable() { for (const [an] of ELEMENTS) drawSymbol(an); }
function mark(an, color) {
  const [x1,y1,x2,y2] = bounds[an];
  el("overlay").appendChild(svg("rect", {x:x1+1,y:y1+1,width:x2-x1-2,height:y2-y1-2,fill:color,class:"mark"}));
  drawSymbol(an);
}
function hit(ev) {
  const rect = el("overlay").getBoundingClientRect();
  const x = (ev.clientX - rect.left) * IMAGE_WIDTH / rect.width;
  const y = (ev.clientY - rect.top) * IMAGE_HEIGHT / rect.height;
  for (const [an,[x1,y1,x2,y2]] of Object.entries(bounds)) {
    if (x >= x1-6 && x <= x2+6 && y >= y1-6 && y <= y2+6) return Number(an);
  }
  return null;
}
function ordinal(n){ return (n%100>=10&&n%100<=20)?"th":({1:"st",2:"nd",3:"rd"}[n%10]||"th"); }
function shuffle(a){ return a.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]); }

function startWordle(difficulty) {
  show("game"); el("tableArea").classList.remove("hidden"); el("organicArea").classList.add("hidden"); el("answerArea").classList.remove("hidden");
  state = {mode:"wordle", difficulty, index:0, typed:"", correct:0, lives:difficulty==="hard"?3:null, start:Date.now(), last:() => startWordle(difficulty)};
  makeLetters(); loadWordle();
}
function makeLetters() {
  el("letters").innerHTML = "";
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(ch => {
    const b = document.createElement("button"); b.textContent = ch; b.onclick = () => wordleKey(ch); el("letters").appendChild(b);
  });
}
document.querySelectorAll("[data-key]").forEach(b => b.onclick = () => wordleKey(b.dataset.key));
document.addEventListener("keydown", e => {
  if (state.mode !== "wordle") return;
  if (/^[a-z]$/i.test(e.key)) wordleKey(e.key.toUpperCase());
  if (["Backspace","Enter"].includes(e.key)) wordleKey(e.key);
});
function loadWordle() {
  clearOverlay(); fillTable();
  if (state.index >= ELEMENTS.length) return finish("Periodesystem Wordle ferdig", `Riktige: ${state.correct}/${ELEMENTS.length}`);
  const [an] = ELEMENTS[state.index];
  const [x1,y1,x2,y2] = bounds[an];
  el("overlay").appendChild(svg("rect",{x:x1+1,y:y1+1,width:x2-x1-2,height:y2-y1-2,class:"highlight"}));
  el("question").textContent = `Kva er symbolet til det ${an}. grunnstoffet?`;
  el("result").textContent = state.difficulty==="hard" ? `Hard mode: ${state.lives} liv igjen.` : "Easy mode: uendeleg mange forsøk.";
  state.typed = ""; el("typed").textContent = "__";
}
function wordleKey(key) {
  if (key === "Skip") { state.index++; loadWordle(); return; }
  if (key === "Backspace") state.typed = state.typed.slice(0,-1);
  else if (key === "Enter") checkWordle();
  else if (state.typed.length < 2) { state.typed += key; const correct = ELEMENTS[state.index][1].toUpperCase(); if (!correct.startsWith(state.typed)) wrongWordle(); else if (state.typed === correct) checkWordle(); }
  el("typed").textContent = state.typed || "__";
}
function checkWordle() {
  const correct = ELEMENTS[state.index][1].toUpperCase();
  if (state.typed === correct) { state.correct++; state.index++; loadWordle(); }
  else wrongWordle();
}
function wrongWordle() {
  state.typed = ""; el("typed").textContent = "__";
  if (state.difficulty === "hard") {
    state.lives--; if (state.lives <= 0) return finish("Game over", `Riktige: ${state.correct}/${ELEMENTS.length}`);
    el("result").textContent = `Feil. Hard mode: ${state.lives} liv igjen.`;
  }
}

function startOxides() {
  show("game"); el("tableArea").classList.remove("hidden"); el("organicArea").classList.add("hidden"); el("answerArea").classList.add("hidden");
  state = {mode:"oxides", round:0, selected:new Set(), clicked:new Set(), correct:0, wrong:0, start:Date.now(), last:startOxides};
  loadOxide();
}
function loadOxide() {
  clearOverlay(); fillTable(); state.selected = new Set(); state.clicked = new Set();
  if (state.round >= OXIDE_ROUNDS.length) return finish("Oksidspel ferdig", `Riktige: ${state.correct}. Feilklikk: ${state.wrong}`);
  const r = OXIDE_ROUNDS[state.round];
  el("question").textContent = r.prompt; el("result").textContent = "Trykk eller dra over grunnstoffa.";
}
el("overlay").addEventListener("pointerdown", e => { if (state.mode==="oxides"||state.mode==="hsab") handleTablePoint(e); });
el("overlay").addEventListener("pointermove", e => { if (e.buttons && (state.mode==="oxides"||state.mode==="hsab")) handleTablePoint(e); });
function handleTablePoint(e) {
  const an = hit(e); if (!an) return;
  if (state.mode === "oxides") {
    const r = OXIDE_ROUNDS[state.round]; if (state.clicked.has(an)) return; state.clicked.add(an);
    if (r.targets.has(an)) { mark(an,r.color); state.selected.add(an); state.correct++; }
    else { mark(an,"#ef4444"); state.wrong++; }
    const rem = r.targets.size - state.selected.size;
    el("result").textContent = rem ? `${rem} igjen i runden: ${r.name}.` : "Riktig! Går vidare ...";
    if (!rem) setTimeout(()=>{state.round++; loadOxide();},700);
  } else handleHSABClick(an);
}

function normalize(s){ return s.toLowerCase().replaceAll("ø","o").replaceAll("å","a").replaceAll("æ","ae").replaceAll("høg","hog").replaceAll("høy","hog").replaceAll("hoy","hog").replaceAll("låg","lag").replaceAll("lav","lag").replaceAll("små","liten").replaceAll("sma","liten").replaceAll("stor","stort").replaceAll("store","stort"); }
function startHSAB() {
  show("game"); el("tableArea").classList.remove("hidden"); el("organicArea").classList.add("hidden"); el("answerArea").classList.add("hidden");
  state = {mode:"hsab", round:0, selected:new Set(), clicked:new Set(), correct:0, wrong:0, waiting:true, start:Date.now(), last:startHSAB};
  loadHSAB();
}
function loadHSAB() {
  clearOverlay(); fillTable(); state.selected = new Set(); state.clicked = new Set();
  if (state.round >= HSAB_ROUNDS.length) return finish("HSAB-spel ferdig", `Riktige: ${state.correct}. Feilklikk: ${state.wrong}`);
  const r = HSAB_ROUNDS[state.round];
  let ans;
  do {
    ans = prompt(`${r.question}\n\nSkriv kort svar:`) || "";
    if (!r.keys.every(k => normalize(ans).includes(k))) alert("Ikkje heilt. Fasit: " + r.answer);
    else break;
  } while (true);
  el("question").textContent = r.prompt; el("result").textContent = `${r.targets.size} igjen i runden: ${r.name}.`;
}
function handleHSABClick(an) {
  const r = HSAB_ROUNDS[state.round]; if (state.clicked.has(an)) return; state.clicked.add(an);
  if (r.targets.has(an)) { mark(an,r.color); state.selected.add(an); state.correct++; }
  else { mark(an,"#a855f7"); state.wrong++; }
  const rem = r.targets.size - state.selected.size;
  el("result").textContent = rem ? `${rem} igjen i runden: ${r.name}.` : "Riktig! Går vidare ...";
  if (!rem) setTimeout(()=>{state.round++; loadHSAB();},700);
}

function startOrganic(difficulty) {
  show("game"); el("tableArea").classList.add("hidden"); el("organicArea").classList.remove("hidden"); el("answerArea").classList.add("hidden");
  const tasks = (difficulty==="hard" ? TEXT_TASKS.concat(FORMULA_TASKS) : TEXT_TASKS).map(([prompt,targets]) => ({prompt, targets:new Set(targets)}));
  state = {mode:"organic", tasks:shuffle(tasks), i:0, selected:new Set(), correct:0, wrong:0, start:Date.now(), last:()=>startOrganic(difficulty)};
  loadOrganic();
}
function loadOrganic() {
  if (state.i >= state.tasks.length) return finish("Organisk redoks ferdig", `Riktige: ${state.correct}/${state.tasks.length}. Feiltrykk: ${state.wrong}`);
  state.selected = new Set(); const task = state.tasks[state.i];
  el("question").textContent = "Kva stoff passar?"; el("result").textContent = task.prompt + (task.targets.size > 1 ? `\nVel ${task.targets.size} stoff.` : "");
  el("organicArea").innerHTML = `<h2>Vel riktig oksidasjons- eller reduksjonsmiddel</h2><div class="card-grid"></div>`;
  const grid = el("organicArea").querySelector(".card-grid");
  REAGENTS.forEach(r => {
    const card = document.createElement("button");
    card.className = "reagent-card"; card.innerHTML = `<img src="${r.img}" alt=""><strong>${r.display.replace("\n","<br>")}</strong>`;
    card.onclick = () => {
      if (task.targets.has(r.name)) {
        if (state.selected.has(r.name)) return;
        state.selected.add(r.name); card.classList.add("correct");
        const rem = task.targets.size - state.selected.size;
        if (!rem) { state.correct++; state.i++; setTimeout(loadOrganic,650); }
        else el("question").textContent = `Riktig. ${rem} igjen.`;
      } else { state.wrong++; card.classList.add("wrong"); el("question").textContent = "Feil. Prøv igjen."; }
    };
    grid.appendChild(card);
  });
}
function finish(title, text) {
  const sec = Math.round((Date.now() - (state.start||Date.now()))/1000);
  state.mode = null;
  show("stats"); el("statsTitle").textContent = title; el("statsText").textContent = `${text}\nTid: ${Math.floor(sec/60)} min ${sec%60} s`;
}
el("playAgain").onclick = () => state.last ? state.last() : show("menu");
show("menu");
