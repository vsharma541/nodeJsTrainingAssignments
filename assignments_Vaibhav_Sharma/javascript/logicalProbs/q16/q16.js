function createTable() {
   const rn = document.getElementById('rows-count').value;
   const cn = document.getElementById('cols-count').value;
   document.getElementById('table-title').innerText = "There you go!" 

   for (let r = 0; r < parseInt(rn, 10); r++) {
      let x = document.getElementById('myTable').insertRow(r);
      for (let c = 0; c < parseInt(cn, 10); c++) {
         let y = x.insertCell(c);
         y.innerHTML = "Row-" + r + " Column-" + c;
      }
   }
}