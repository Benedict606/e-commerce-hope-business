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
        ["assets/images/vehicules/land-cruiser-c300.png","assets/images/vehicules/land-cruiser-c700.png","assets/images/vehicules/land-cruiser-lx300.png", "assets/images/vehicules/land-cruiser-x300.png", ],
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


const params = new URLSearchParams(window.location.search);
const ref = params.get("ref");
voiture = ""
voitures.forEach(element => {
    if(element.reference == ref){
        voiture = element   
    }
});

img = voiture.images[0]
document.getElementById("photo").src = img;

function changeValue(image){
    document.getElementById("photo").src = image;
};

const imageViews = document.getElementById("imageView");

voiture.images.forEach(element => {
    const card = document.createElement("div");
    card.className = "size-25 border-2 border-gray-100";
    card.innerHTML = `
    <button onclick="changeValue('${element}')"><img  class="size-25 object-cover hover:cursor-pointer" src=${element} alt=""></button>
    `;
    
    imageViews.appendChild(card);
});


if(params.get("code") == 111){


    document.getElementById("valide").innerHTML=`
        <button onclick="openModal()" class="bg-blue-950 text-white w-full lg:w-auto px-8 py-3 lg:py-2 rounded-sm hover:bg-blue-600">
            Commander
        </button>
    `;
}else{
    document.getElementById("valide").innerHTML=`
        <button class="bg-red-400 text-white w-full lg:w-auto px-8 py-3 lg:py-2 rounded-sm hover:bg-red-600">
            Supprimer
        </button>
    `;
};

console.log(voiture)
document.getElementById("modMaq").innerText = voiture.marque + " "+ voiture.modele
document.getElementById("mar").innerText = ":  " + voiture.modele 
document.getElementById("referenc").innerText = ":  " + voiture.codeModele 
document.getElementById("annee").innerText = ":  " + voiture.annee 
document.getElementById("cylynd").innerText = ":  " + voiture.cylindree 
document.getElementById("pil").innerText = ":  " + voiture.pilotage 
document.getElementById("trans").innerText = ":  " + voiture.transmission 
document.getElementById("prix").innerText = ":  " +  Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(voiture.prix)
document.getElementById("hist").innerText = ":  " + "accident(s) : "+ voiture.historique.accidents + "; propriétaires(s) : "+ voiture.historique.proprietairesPrecedents + "; reparation(s) : "+ voiture.historique.reparations  
document.getElementById("equipe").innerText = ":  " + voiture.equipements.toString().replace(",", ", ") 
document.getElementById("locat").innerText = ":  " + voiture.localisation 
document.getElementById("dist").innerText = ":  " + voiture.kilometrage+" km" 
document.getElementById("porte").innerText = ":  " + voiture.portes 
document.getElementById("place").innerText = ":  " + voiture.places 
document.getElementById("carb").innerText = ":  " + voiture.carburant 
document.getElementById("color").innerText = ":  " + voiture.couleur 

function envoyerMail() {
    let destinataire = "exemple@email.com";
    let objet = "Sujet de l'email";
    let corps =  
    "Bonjour,\n\nVoici un message automatique.\n\nCordialement.";

    // Encodage pour éviter les erreurs avec les espaces et caractères spéciaux
    let mailto = `mailto:${destinataire}?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(corps)}`;

    // Ouvre le client mail
    window.location.href = mailto;
}

