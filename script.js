


const makeGrid = () => {
    let gh = document.querySelector('#inputHeight').value;
    let gw = document.querySelector('#inputWidth').value;
    let table = document.querySelector('#pixelCanvas');    
    
    html = '';
    for (var i = 0; i<gh; i++) {
    html += "<tr>";
        for (var k = 0; k<gw; k++){
          html += "<td onclick = 'this.style.backgroundColor = setColor()'></td>";
          }
        html += "</tr>";
        }
          table.innerHTML = html;
            return false;
   
  }
  
  function setColor() {
  const gc = document.querySelector('#colorPicker').value;
    return gc;
  }