var mainData = {
    me:{
        firstName: "Robert",
        lastName: "Wood",
        birthDate: new Date("1990-01-01").getTime(),
        title: "Bucheron",
        contact:[
            {adress: "Rue du chêne 24, 1450 Ste-Bois"},
            {phone: "079 970 07 70"},
            {mail: "robert.fistiniere@mail.ch"}
        ],
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum debitis accusamus repellat consequuntur sit nostrum ex laudantium eum beatae. Veritatis maiores in fugiat temporibus laudantium ut unde distinctio soluta.",
        others:[
            "J'aime couper du bois",
            "J'ai le permis camion",
        ]
    },
    jobs:[
        {
            name: "training1",
            location: "forêt",
            startDate: new Date("2001-02-01").getTime(),
            endDate: Date.now(),
            description: "Cutting tree",
            tasks:[
                "Task 1",
                "Task 2",
                "Task 3"
            ],
            skillsDeveloped:[
                "Skill 1",
                "Skill 2",
                "Skill 3"
            ]
        },
    ],
    skills:[
        {
            name: "skill 1",
            masteryLevelOf10: 6,
            proofOfCompetence:[
                "proof 1",
                "proof 2"
            ]
        },
        {
            name: "skill 2",
            masteryLevelOf10: 9,
            proofOfCompetence:[
                "proof 3",
                "proof 4"
            ]
        },
        {
            name: "skill 3",
            masteryLevelOf10: 2,
            proofOfCompetence:[
                "proof 5",
                "proof 6"
            ]
        },
    ],
    projects:[
        {
            name: "dynofolio",
            image: "default.png",
            link: "https://github.com/Crepe-Party/dynofolio",
            description: "Easy to implement animated portfolio (for developpers)",
        },
        {
            name: "ProgCraft",
            image: "dyno.png",
            link: "https://github.com/Crepe-Party/ProgCraft",
            description: "learn pls",
        }
    ]
}