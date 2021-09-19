function Convert() {
    var value = parseFloat(document.getElementById("value").value)
    const dol = 5.29
    document.getElementById("show-value").innerHTML = "R$" + " " + (value/dol).toFixed(2)
}