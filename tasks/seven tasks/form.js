
let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", e=>{
        let Name =  document.getElementById("name").value;
        let age = document.getElementById("age").value;
        alert(`Name: ${Name}\nAge: ${age}`);

});
