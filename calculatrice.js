
// Fonction pour effacer toutes les saisies

function forClear() {
    document.getElementById("first").innerHTML = '';
    document.getElementById("operateur").innerHTML = '';
    document.getElementById("second").innerHTML = '';
}

// Fonction pour afficher les nombres + condition avec l'opérateur pour stocker le nombre en 1er ou 2eme

function afficherOne(nombre) {
    
    if ( document.getElementById("operateur").innerHTML == "" ) {
        document.getElementById("first").innerHTML += nombre;
    }
    else  {
        document.getElementById("second").innerHTML += nombre;
    }
    
}

// fonction pour l'opération

function operateur(operateurs) {
    document.getElementById("operateur").innerHTML += operateurs
}



// Fonction avec un boolean pour faire le calcul et l'afficher

function resultat(){
    var a = document.getElementById("first").innerHTML
    var b = document.getElementById("second").innerHTML
    var result;

    switch(true){
        case document.getElementById("operateur").innerHTML == '+':

            result = (+a) + (+b);

        break;

        case document.getElementById("operateur").innerHTML == '-':

            result = (+a) - (+b);

        break;

        case document.getElementById("operateur").innerHTML == '*':

            result = (+a) * (+b);

        break;

        case document.getElementById("operateur").innerHTML == '/':

            result = (+a) / (+b);

        break;
    }
    document.getElementById("first").innerHTML = result;
    document.getElementById("second").innerHTML = '';
    document.getElementById("operateur").innerHTML= '';
}

// Fonction pour effacer la derniere saisie entiere 

function clearC(){
    if ( document.getElementById("second").innerHTML !='' ) {         // != inverse : dans ce cas si ce n'est pas egale à vide 
        document.getElementById("second").innerHTML = '';
    }
    else if ( document.getElementById("operateur").innerHTML != ''){
        document.getElementById("operateur").innerHTML = '';

    }
    else if ( document.getElementById("first").innerHTML != ''){
        document.getElementById("first").innerHTML = '';
    }
}

// Fonction pour effacer le dernier element saisie

function effacerDernier(){

        if ( document.getElementById("second").innerHTML !='' ) {          
            document.getElementById("second").innerHTML = document.getElementById("second").innerHTML.slice(0, -1);
        }
        else if ( document.getElementById("operateur").innerHTML != ''){
            document.getElementById("operateur").innerHTML = document.getElementById("operateur").innerHTML.slice(0, -1);
    
        }
        else if ( document.getElementById("first").innerHTML != ''){
            document.getElementById("first").innerHTML = document.getElementById("first").innerHTML.slice(0, -1);
        }
}

// Fonction pour transformer un nombre negatif en positif et inversement

function positifNegatif(){
    if ( document.getElementById("second").innerHTML !='' ) {          
        document.getElementById("second").innerHTML *= '-1';
    }
    else  {          
        document.getElementById("first").innerHTML *= '-1';
    }

}


// Fonction pour les nombres a virgules

function gestionVirgule()   {

    var virgule = false;
    if (document.getElementById("operateur").innerHTML == ''){
        for (i=0;i<=document.getElementById("first").innerHTML.length;i++){
            if (document.getElementById("first").innerHTML[i] == ','){
                virgule=true;
            }
        }
        if (virgule==false) {
            document.getElementById("first").innerHTML += '.';
        }
    }else{
        for (i=0;i<=document.getElementById("second").innerHTML.length;i++){
            if (document.getElementById("second").innerHTML[i] == ','){
                virgule=true;
            }
        }
        if (virgule==false) {
            document.getElementById("second").innerHTML += '.';
        }
    }
}   







    


    






