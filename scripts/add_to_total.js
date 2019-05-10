var total_el;

function updateTotal(price) {
  total = document.getElementById("total").innerHTML;
  total = parseInt(total);
  total += parseInt(price);
  document.getElementById("total").innerHTML = total + ",-";
}
