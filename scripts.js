function Total() {
    var Cantidad,
        Categoria,
        Pagar,
        Entrada,
        EEstudiante,
        ETrainee,
        EJr;

    Cantidad = document.getElementById("Cant").value;
    Categoria = document.getElementById("idCategoria").value;
    Entrada = 200
    EEstudiante = Entrada * 0.2
    ETrainee = Entrada * 0.5
    EJr = Entrada * 0.85

    if (Cantidad % 1 == 0 && !isNaN(Cantidad)){
        if (Categoria == "Estudiante"){
            Pagar = Cantidad * EEstudiante;
            document.getElementById("TotalPago").innerHTML = 'Total a pagar: ' + Pagar;
        }
        else if (Categoria == "Trainee"){
            Pagar = Cantidad * ETrainee;
            document.getElementById("TotalPago").innerHTML = 'Total a pagar: ' + Pagar;
        }
        else if (Categoria == "Junior"){
            Pagar = Cantidad * EJr;
            document.getElementById("TotalPago").innerHTML = 'Total a pagar: ' + Pagar;
        }
        else if (Categoria == "General"){
            Pagar  = Cantidad * Entrada;
            document.getElementById("TotalPago").innerHTML = 'Total a pagar: ' + Pagar;
        }
    }
    else {
        window.alert('Cantidad de entradas inválido');
    }
}


function Borrar() {
    document.getElementById('idCategoria').value = ' ';
    document.getElementById('importeTotal').innerHTML = ' ';
  }





