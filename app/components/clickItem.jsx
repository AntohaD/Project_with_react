let selectedIds = require('../../data/selectedIds.js');

function click (item, elementHtml) {
    
    const row = document.getElementsByClassName(elementHtml);
    let id = item;
    const index = selectedIds.indexOf(id);

    if (index > -1) {
        selectedIds.splice(index, 1);
        row[id - 1].style.backgroundColor = "rgb(250, 247, 235)";
    } else {
        selectedIds.push(item);
        row[id - 1].style.backgroundColor = "rgb(230, 240, 230)";
    }
}

module.exports = click;