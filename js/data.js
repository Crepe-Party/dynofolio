var mainData = {
    me:{
        firstName: "Florian",
        lastName: "Bergmann",
        birthDate: new Date("1993-07-08").getTime(),
        title: "Développeur",
        contact:[
            {adress: "Rue du Jura 13, 1450 Ste-Croix"},
            {phone: "079 961 11 67"},
            {mail: "florian.bergmann@cpnv.ch"}
        ],
        about: "Je souhaite effectuer un stage dans le but de valider ma formation",
        others:[
            "Détenteur d’un permis de voiture catégorie B",
            "Passe-temps : La pâtisserie, les livres de SF / Fantastique, la culture japonaise et les jeux vidéos de stratégies",
        ]
    },
    jobs:[
        {
            name: "Technicien Informatique développement d’applications",
            location: "CPNV",
            startDate: new Date("2019-08-01").getTime(),
            endDate: Date.now(),
            description: "Formation ES",
            tasks:[
                "Développement d’une application web de gestion de déplacement en Laravel pour le Paléo",
                "Création d’une application de gestion de notes en NodeJs, VueJs et NoSql (MongoDB) en équipe",
                "Apprentissage du Ruby avec le site exercism.io de manière autonome"
            ],
            skillsDeveloped:[
                "Programation Orienté Objet",
                "Java",
                "Dev mobile cross-plateforme"
            ]
        },
        {
            name: "CFC Informaticien",
            location: "CPNV",
            startDate: new Date("2015-08-01").getTime(),
            endDate: new Date("2019-07-01").getTime(),
            description: "Formation CFC",
            tasks:[
                "Développement de site web e-Commerce en modèle MVC avec PHP et requêtes SQL",
                "Développement d’application simple en C# en groupe",
                "Mise en place d’infrastructures réseaux virtuels Linux et Windows"
            ],
            skillsDeveloped:[
                "Support IT",
                "Programmation WEB",
                "Montage serveur Windows"
            ]
        },
        {
            name: "Stagiaire Back & Cloud",
            location: "Nagravision (Kudelski) ",
            startDate: new Date("2018-09-01").getTime(),
            endDate: new Date("2019-02-01").getTime(),
            description: "2èm stage de CFC",
            tasks:[
                "Implémentation de Workflow & spécification des stratégies de test selon la méthode Agile",
                "Documentation et génération de documents de formation"
            ],
            skillsDeveloped:[
                "Logiciel K2",
                "Mise en place de workflow automatisé"
            ]
        },
        {
            name: "Stagiaire Technicien de support",
            location: "HEIG-VD",
            startDate: new Date("2018-01-01").getTime(),
            endDate: new Date("2018-09-01").getTime(),
            description: "1er stage de CFC",
            tasks:[
                "Support 1er et 2ème niveau (gestion utilisateur, prise en charge et résolution des tickets)",
                "Installation d’OS et dépannage hardware (analyse et réparation des problèmes)"
            ],
            skillsDeveloped:[
                "Support IT",
                "Contact client"
            ]
        },
        {
            name: "Crew",
            location: "Mcdonald’s Montagny-près-Yverdon ",
            startDate: new Date("2013-12-01").getTime(),
            endDate: new Date("2017-08-01").getTime(),
            description: "Besoin d'aergent",
            tasks:[
                "Réception et rangement des livraisons",
                "Responsable du poste à friture"
            ],
            skillsDeveloped:[
                "Travail en équipe",
                "Gestion d'une équipe"
            ]
        },
        {
            name: "Séjour linguistique",
            location: "Angleterre / Allemagne",
            startDate: new Date("2013-06-01").getTime(),
            endDate: new Date("2013-09-01").getTime(),
            description: "Besoin d'apprendre l'anglais",
            tasks:[
                "Obtention d’un diplôme A1 en Anglais et A2 en Allemand"
            ],
            skillsDeveloped:[
                "Anglais et Allemand",
            ]
        },
        {
            name: "Cuisinier de troupe",
            location: "Armée Suisse",
            startDate: new Date("2012-06-01").getTime(),
            endDate: new Date("2013-04-01").getTime(),
            description: "C'était sympa, j'ai pris 20kg",
            tasks:[
                "Organisation et préparation des repas pour 200 personnes en cuisine ou sur le terrain"
            ],
            skillsDeveloped:[
                "Organisation",
            ]
        }
    ],
    skills:[
        {
            name: "GESTION DE PROJET",
            masteryLevelOf10: 6,
            proofOfCompetence:[
                "Module Gestion de projet ES",
            ]
        },
        {
            name: "Framework SCRUM",
            masteryLevelOf10: 8,
            proofOfCompetence:[
                "Maw 2.1",
                "Module Gestion de projet ES"
            ]
        },
        {
            name: "HTML / CSS",
            masteryLevelOf10: 8,
            proofOfCompetence:[
                "CFC",
                "Tech ES"
            ]
        },
        {
            name: "JavaScript",
            masteryLevelOf10: 8,
            proofOfCompetence:[
                "TPI en javascript",
                "Projet Quizz Kaphoot"
            ]
        },
        {
            name: "SQL",
            masteryLevelOf10: 8,
            proofOfCompetence:[
                "CFC et ES"
            ]
        },
        {
            name: "NoSQL",
            masteryLevelOf10: 6,
            proofOfCompetence:[
                "Tech"
            ]
        },
        {
            name: "PHP",
            masteryLevelOf10: 8,
            proofOfCompetence:[
                "Anubis, projet de CFC",
                "Runeo avec le framework Laravel"
            ]
        },
        {
            name: "C#",
            masteryLevelOf10: 4,
            proofOfCompetence:[
                "Application cryptage en Origin"
            ]
        },
        {
            name: "Ruby",
            masteryLevelOf10: 7,
            proofOfCompetence:[
                "Progcraft",
                "POO1 et POO2"
            ]
        }
    ],
    projects:[
        {
            name: "dynofolio",
            image: "dyno.png",
            link: "https://github.com/Crepe-Party/dynofolio",
            description: "Easy to implement animated portfolio (for developpers)",
        },
        {
            name: "ProgCraft",
            image: "robert.png",
            link: "https://github.com/Crepe-Party/ProgCraft",
            description: "learn pls",
        },
        {
            name: "RythmTree",
            image: "rythm.png",
            link: "https://github.com/DiogoVieiraFerreira/RythmTree.git",
            description: "learn pls",
        },
    ]
}