function set_background() {
    var paragraph = document.getElementsByTagName("p", "p")[0];
    paragraph.style.backgroundColor = "purple";
}


function getAttributes() {
    // Get the link element by its ID
    var link = document.getElementById("w3r");
  
    // Get the specified attributes
    var href = link.getAttribute("href");
    var hreflang = link.getAttribute("hreflang");
    var rel = link.getAttribute("rel");
    var target = link.getAttribute("target");
    var type = link.getAttribute("type");
  
    // Display the attribute values
    alert("href: " + href +
          "\nhreflang: " + hreflang +
          "\nrel: " + rel +
          "\ntarget: " + target +
          "\ntype: " + type);
  }


  function js_style() {
    // Get the paragraph element by its ID
    var paragraph = document.getElementById("text");
  
    // Modify the style properties
    paragraph.style.fontSize = "24px"; // Change font size
    paragraph.style.fontFamily = "Arial, sans-serif"; // Change font family
    paragraph.style.color = "blue"; // Change text color
    // You can modify other style properties here as well
  }