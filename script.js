
let data= [];

function formInputs(){
event.preventDefault()
    let Guestname= guestName.value;
    let checkin= stayDuration.value;
    let checkout= stayDuration2.value;
    let RoomNumber= roomnumber2.value


    let temp= {
        Guestname,
        checkin,
        checkout,
        RoomNumber,
    }
    data.push(temp)
    renderTable()

}


function renderTable(){

let tableLayout= 
`<tr>
<th>GuestName</th>
<th>checkin</th>
<th>checkout</th>
<th>RoomNumber</th>
</tr>`


for (let i=0; i<data.length; i++){
    tableLayout+= 
`<tr>
<td>${data[i].Guestname}</td>
<td>${data[i].checkin}</td>
<td>${data[i].checkout}</td>
<td>${data[i].RoomNumber2}</td>
</tr>`
}
formTable.innerHTML= tableLayout
}
 


