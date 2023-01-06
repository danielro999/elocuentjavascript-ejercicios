const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

const mountains = document.getElementById("mountains")
const table = document.createElement('table')
mountains.appendChild(table)

const tr = document.createElement("tr")// row
table.appendChild(tr)
for (let index = 0; index < 3; index++) {
  const th = document.createElement("th")//cell heading
  const nombreColumnas = Object.keys(MOUNTAINS[0])[index]
  tr.appendChild(th)
  th.textContent = nombreColumnas
} 

for (let index = 0; index < MOUNTAINS.length; index++) {
  const tr = document.createElement("tr")// row
  table.appendChild(tr)  
  for (let i = 0; i < 3; i++) {
    const td = document.createElement("td")//cell regular
    const nombreColumnas = Object.keys(MOUNTAINS[index])[i]
    tr.appendChild(td)     
    td.textContent = MOUNTAINS[index][nombreColumnas]
  }
}

table.style.textAlign = "left"


function byTagName(node, tagName){
  let arr = []

  function byTagName2(node, tagName) {
    tagName = tagName.toUpperCase()
    for (let i =0; i < node.childNodes.length; i++) {
      const child = node.childNodes[i]
      const childName = child.nodeName
      if (child.nodeType == document.ELEMENT_NODE){
        
        if (childName == tagName){
          arr.push(childName)
        }
        byTagName2(child, tagName)
      }    
    }
    return arr 
  } 
  
  return byTagName2(node, tagName)
}

 console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "tr").length);
// → 3
let para = document.querySelector("p");
console.log("para", byTagName(para, "span").length);
// → 2