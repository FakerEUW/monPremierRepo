// Fonction de désactivation de l'affichage des "tooltips"
function deactivateTooltips() {

    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLength = tooltips.length;

    for (var i = 0; i < tooltipsLength; i++) {
        tooltips[i].style.display = 'none';
    }

}


// La fonction ci-dessous permet de récupérer la "tooltip" qui correspond à notre input

function getTooltip(elements) {

    while (elements = elements.nextSibling) {
        if (elements.className === 'tooltip') {
            return elements;
        }
    }

    return false;

}


// Fonctions de vérification du formulaire, elles renvoient "true" si tout est ok

var check = {}; // On met toutes nos fonctions dans un objet littéral



check['lastName'] = function(id) {

    var name = document.getElementById(id),
        tooltipStyle = getTooltip(name).style;

    if (name.value.length >= 2) {
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};
check['firstName'] = check['lastName']; // La fonction pour le prénom est la même que celle du nom

check['num'] = function(id) {
    
    var num = document.getElementById(id);
    var taille = num.value.length;
 /*   var nombre = document.myForm.fixe.value;
    var chiffres = new String(nombre);
    
    chiffres = chiffres.replace(/[0-9]/g, '');
    
    compteur = chiffres.length; */

    if (taille!=10) {
        num.className = 'incorrect';
        tooltipStyle = getTooltip(num).style;
        tooltipStyle.display = 'inline-block';
        return true;

    }

    else {
        num.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    }

};

// YEEEEHAAA  //
check['fixe'] = function(id) {
    
    var fixe = document.getElementById(id);
    var taille = fixe.value.length;
 /*   var nombre = document.myForm.fixe.value;
    var chiffres = new String(nombre);
    
    chiffres = chiffres.replace(/[0-9]/g, '');
    
    compteur = chiffres.length; */

    if (taille!=10) {
        fixe.className = 'incorrect';
        tooltipStyle = getTooltip(fixe).style;
        tooltipStyle.display = 'inline-block';
        return true;

    }

    else {
        fixe.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    }

};
//   //

check['email'] = function validateEmail(email) {
    var email = document.getElementById(id);
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result
  
    if (validateEmail(email)) {
      $email.className = 'correct';
      tooltipStyle = getTooltip(email).style;
      $result.tooltipStyle.display = 'none';
      return true;
    } 
    else {
        test.email.className = 'incorrect';
        test.tooltipStyle.display = 'inline-block';
        return false;
    }
    
};

check['adress'] = function(id) {

    var name = document.getElementById(id),
        tooltipStyle = getTooltip(name).style;

    if (name.value.length >= 10) {
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['postal'] = function(id) {
    
    var postal = document.getElementById(id);
    var taille = postal.value.length;
 /*   var nombre = document.myForm.fixe.value;
    var chiffres = new String(nombre);
    
    chiffres = chiffres.replace(/[0-9]/g, '');
    
    compteur = chiffres.length; */

    if (taille!=5) {
        postal.className = 'incorrect';
        tooltipStyle = getTooltip(postal).style;
        tooltipStyle.display = 'inline-block';
        return true;

    }

    else {
        postal.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    }

};

check['city'] = function(id) {

    var name = document.getElementById(id),
        tooltipStyle = getTooltip(name).style;

    if (name.value.length >= 2) {
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }

};

check['country'] = function() {

    var country = document.getElementById('country'),
        tooltipStyle = getTooltip(country).style;

    if (country.options[country.selectedIndex].value != 'none') {
        tooltipStyle.display = 'none';
        return true;
    } else {
        tooltipStyle.display = 'inline-block';
        return false;
    }
};




// Mise en place des événements

(function() { // Utilisation d'une IIFE pour éviter les variables globales.

    var myForm = document.getElementById('myForm'),
        inputs = document.querySelectorAll('input[type=text], input[type=password]'),
        inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
        inputs[i].addEventListener('keyup', function(e) {
            check[e.target.id](e.target.id); // "e.target" représente l'input actuellement modifié
        });
    }

    myForm.addEventListener('submit', function(e) {

        var result = true;

        for (var i in check) {
            result = check[i](i) && result;
        }

        if (result) {
            alert('Le formulaire est bien rempli.');
        }

        e.preventDefault();

    });

    myForm.addEventListener('reset', function() {

        for (var i = 0; i < inputsLength; i++) {
            inputs[i].className = '';
        }

        deactivateTooltips();

    });

})();


// Maintenant que tout est initialisé, on peut désactiver les "tooltips"

deactivateTooltips();