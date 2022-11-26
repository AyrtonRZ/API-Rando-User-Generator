//Btn Buscar Dados e Criar função
document.getElementById('myBtn').addEventListener("click", getData);

function getData() {
   // console.log('teste');

   //buscar api
   fetch('https://randomuser.me/api/?results=15')
   .then(res => res.json())
   .then(data => {

        let author = data.results;
        //buscar valores dos dados
        let output = "<h2><center>Dados dos Usuarios</center></h2>";

        author.forEach(function(lists){
            output += `
            <div class="container">
                <div class="card mt-4 bg-light">
                    <ul class="list-grup">
                        <li class="list-group-item"><img src="${lists.picture.large}"></li>
                        <li class="list-group-item"><h2>Nome: ${lists.name.first}</h2></li>
                        <li class="list-group-item"><h3>Sobremone: ${lists.name.last}</h3></li>
                        <li class="list-group-item">Email: ${lists.email}</li>
                    </ul>
                </div>
            </div>`;
        });
        
        document.getElementById('output').innerHTML = output;

   });
};
