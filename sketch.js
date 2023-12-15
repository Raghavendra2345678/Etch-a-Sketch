function addBoxes() {
    const n = document.getElementById("in").value;
    console.log(n);
    squares(n);
}

function squares(n) {
    
    const c = document.getElementById("container");
    console.log(c.style.width);
    

    for(let i = 0; i < n; i++){
        const row = document.createElement("div");
        row.style.display="flex";
        row.style.width= "410px";
        row.style.height= 410/n+"px";
        console.log("hello");
        for (let j = 0; j < n; j++) {
            const sq = document.createElement('div');
            sq.style.backgroundColor = "red";
            sq.style.width = 410/n+"px";
            sq.style.height = 410/n+"px";
            sq.style.border = "2px solid black";
            sq.style.flex = 1;
            sq.style.flexShrink= 0;
            row.appendChild(sq);
        }
        console.log('hi');
        c.appendChild(row);
        
        
    }
}

