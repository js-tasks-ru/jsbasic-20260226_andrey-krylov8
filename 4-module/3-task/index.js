function highlight(table) {
  let rows = table.getElementsByTagName('tr');
  
  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName('td');

    let status = cells[3];
    if (status.hasAttribute('data-available')) {
      let isAvailable = status.getAttribute('data-available') === 'true';
      if (isAvailable) {
        rows[i].classList.add('available');
      } else {
        rows[i].classList.add('unavailable');
      }
    } else {
      rows[i].setAttribute('hidden', '');
    }

    let gender = cells[2];
    if (gender.textContent === 'm') {
      rows[i].className += ' male';
    } else if (gender.textContent === 'f') {
      rows[i].className += ' female';
    }

    let age = cells[1];
    if (parseInt(age.textContent) < 18) {
      rows[i].style.textDecoration = 'line-through';
    }
  }
}
