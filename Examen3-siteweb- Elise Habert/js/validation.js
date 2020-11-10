//*validation.js*/
//* créé par Elise Habert */
//* Le 2020-10-25 */

function validerFormulaire() {
    var x = document.forms["nomFamille"]["prenom"]["ddn"]["CodeRegional"]["telephone"]["email"]["presentation"]["newsletter"].value;
    if (x === "") {
        alert("Veuillez remplir le ou les champs avec un * ");
        return false;
    }

    return validerFormulaire;
}



