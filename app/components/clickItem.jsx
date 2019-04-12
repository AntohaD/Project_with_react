let selectedIds = require('../../data/selectedIds.js');

function click(item) {
    
    let id = item._reactInternalFiber.key;
    let colorItem = item._reactInternalFiber.child.stateNode;
    const index = selectedIds.indexOf(id);

    if (index > -1) {
        selectedIds.splice(index, 1);
        colorItem.style.backgroundColor = "rgb(250, 247, 235)";
    } else {
        selectedIds.push(id);
        colorItem.style.backgroundColor = "rgb(230, 240, 230)";
    }
}

module.exports = click;