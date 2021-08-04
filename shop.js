const add = document.getElementsByClassName('addBtn');
const nComd = document.getElementsByClassName('nbrcmd');
const rem = document.getElementsByClassName('removeBtn');
const prix = document.getElementsByClassName('prixC1');
const casetotal = document.getElementsByClassName('tota');
const numcard = document.getElementsByClassName('card');
const facture = document.querySelector(".Facture");

for (let i = 0; i < numcard.length; i++) {
    let ind = numcard[i].getAttribute("id");
    add[ind].addEventListener('click', function () {
        nComd[ind].value = Number(nComd[ind].value) + 1;
        casetotal[ind].value = Number(prix[ind].textContent) * Number(nComd[ind].value);
        var T = 0;
        for (let j = 0; j < numcard.length; j++) {
            T += (Number(casetotal[j].value));
        };
        facture.value = T;
    });
    rem[ind].addEventListener('click', function (e) {
        if (nComd[ind].value > 0) {
            nComd[ind].value = Number(nComd[ind].value) - 1;
            casetotal[ind].value = Number(prix[ind].textContent) * Number(nComd[ind].value);
            var T = 0;
            for (let j = 0; j < numcard.length; j++) {
                T += (Number(casetotal[j].value));
            };
            facture.value = T;
        }
        else {
            e.target.closest(".card").remove();
            let r = Number(e.target.closest(".card").getAttribute("id"));
            r += 1;
            alert("la carte numero " + r + " est retirer");
            for (let o = 0; o < numcard.length; o++) {
                numcard[o].removeAttribute("id");
                numcard[o].setAttribute("id", o);

            }
        }
    });
};

