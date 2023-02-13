
// Pincode Task
function handleSavePincode() {
  var inputData = document.getElementById("textField").value;
  document.getElementById("pincode").innerText = inputData;
  localStorage.setItem('pincode', inputData);
}

function handleDeletePincode() {
  const pincodeValue = document.getElementById('pincode').innerHTML;
  document.getElementById("pincode").remove(pincodeValue);
  localStorage.removeItem('pincode', pincodeValue);
}

// Location access Task
function handleLocateMe() {
  // Firing the permission screen
  navigator.geolocation.getCurrentPosition(locationAccessGranted, locationAccessDenied);
}

function locationAccessGranted(position) {
  console.log('inside locationAccessGranted');
  console.log('position');
  document.getElementById('latitude').innerText = position.coords.latitude;
  document.getElementById('longitude').innerText = position.coords.longitude;
}

function locationAccessDenied() {
  console.log('inside locationAccessDenied')
}

// Drag Drop Scripts
function handleDragStart(event) {
  console.log('Started Dragging');
  console.log(event);
  event.dataTransfer.setData('draggedBox', event.target.id);
}

function handleDragOver(event) {
  console.log('Inside handleDragOver');
  // lets allow dropping by stopping the default nature of this event
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  console.log(event.dataTransfer.getData('draggedBox'));
  // Fetching the Id of element from data transfer
  const draggedElId = event.dataTransfer.getData('draggedBox');

  // Appending the element inside droppable box
  document.getElementById('dropableBox').append(document.getElementById(draggedElId)) 
}
