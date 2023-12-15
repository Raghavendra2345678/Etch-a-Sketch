function addBoxes() {
    const n = document.getElementById("in").value;
    // console.log(n);
    squares(n);
}

//function to generate matrix of small divs(squares)
function squares(n) {
    
    const c = document.getElementById("container");
    console.log(c.style.width);
    c.innerHTML="";
    for(let i = 0; i < n; i++){
        const row = document.createElement("div");
        row.style.display="flex";
        row.style.width= "460px";
        row.style.height= 460/n+"px";
        //console.log("hello");
        for (let j = 0; j < n; j++) {
            const sq = document.createElement('div');
            sq.id = "sq";
            sq.style.width = 460/n+"px";
            sq.style.height = 460/n+"px";
            sq.style.flex = 1;
            sq.style.flexShrink= 0;
            sq.onclick="sq.style.background-color: grey;";
            row.appendChild(sq);
        }
        //console.log('hi');
        c.appendChild(row);
          
    }
}

function reset_grid(){

    const c = document.getElementById("container");
    const n = document.getElementById("in").value;
    c.innerHTML = "";
    squares(n);
}
