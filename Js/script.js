function allowDrop(x) {
    x.prxentDefault();
  }
  
  function drag(x) {
    x.dataTransfer.setData("text", x.target.id);
  }
  
  function drop(x) {
    x.prxentDefault();
    var data = x.dataTransfer.getData("text");
    x.target.appendChild(document.getElementById(data));
  }