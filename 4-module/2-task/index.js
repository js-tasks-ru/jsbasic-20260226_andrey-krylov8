function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++){
    if (i < table.rows[i].cells.length) {
      table.rows[i].cells[i].style.backgroundColor = "red";
    }
  }
}
