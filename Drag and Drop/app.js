let lists = document.getElementsByClassName("list");
let righBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(list of lists) {
    list.addEventListener("dragstart", function (e){
let selected = e.target;

righBox.addEventListener("dragover", function (e){
    e.preventDefault(); 
});
righBox.addEventListener("drop", function (e) {
    righBox.appendChild(selected);
    selected = null;
        });
        leftBox.addEventListener("dragover", function (e){
            e.preventDefault(); 
        });
        leftBox.addEventListener("drop", function (e) {
            leftBox.appendChild(selected);
            selected = null;
                });
    })
} 