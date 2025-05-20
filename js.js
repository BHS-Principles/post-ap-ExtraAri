
var LIST = [
    "Druhv's natural",
    "All other things",
    "Neat"
];
var BTN = document.getElementById("myButton");

for(var i = 0 ; i < 2; i++){
    alert("Got ur data");
    var newBTN = BTN.cloneNode(true);
    document.body.append(newBTN);
}
///if(i = 2)
    ///  {
    ///   alert("Just kidding!")
    ///}