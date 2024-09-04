document.getElementById('gomb').addEventListener('click', function() {
    // Ellenőrizzük a checkbox kérdés válaszát
    const autoCheckbox = document.getElementById('auto');
    const motorCheckbox = document.getElementById('motor');
    const hajoCheckbox = document.getElementById('hajo');
    const urhajoCheckbox = document.getElementById('urhajo');
    const igenCheckbox = document.getElementById('igen')
    const nemCheckbox = document.getElementById('nem')


    // Számoljuk a helyes válaszokat és az összes választ
    let helyesValaszok = 0;
    let valaszokSzama = 0;

    // Ellenőrzés, hogy a felhasználó választott-e valamit a checkboxok közül
    if (autoCheckbox.checked || motorCheckbox.checked || hajoCheckbox.checked || urhajoCheckbox.checked || igenCheckbox.checked || nemCheckbox.checked ) {
        valaszokSzama++;
        
        // Csak az "Autó" helyes válasz
        if (igenCheckbox.checked && autoCheckbox.checked && !motorCheckbox.checked && !hajoCheckbox.checked && !urhajoCheckbox.checked && !nemCheckbox.checked)  {
            helyesValaszok++;
        }
    }

    // Kiírjuk az eredményt
    let eredmenySzoveg = "";

    if (valaszokSzama > 0) {
        eredmenySzoveg = `Helyes válaszok száma: ${helyesValaszok} / 2.`;
    } else {
        eredmenySzoveg = "Nem válaszoltál a kérdésekre.";
    }

    // Eredmény megjelenítése
    document.getElementById('eredmeny').innerText = eredmenySzoveg;
});