function ouvrirGmail() {
    let destinataire = "worldltdhopebusiness@gmail.com";
    
    let objet = "[HOPE BUSINESS WORLD] Commande : " + voiture.marque + " "+ voiture.modele +" de "+Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(voiture.prix);
    let corps = `Bonjour,
    \nVous avez sélectionné une voiture de marque ${voiture.marque}, modèle ${voiture.modele}, année ${voiture.annee}, avec une cylindrée de ${voiture.cylindree} et une transmission ${voiture.transmission}. Ce véhicule, de couleur ${voiture.couleur}, est équipé d’une boîte de vitesses ${voiture.pilotage}, dispose de ${voiture.places} places et ${voiture.portes} portes, et fonctionne au ${voiture.carburant}. Avec un kilométrage de ${voiture.kilometrage} km, ce véhicule est proposé au prix de ${voiture.prix} USD. \n\nEn plus des caractéristiques standards, il est doté d’équipements supplémentaires tels que ${voiture.equipements.toString().replace(",", ", ")}. Afin de finaliser votre achat, vous devez également voir le véhicule en présentiel, permettant ainsi de mieux visualiser son état et ses finitions.
    \nCette commande témoigne d’une volonté du client d’acquérir un véhicule fiable, adapté à ses attentes en matière de confort, de performance et de sécurité.
    \nVous recevrez dans peu de temps un message sur votre mail ou numéro de téléphone.\nVous pouvez révoir les images de la voiture en cliquant sur ce lien : ${window.location.href}
    \n\n➡ Votre téléphone : +243 _______  

    Nos coordonnées : 
    
    AV.P.E. Lumumba  
    Bukavu, BP. 285  
    DR Congo  
    📞 Tel: +243 997 671 960  
    📞 Tel: +243 822 633 356  

    Le Directeur 
    Albert Bisimwa Bagula  
    HOPE BUSINESS WORLD LTD

        `;

    // Encodage des éléments pour éviter les erreurs avec les caractères spéciaux
    let gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(destinataire)}&su=${encodeURIComponent(objet)}&body=${encodeURIComponent(corps)}`;

    // Ouvre Gmail dans un nouvel onglet
    window.open(gmailURL, "_blank");
}

function openWhatsapp() {
    // Numéro du destinataire (format international sans "+" ni espaces)
    let phoneNumber = "243894097071"; // Exemple pour la RDC
    // let phoneNumber = "243997671960"; // Exemple pour la RDC


    let message = `*[HOPE BUSINESS WORLD] COMMANDE VOITURE*  

🔹 *Marque* : ${voiture.marque}  
🔹 *Modèle* : ${voiture.modele}  
🔹 *Année* : ${voiture.annee}  
🔹 *Cylindrée* : ${voiture.cylindree}  
🔹 *Transmission* : ${voiture.transmission}  
🔹 *Couleur* : ${voiture.couleur}  
🔹 *Boîte de vitesses* : ${voiture.pilotage}  
🔹 *Places* : ${voiture.places}  
🔹 *Portes* : ${voiture.portes}  
🔹 *Carburant* : ${voiture.carburant}  
🔹 *Kilométrage* : ${voiture.kilometrage} km  
🔹 *Prix* : ${voiture.prix} USD  

*Équipements supplémentaires* : ${voiture.equipements.toString().replace(",", ", ")} 

Pour finaliser votre achat, une visite en présentiel est recommandée afin d’évaluer l’état du véhicule. 

Vous recevrez également un message sur votre e-mail ou votre numéro de téléphone. Vous pouvez révoir les images de la voiture en cliquant sur ce lien : 
${window.location.href}   

*Nos coordonnées* :

*Adresse* : AV. P.E. Lumumba, Bukavu, BP. 285, DR Congo  
*Tel*   : +243 997 671 960  
*Tel*   : +243 822 633 356 
*Email* : worldltdhopebusiness@gmail.com

*Le Directeur*  
Albert Bisimwa Bagula  
*HOPE BUSINESS WORLD LTD*`;

    // Encoder le message pour l'URL
    let encodedMessage = encodeURIComponent(message);

    // URL pour ouvrir WhatsApp
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, "_blank");
}

function openModal() {
    document.getElementById("orderModal").classList.remove("hidden");
}

// Fonction pour fermer le pop-up
function closeModal() {
    document.getElementById("orderModal").classList.add("hidden");
}
