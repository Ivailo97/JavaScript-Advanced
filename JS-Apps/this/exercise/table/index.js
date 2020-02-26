function solve() {

    const color = '#413f5e';

    const rows = document.querySelectorAll('.minimalistBlack tbody tr');

    for (const row of Array.from(rows)) {

        row.addEventListener('click', colorHandler);
    }

    function colorHandler() {

        if (this.style.backgroundColor === '') {
            resetBackgroundColorToAllRows();
            this.style.backgroundColor = color;
        } else {
            this.style.backgroundColor = ''
        }
    }

    function resetBackgroundColorToAllRows() {

        for (const row of Array.from(rows)) {
            row.style.backgroundColor = '';
        }
    }
}