function newElement(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
        if (inputValue === ''){
            alert ("Please write something")
        }else {
                document.getElementById("myUL").appendChild(li);
            }
            document.getElementById("myInput").value = "";
            let span = document.createElement("SPAN");
            li.appendChild(span);
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                  let div = this.parentElement;
                  div.style.display = "none";
        }
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);