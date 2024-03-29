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

        // remove all from others
        var selected = document.querySelectorAll('#Deck card-t[data-toggled]');
        console.log('Toggled: ', selected.length);
        selected.forEach(c => { c.toggleAttribute('data-toggled'); });

        var current = cardt.getAttribute('data-toggled');
        console.log(current);
        // cardt.setAttribute('data-toggled', !current);
        cardt.toggleAttribute('data-toggled');
        
        var letters = cardt.getAttribute('letters');
        console.log(letters);

        var table, tr, filter;
        filter = "Alex".toUpperCase(); // Get Current user of system.
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

    var backs = document.querySelectorAll('#Deck card-t[hide]');
    backs.forEach(c => {
        c.removeAttribute('hide');
        c.style.display = 'block';
    });

    var cards = document.querySelectorAll('#Deck card-t:not([rank="0"]');
    cards.forEach(c => { c.toggleAttribute('hide'); });
}

function show() {
    // var table = document.getElementById('results');
    var tbodyRef = document.getElementById('results').getElementsByTagName('tbody')[0];

    var rows = tbodyRef.getElementsByTagName('tr');
    for (var row=0; row < rows.length; row++) {
        var col = rows[row].getElementsByTagName('td')
        col[1].style.display='';
    }

    var backs = document.querySelectorAll('#Deck card-t:not([hide]');
    backs.forEach(c => { 
        c.toggleAttribute('hide');
        c.style.display = 'none';
    });

    var hidden = document.querySelectorAll('#Deck card-t[hide]');
    hidden.forEach(c => { c.toggleAttribute('hide'); });
}

function deleteEstimates() {
    var table, tr;
    table = document.getElementById("results");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            // tr[i].style = "background-color: transparent";
            // tr[i].style = null;
            tr[i].removeAttribute("style")
            tr[i].getElementsByTagName("td")[1].innerHTML = '';
        }
    }
}

function removeAll() {
    var tbodyRef = document.getElementById('results').getElementsByTagName('tbody')[0];
    var rows = tbodyRef.getElementsByTagName('tr');
    for(var i = rows.length;i > 0;i--)
    {
        tbodyRef.deleteRow(i -1);
    }
}