i18next.init({
    lng: 'it',
    resources: {
        en: {
            translation: {
                //Navbar Start
                "nav-servizi": "Services",
                "nav-chi-siamo": "About us",
                "nav-lingua":"Language",
                "nav-lingua-it": "Italian",
                "nav-lingua-en": "English",
                "nav-contatti": "Contact",
                //Nav End
                //Hero Start
                "pill-hero": "Here to help you",
                "text-hero": "GlobalService360 for your business",
                "p-hero":"Tempor rebum no at dolore lorem clita rebum rebum ipsumrebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit",
                //Hero End
            }
        },
        it: {
            translation: {
                //Navbar Start
                "nav-servizi": "Servizi",
                "nav-chi-siamo": "Chi siamo",
                "nav-lingua":"Lingua",
                "nav-lingua-it": "Italiano",
                "nav-lingua-en": "Inglese",
                "nav-contatti": "Contatti",
                //Nav End
                //Hero Start
                "pill-hero": "Qui per aiutarti",
                "text-hero": "GlobalService360 per il tuo business",
                "p-hero":"Tempor rebum no at dolore lorem clita rebum rebum ipsumrebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit",      
                //Hero End
            }
        }
    }
}, function(err, t) {
    updateContent();
});

function updateContent() {
    document.getElementById('nav-servizi').textContent = i18next.t('nav-servizi');
    document.getElementById('nav-chi-siamo').textContent = i18next.t('nav-chi-siamo');
    document.getElementById('nav-lingua').textContent = i18next.t('nav-lingua');
    document.getElementById('nav-contatti').textContent = i18next.t('nav-contatti');
    document.getElementById('pill-hero').textContent = i18next.t('pill-hero');
    document.getElementById('text-hero').textContent = i18next.t('text-hero');
    document.getElementById('p-hero').textContent = i18next.t('p-hero');
}

function changeLanguage(lng) {
    lng == "it" ? document.getElementById('current-lan').setAttribute("src", "img/it.png") :  document.getElementById('current-lan').setAttribute("src", "img/uk.png");
    i18next.changeLanguage(lng, function(err, t) {
        updateContent();
    });
}