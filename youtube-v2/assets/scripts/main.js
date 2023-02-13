/* External JavaScript */

function handleMouseover(event) {
  console.log(event);
  event.target.innerText = 'Thanks for hovering';
}

function handleMouseleave(event) {
  console.log(event);
  event.target.innerText = 'mouseover here'
}

function handleChangeBgColor() {
  const divEl = document.getElementById('welcomeDom')
  console.dir(divEl);
  divEl.style.backgroundColor = 'red';
}

function handleChangeTextColor() {
  const divEl = document.getElementById('welcomeDom');
  console.dir(divEl);
  divEl.style.color = 'white';
}

function handleChangecolorToBlack() {
  const divEl = document.getElementById('welcomeDom');
  console.dir(divEl);
  divEl.style.color = 'black';
}

function handleMakeTextBolder() {
  const divEl = document.getElementById('welcomeDom');
  console.dir(divEl);
  divEl.style.fontWeight = 'bold';
}

function handleDisplayTime() {
 const todayTime = new Date();
 document.getElementById('timeWrapper').innerText = todayTime.toLocaleTimeString();
}

function handleDisplayDate() {
  const todayDate = new Date();
  document.getElementById('DateWrapper').innerText = todayDate.toLocaleDateString();
}

function handleRandomNumber() {
  document.getElementById("randomNumber").innerHTML =
  Math.floor(Math.random() * 10);
}

function handleAddSkills(event) {
  event.preventDefault();
  var skill = document.getElementById('inputSkills');
  skills.appendChild(document.createElement("li")).innerHTML = skill.value;
}
   

function clearThis(target){
  target.value= "";
}
