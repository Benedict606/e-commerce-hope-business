class Voiture {
    constructor(reference, codeModele, marque, modele, annee, cylindree, pilotage, transmission, couleur, places, portes, carburant, kilometrage, prix, images, equipements, historique, localisation) {
        this.reference = reference; // Numéro de référence unique
        this.codeModele = codeModele; // Code spécifique du modèle
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.cylindree = cylindree; // Cylindrée du moteur en cc
        this.pilotage = pilotage; // Automatique / Manuel
        this.transmission = transmission; // 2WD / 4WD
        this.couleur = couleur;
        this.places = places;
        this.portes = portes;
        this.carburant = carburant; // Essence / Diesel / Hybride
        this.kilometrage = kilometrage;
        this.prix = prix;
        this.images = images; // Tableau d'images
        this.equipements = equipements; // Liste des équipements
        this.historique = historique; // Détails sur l'historique
        this.localisation = localisation; // Localisation du véhicule
    }
}

const voitures = [
    new Voiture(
        "REF202401",
        "TOY-BELTE-2020",
        "Toyota",
        "Belte",
        2020,
        1500,
        "Automatique",
        "2WD",
        "Blanc",
        5,
        4,
        "Essence",
        25000,
        18000,
        ["assets/images/vehicules/belta.png"],
        ["Climatisation", "Bluetooth", "Caméra de recul"],
        { proprietairesPrecedents: 1, accidents: 0, reparations: "Aucune" },
        "Kinshasa, RDC"
    ),
    new Voiture(
        "REF202402",
        "TOY-BELITA-2019",
        "Toyota",
        "Belita",
        2019,
        1600,
        "Manuel",
        "4WD",
        "Noir",
        5,
        4,
        "Diesel",
        32000,
        19500,
        ["assets/images/vehicules/belta_2.png"],
        ["Sièges en cuir", "GPS intégré", "Régulateur de vitesse"],
        { proprietairesPrecedents: 2, accidents: 1, reparations: "Changement du pare-chocs avant" },
        "Lubumbashi, RDC"
    ),
    new Voiture(
        "REF202403",
        "TOY-COASTER-2018",
        "Toyota",
        "Coaster",
        2018,
        4200,
        "Manuel",
        "2WD",
        "Bleu",
        30,
        2,
        "Diesel",
        45000,
        30000,
        ["assets/images/vehicules/coaster.png"],
        ["Sièges 30 places", "ABS", "Caméra de surveillance"],
        { proprietairesPrecedents: 1, accidents: 0, reparations: "Aucune" },
        "Bukavu, RDC"
    ),
    new Voiture(
        "REF202404",
        "TOY-FORTUNA-2021",
        "Toyota",
        "Fortuna",
        2021,
        2800,
        "Automatique",
        "4WD",
        "Rouge",
        7,
        5,
        "Essence",
        15000,
        35000,
        ["assets/images/vehicules/fortuna_1.png", "assets/images/vehicules/fortuna_2.png"],
        ["4x4", "Écran tactile", "Toit ouvrant"],
        { proprietairesPrecedents: 0, accidents: 0, reparations: "Aucune" },
        "Goma, RDC"
    ),
    new Voiture(
        "REF202405",
        "TOY-HILUX-2017",
        "Toyota",
        "Hilux",
        2017,
        2700,
        "Manuel",
        "4WD",
        "Gris",
        5,
        4,
        "Diesel",
        60000,
        27000,
        ["assets/images/vehicules/hilux_1.png", "assets/images/vehicules/hilux_2.png"],
        ["Pick-up", "Barres de toit", "Jantes en alliage"],
        { proprietairesPrecedents: 1, accidents: 0, reparations: "Aucune" },
        "Matadi, RDC"
    ),
    new Voiture(
        "REF202406",
        "TOY-LC300-2020",
        "Toyota",
        "Land Cruiser C300",
        2020,
        4500,
        "Automatique",
        "4WD",
        "Vert",
        5,
        5,
        "Essence",
        22000,
        60000,
        ["assets/images/vehicules/land-cruiser-c300.png"],
        ["V8", "Suspension renforcée", "Toit panoramique"],
        { proprietairesPrecedents: 1, accidents: 0, reparations: "Aucune" },
        "Kisangani, RDC"
    ),
    new Voiture(
        "REF202407",
        "TOY-RAV4-2018",
        "Toyota",
        "RAV4",
        2018,
        2000,
        "Automatique",
        "2WD",
        "Blanc",
        5,
        5,
        "Hybride",
        30000,
        25000,
        ["assets/images/vehicules/rav4_1.png", "assets/images/vehicules/rav4_2.png", "assets/images/vehicules/rav4_3.png"],
        ["SUV compact", "Détection des piétons", "Caméra 360°"],
        { proprietairesPrecedents: 1, accidents: 0, reparations: "Aucune" },
        "Bunia, RDC"
    ),
    new Voiture(
        "REF202408",
        "TOY-RUSH-2020",
        "Toyota",
        "Rush",
        2020,
        1500,
        "Automatique",
        "2WD",
        "Rouge",
        5,
        5,
        "Essence",
        28000,
        21000,
        ["assets/images/vehicules/rush.png"],
        ["Économie de carburant", "Système d'assistance au freinage", "Connexion Apple CarPlay"],
        { proprietairesPrecedents: 1, accidents: 0, reparations: "Aucune" },
        "Butembo, RDC"
    )
];


const cardContainer = document.getElementById("containerc");

voitures.forEach(element => {
    const card = document.createElement("div");
    card.className = "w-70 h-80 border-black m-0 fade-in-up";
    card.innerHTML = `

<div class=" bg-gray-50  h-40 w-70">
    <a href="details.html?ref=${element.reference}&code=111"><img src=${element.images[0]} alt="Voiture belta" class="object-fill" ></a>
</div>
<div  class="p-5 " >
    <h1 class="font-bold text-2xl mb-1 hover:text-blue-600"><a href="details.html?ref=${element.reference}&code=111">${element.modele}</a></h1>
    
    <p class="text-sm font-light line-clamp-3 pb-2" >${element.marque} ${element.annee}, distante : ${element.kilometrage} km, ${element.pilotage}, ${element.portes} portes, sieges : ${element.places}, ${element.carburant}, ${element.couleur} </p>
    
    <div class="flex justify-between">
        <p class="" >Prix de vente</p>
        <h1 class="text-blue-700 font-bold text-base mb-1 "><a href="details.html?ref=${element.reference}&code=111"> $${element.prix}</a></h1>
    </div>        

 </div>

    `;
    
    cardContainer.appendChild(card);
});

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const body = document.getElementById('bod');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

body.addEventListener('click', () => {
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');  // Close the menu
    }
});