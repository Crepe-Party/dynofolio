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
            startDate: "01-02-2001",
            endDate: "",
            description: "Cuting tree",
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
        }
    ],
    skills:[
        {
            name: "skill 1",
            masteryLevelOf10: 6,
            proofOfCompetence:[
                "proof 1",
                "proof 2"
            ]
        }
    ],
    projects:[
        {
            name: "dynofolio",
            image: "myDyno",
            link: "https://github.com/Crepe-Party/dynofolio",
            description: "Easy to implement animated portfolio (for developpers)",
        }
    ]
}