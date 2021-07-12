class Sorting {
  #id
  #sorting_type
  constructor(id, sorting_type) {
    this.#id = id
    this.#sorting_type = sorting_type
  }

  sort_table() {
    element_id = this.#id
    sorting_type = this.#sorting_type
    document.addEventListener('turbolinks:load', function() {
      let control = document.getElementById(sorting_type)

      if (control) { control.addEventListener('click',sortRowsByTitle) }
    })

    function sortRowsByTitle() {
      let table = document.getElementById(element_id)
      let rows = table.querySelectorAll('tr')

      let sortedRows = []

      for ( let i = 1; i < rows.length; i++) {
        sortedRows.push(rows[i])
      }

      let arrowUp = this.querySelector('.octicon-arrow-up')
      let arrowDown = this.querySelector('.octicon-arrow-down')

      if (this.querySelector('.octicon-arrow-up').classList.contains('hide')) {
        sortedRows.sort(compareRowsAsc)
        this.querySelector('.octicon-arrow-up').classList.remove('hide')
        this.querySelector('.octicon-arrow-down').classList.add('hide')
      } else {
        sortedRows.sort(compareRowsDesc)
        this.querySelector('.octicon-arrow-up').classList.add('hide')
        this.querySelector('.octicon-arrow-down').classList.remove('hide')
      }

      let sortedTable = document.createElement('table')
      

      sortedTable.setAttribute('id', 'table')
      sortedTable.appendChild(rows[0])

      for ( let i = 0; i < sortedRows.length; i++) {
        sortedTable.appendChild(sortedRows[i])
      }

      table.parentNode.replaceChild(sortedTable, table)
    }

    function compareRowsAsc(row1, row2) {
      let title_to_compare1 = row1.querySelector('td').textContent
      let title_to_compare2 = row2.querySelector('td').textContent

      if (title_to_compare1 < title_to_compare2) {return -1}
      if (title_to_compare1 > title_to_compare2) {return 1}
      return 0
    }

    function compareRowsDesc(row1, row2) {
      let title_to_compare1 = row1.querySelector('td').textContent
      let title_to_compare2 = row2.querySelector('td').textContent

      if (title_to_compare1 < title_to_compare2) {return 1}
      if (title_to_compare1 > title_to_compare2) {return -1}
      return 0
    }
  }
}


const sorted_table = new Sorting('table', "sort-by-title")
sorted_table.sort_table()
