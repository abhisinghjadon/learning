function openbox(idnames) {
  let id = idnames.slice(-1);
  let idhide = "q" + id;
  let offhide = "o" + id;
  let idname = document.getElementById(idnames);
  idname.style.display = "block";
  document.getElementById(idhide).style.display = "none";
  document.getElementById(offhide).style.display = "inline";
}

function closebox(idnames) {
  let id = idnames.slice(-1);
  let idhide = "q" + id;
  let offhide = "o" + id;
  let idname = document.getElementById(idnames);
  idname.style.display = "none";
  document.getElementById(idhide).style.display = "inline";
  document.getElementById(offhide).style.display = "none";
}
