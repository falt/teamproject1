document.getElementById("btn").onclick = function () {
  genid()
};

function genid() {
  var text = "";
  var alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += alfabet.charAt(Math.floor(Math.random() * alfabet.length));
  document.getElementById('show').value = text;

  return text;
}