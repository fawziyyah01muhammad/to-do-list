function addList(){
    inputValue = document.getElementById("input").value;
    var task = document.createElement("li");
    task.innerHTML = inputValue;
    task.style.listStyle = "none";
    task.style.color = "white";
    task.style.size = "20px";

    document.getElementById('ul').appendChild(task);

    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById('ul').appendChild(task);
      }
        document.getElementById("input").value = "";
      
    var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.style.float = "right";
  span.appendChild(txt);
  task.appendChild(span);

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  if (inputValue === '') {
    span.style.display = "none";
  } else {
    document.createElement("SPAN");
  }
    document.getElementById("input").value = "";
}

    

