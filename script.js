let data=[];
//document is better to use if im seperating the html and js
document.getElementById("formgrab").addEventListener("submit", formInputs);

//make sure to put event in the () so the event in line 7 doesnt cross out
function formInputs(event){
    event.preventDefault() 
    let guestinput = document.getElementById("guestName")
    let guestName= guestinput.value;

//inside get id() match the html id
    let checkininput = document.getElementById("stayDuration")
    let checkin= checkininput.value;

//the input needs to match the .value
    let checkoutinput = document.getElementById("stayDuration2")
    let checkout= checkoutinput.value;

    let RoomNumberinput = document.getElementById("roomnumber2")
    let RoomNumber= RoomNumberinput.value;
    

console.log(RoomNumber +" " + RoomNumberinput + " " + guestinput)
    let temp= {
        guestName,
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
    
    
    for (let i=0; i<data.length; i++){ console.log(data[i])
    
        tableLayout+= 
    `<tr>
    <td>${data[i].guestName}</td>
    <td>${data[i].checkin}</td>
    <td>${data[i].checkout}</td>
    <td>${data[i].RoomNumber}</td>
    </tr>`
    }
    formTable.innerHTML= tableLayout
    }


   const isroomnumberDuplicated = data.some((item) => item.RoomNumber === RoomNumber);
if (isroomnumberDuplicated){
   alert("Room Number is already taken")
} else {
 schedule();
}


const ischeckinDuplicated = data.some((item) => item.checkin === checkin);
if (ischeckinDuplicated){
   alert("checkin date is already taken")
} else {
    schedule();
}


const ischeckoutDuplicated = data.some((item) => item.checkout === checkout);
if (ischeckoutDuplicated){
    alert("checkout date is already taken")
} else {
    schedule();
}

     


/* if(room is not duplicated){
schedule();
} else {
if (check in date is duplicated)
 if(checkout date is duplicated){
the guest is not able to schedule.
}else{ 
schedule();
}
}else{ 
schedule();
}
}
*/
   // const isDuplicate = array.some((item) => item.property ===
    //value);
   // if (isDuplicate) {
   //     console.log('Duplicate detected!');
  //  }

  //  array.some((item) => condition);
    //const validateGuest = guests.some((guest) => guest.name
   // == 'Andrea')
    //console.log(validateGuest) // output: false
    //const validateGuest = guests.some((guest) => guest.name
    //Objects and DOM Manipulation 2
    //== 'Bob')
    //console.log(validateGuest) // output: true





