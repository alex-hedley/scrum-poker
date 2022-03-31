//for every card in the Deck show the card big
[...document.querySelectorAll('#Deck card-t')].forEach(cardt => {
    // cardt.addEventListener('mouseover', evt => {
    //     BigCardt.firstChild.src = cardt.firstChild.src
    //     cardt.setAttribute('data-toggled', true);
    // });
    // cardt.addEventListener('mouseout', evt => {
    //     BigCardt.firstChild.src = cardt.firstChild.src
    //     cardt.setAttribute('data-toggled', false);
    // });

    cardt.addEventListener('click', evt => {
        // BigCardt.firstChild.src = cardt.firstChild.src
        var current = cardt.getAttribute('data-toggled');
        console.log(current);
        // cardt.setAttribute('data-toggled', !current);
        cardt.toggleAttribute('data-toggled');

        var letters = cardt.getAttribute('letters');
        console.log(letters);

        var table, tr, filter;
        filter = "Alex".toUpperCase();
        table = document.getElementById("results");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    if (current == null) {
                        tr[i].style = "background-color: red";
                        tr[i].getElementsByTagName("td")[1].innerHTML = letters;
                    } else {
                        tr[i].style = "background-color: yellow";
                        tr[i].getElementsByTagName("td")[1].innerHTML = '';
                    }
                } else {
                    // tr[i].style = "background-color: yellow";
                }
            }
        }
    });
});


function hide() {
    // visibility: hidden;

    // var table = document.getElementById('results');
    var tbodyRef = document.getElementById('results').getElementsByTagName('tbody')[0];

    var rows = tbodyRef.getElementsByTagName('tr');
    for (var row=0; row < rows.length; row++) {
        var col = rows[row].getElementsByTagName('td')
        col[1].style.display='none';
    }
}

function show() {
    // var table = document.getElementById('results');
    var tbodyRef = document.getElementById('results').getElementsByTagName('tbody')[0];

    var rows = tbodyRef.getElementsByTagName('tr');
    for (var row=0; row < rows.length; row++) {
        var col = rows[row].getElementsByTagName('td')
        col[1].style.display='';
    }
}
