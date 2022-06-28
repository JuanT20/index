
// Make a request for a user with a given ID
let empleados = '';
axios.get('https://act-1.jhairteheran1.repl.co/empleados')
  .then(function (response) {
    // handle success
    if (response.status==200){
      console.log(response);
      
      
       for(var i=0; i<= response.data.length-1; i++){
         //console.log(response.data[i], i)       
        empleados = empleados+  response.data[i].nombre1 + " "+  response.data[i].nombre2 + " " +response.data[i].apellido1 + " " +response.data[i].apellido2+ "<br>"
       }
    }
    
    document.getElementById("dvEmpleados").innerHTML = empleados
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
