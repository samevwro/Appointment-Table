let id = 0

document.getElementById('submitButton').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('contentTable');
    let row = table.insertRow(0);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('ApDate').value;
    row.insertCell(1).innerHTML = document.getElementById('ApTime').value;
    row.insertCell(2).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(3).innerHTML = document.getElementById('ApText').value;
    let actions = row.insertCell(4);
    actions.appendChild(deleteButton(id++));
    document.getElementById('ApText').value;

})
function deleteButton(id) {
    
}