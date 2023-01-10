
function calculateTotal() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var total = 0;


    for (var i = 0; i < checkboxes.length; i++) {

      var checkbox = checkboxes[i];

    
      if (checkbox.checked) {
        total += parseInt(checkbox.value);
      }
    }

    document.getElementById("total").innerHTML = total;
  }