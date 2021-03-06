export class Sorting {
  constructor(id, sorting_type) {
    this.id = id
    this.sorting_type = sorting_type
  }

  sort_table() {
    const element_id = this.id
    const sorting_type = this.sorting_type
    let control = document.getElementById(sorting_type)
      
    if (control) control.addEventListener('click', 
    ()=>this.sortRows(element_id)) 
  }

  sortRows(element_id) {
    const table = document.getElementById(element_id)
    let rows = table.querySelectorAll('tr')
    let sortedRows = []

    for ( let i = 1; i < rows.length; i++) {
      sortedRows.push(rows[i])
    }

    if (table.querySelector('.octicon-arrow-up').classList.contains('hide')) {
      sortedRows.sort(this.compareRowsAsc)
      table.querySelector('.octicon-arrow-up').classList.remove('hide')
      table.querySelector('.octicon-arrow-down').classList.add('hide')
    } 
    else {
      sortedRows.sort(this.compareRowsDesc)
      table.querySelector('.octicon-arrow-up').classList.add('hide')
      table.querySelector('.octicon-arrow-down').classList.remove('hide')
    }
    this.generateNewTable(rows, table, sortedRows) 
  }

  generateNewTable(rows, table, sortedRows) {
    let sortedTable = document.createElement('table')
    sortedTable.setAttribute('id', 'table')
    sortedTable.appendChild(rows[0])

    sortedRows.forEach(sortedRow => {
      sortedTable.appendChild(sortedRow)
    })

    table.parentNode.replaceChild(sortedTable, table)
  }

  compareRowsAsc(row1, row2) {
    let title_to_compare1 = row1.querySelector('td').textContent
    let title_to_compare2 = row2.querySelector('td').textContent

    if (title_to_compare1 < title_to_compare2) {return -1}
    if (title_to_compare1 > title_to_compare2) {return 1}
    return 0
  }

  compareRowsDesc(row1, row2) {
    let title_to_compare1 = row1.querySelector('td').textContent
    let title_to_compare2 = row2.querySelector('td').textContent

    if (title_to_compare1 < title_to_compare2) {return 1}
    if (title_to_compare1 > title_to_compare2) {return -1}
    return 0
  }
}
