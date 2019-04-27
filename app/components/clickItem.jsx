let selectedIds = require('../../data/selectedIds.js');

function click(item) {
    
    let id = item._reactInternalFiber.key;
    let colorItem = item._reactInternalFiber.child.stateNode;
    const index = selectedIds.indexOf(id);

    if (index > -1) {
        selectedIds.splice(index, 1);
        colorItem.style.backgroundColor = "rgb(245, 243, 235)";
    } else {
        selectedIds.push(id);
        colorItem.style.backgroundColor = "rgb(220, 230, 230)";
    }

    console.log(selectedIds);
}

module.exports = click;