function getGRDate() {
    let daysGR = ['Κυριακή', 'Δευτέρα','Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασευή', 'Σάββατο'];
    let monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαίου','Ιουνίου', 'Ιουλίου',
     'Αυγούστου', 'Σεμπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']
    
    let cdate = new Date();

    let day = daysGR[cdate.getDay()];
    let date = cdate.getDate();
    let month = monthsGR[cdate.getMonth()];
    let year = cdate.getFullYear();
    let hours = cdate.getHours();
    let minutes = cdate.getMinutes();
    let seconds = cdate.getSeconds();

    return day + ', ' + date + ' ' + month + ' ' + year + '<br>' +
            (((hours<10) ? '0' : '') + hours) + ':' + (((minutes<10) ? '0' : '') + minutes)+ ':'
            + (((seconds<10) ? '0' : '') + seconds)
    
}


let header =document.querySelector('.header');
header.innerHTML = getGRDate();

let idnum  = 1;
function insertItem() {
    let noteName = document.getElementById('note-name');
    let noteNameText = noteName.value;

    if (noteNameText === '') {
        return;
    }

    let newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox');
    newCheckbox.setAttribute('id', 'item' + idnum);
    newCheckbox.setAttribute('onclick', 'strikeThrough(this)');

    let newlbl = document.createElement('label');
    newlbl.setAttribute('for', 'item' + idnum);
    newlbl.innerHTML = noteNameText;

    let newdiv = document.createElement('div');
    newdiv.setAttribute('class', 'item');
    newdiv.appendChild(newCheckbox);
    newdiv.appendChild(newlbl);

    let newbtn = document.createElement('button');
    newbtn.setAttribute('type', 'button');
    newbtn.setAttribute('onclick', 'deleteItem(this.parentElement)');
    newbtn.textContent = 'X';

    let newli= document.createElement('li');
    newli.appendChild(newdiv);
    newli.appendChild(newbtn);

    let ul = document.querySelector('.main > ul');
    ul.appendChild(newli);

    noteName.value = '';
    idnum++;
}

document.getElementById('note-name').addEventListener('keyup', function(event) {
    if ((event.key === 'Enter') && (document.getElementById('note-name').value != '')) {
    insertItem();
    }
})

function deleteItem(item) {
    item.remove();
}

function strikeThrough(item) {
    if (item.checked) {
        item.nextElementSibling.style.textDecoration = 'line-through';
        item.nextElementSibling.style.color = 'gray';
    } else {
        item.nextElementSibling.style.textDecoration = 'none';
        item.nextElementSibling.style.color = 'black';
    }
}