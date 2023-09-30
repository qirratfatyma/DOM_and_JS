function set_background() {
    var paragraph = document.getElementsByTagName("p", "p")[0];
    paragraph.style.backgroundColor = "purple";
}


function getAttributes() {
    var link = document.getElementById("w3r");
  
    var href = link.getAttribute("href");
    var hreflang = link.getAttribute("hreflang");
    var rel = link.getAttribute("rel");
    var target = link.getAttribute("target");
    var type = link.getAttribute("type");
  
    alert("href: " + href +
          "\nhreflang: " + hreflang +
          "\nrel: " + rel +
          "\ntarget: " + target +
          "\ntype: " + type);
  }


  function js_style() {
    var paragraph = document.getElementById("text");

    paragraph.style.fontSize = "24px"; 
    paragraph.style.fontFamily = "Arial, sans-serif"; 
    paragraph.style.color = "blue"; 
  }

  function insert_Row() {
    var table = document.getElementById("sampleTable");
  
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
  
    cell1.innerHTML = "Row Cell 1";
    cell2.innerHTML = "Row Cell 2";
  }