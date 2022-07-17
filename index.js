// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var myArray = [
    {'Shed':'A', 'Cows':'30', 'Status':'Healthy', 'Production':'500'},
    {'Shed':'B', 'Cows':'32', 'Status':'Healthy','Production':'500'},
    {'Shed':'C', 'Cows':'29', 'Status':'Healthy', 'Production':'500'},
    {'Shed':'D', 'Cows':'25', 'Status':'Healthy', 'Production':'500'},
    {'Shed':'E', 'Cows':'27', 'Status':'Healthy','Production':'500'},
    {'Shed':'F', 'Cows':'24', 'Status':'Healthy','Production':'500'},
]

buildTable(myArray)



function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].Shed}</td>
                        <td>${data[i].Cows}</td>
                        <td>${data[i].Status}</td>
                        <td>${data[i].Production}</td>
                  </tr>`
        table.innerHTML += row


    }
}
