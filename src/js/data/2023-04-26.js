dataSetVersion = "2023-04-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Element",
    key: "element",
    tooltip: "Check this to restrict character from certain elements.",
    checked: false,
    sub: [
      { name: "Lightning", key: "light" },
      { name: "Fire", key: "fire" },
      { name: "Wind", key: "wind" },
      { name: "Ice", key: "ice" },
      { name: "Quantum", key: "quan" },
      { name: "Physical", key: "phys" },
      { name: "Imaginary", key: "imag" },
      { name: "Adaptive", key: "adap" }
    ]
  },
  {
    name: "Filter by Path",
    key: "path",
    tooltip: "Check this to restrict character from certain paths.",
    checked: false,
    sub: [
      { name: "The Abundance", key: "abun" },
      { name: "The Destruction", key: "dest" },
      { name: "The Harmony", key: "harm" },
      { name: "The Hunt", key: "hunt" },
      { name: "The Preservation", key: "pres" },
      { name: "The Erudition", key: "erud" },
      { name: "The Nihility", key: "nihi" },
      { name: "Adaptive", key: "adap" }
    ]
  },
  {
    name: "Filter by Affiliation",
    key: "affil",
    tooltip: "Check this to restrict character from certain affiliations.", // should i add more filters? i think this is enough for now. let me know if any others would be nice
    checked: false,
    sub: [
      { name: "Herta Space Station", key: "herta" },
      { name: "Xianzhou Luofu", key: "xianlu" },
      { name: "Silvermane Guards", key: "silv" },
      { name: "Prospectors", key: "pros" },
      { name: "Astral Express", key: "astr" },
      { name: "The Moles", key: "mole" },
      { name: "Xianzhou Alliance", key: "xianal" },
      { name: "Cloud Knights", key: "clou" },
      { name: "Six Charioteers", key: "six" },
      { name: "Stellaron Hunters", key: "stel" },
      { name: "Intergalactic Merchant Guild", key: "inter" },
      { name: "Wildfire", key: "wild" },
      { name: "The Union", key: "uni" },
      { name: "Anti-Entropy", key: "anti" }
    ]
  },
  {
    name: "Exclude 5☆ Characters",
    key: "five",
    tooltip: "Check this to remove 5☆ characters.",
    checked: false
  },
  {
    name: "Exclude 4☆ Characters",
    key: "four",
    tooltip: "Check this to remove 4☆ characters.",
    checked: false
  },
  {
    name: "Exclude Male",
    key: "men",
    tooltip: "Check this to remove male characters.",
    checked: false
  },
  {
    name: "Exclude Female",
    key: "fem",
    tooltip: "Check this to remove female characters.",
    checked: false
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Arlan",
    img: "r2UgNP9.png",
    opts: {
      element: ['light'],
      path: ['dest'],
      affil: ['herta'],
      four: true,
      men: true,
    }
  },
  {
    name: "Asta",
    img: "HzIVCOo.png",
    opts: {
      element: ['fire'],
      path: ['harm'],
      affil: ['herta'],
      four: true,
      fem: true,
    }
  },
  {
    name: "Bailu",
    img: "8YOmz3U.png",
    opts: {
      element: ['light'],
      path: ['abun'],
      affil: ['xianlu'],
      five: true,
      fem: true,
    }
  },
  {
    name: "Blade",
    img: "tOrEpCE.png",
    opts: {
      element: ['wind'],
      path: ['dest'],
      affil: ['stel'],
      five: true,
      men: true,
    }
  },
  {
    name: "Bronya",
    img: "Gb2sB5l.png",
    opts: {
      element: ['wind'],
      path: ['harm'],
      affil: ['silv'],
      five: true,
      fem: true,
    }
  },
  {
    name: "Clara",
    img: "vja6A9u.png",
    opts: {
      element: ['phys'],
      path: ['dest'],
      affil: ['pros'],
      five: true,
      fem: true,
    }
  },
  {
    name: "Dan Heng",
    img: "DIjhven.png",
    opts: {
      element: ['wind'],
      path: ['hunt'],
      affil: ['astr'],
      four: true,
      men: true,
    }
  },
  {
    name: "Fu Xuan",
    img: "QPxlj7w.png",
    opts: {
      element: ['quan'],
      path: ['pres'],
      affil: ['xianlu'],
      five: true,
      fem: true,
    }
  },
  {
    name: "Gepard",
    img: "ltSbZki.png",
    opts: {
      element: ['ice'],
      path: ['pres'],
      affil: ['silv'],
      five: true,
      men: true,
    }
  },
  {
    name: "Herta",
    img: "OJhsudK.png",
    opts: {
      element: ['ice'],
      path: ['erud'],
      affil: ['herta'],
      four: true,
      fem: true,
    }
  },
  {
    name: "Himeko",
    img: "yGZFbLm.png",
    opts: {
      element: ['fire'],
      path: ['erud'],
      affil: ['astr'],
      five: true,
      fem: true,
    }
  },
  {
    name: "Hook",
    img: "qBU0Sqp.png",
    opts: {
      element: ['fire'],
      path: ['dest'],
      affil: ['mole'],
      four: true,
      fem: true,
    }
  },
  {
    name: "Jing Yuan",
    img: "lLGU3ZY.png",
    opts: {
      element: ['light'],
      path: ['erud'],
      affil: ['xianal', 'clou', 'six'],
      five: true,
      men: true,
    }
  },
  {
    name: "Kafka",
    img: "i3bT53Q.png",
    opts: {
      element: ['light'],
      path: ['nihi'],
      affil: ['stel'],
      five: true,
      fem: true,
    }
  },
  {
    name: "Luocha",
    img: "ZBQYdiA.png",
    opts: {
      element: ['imag'],
      path: ['abun'],
      affil: ['inter'],
      five: true,
      men: true,
    }
  },
  {
    name: "March 7th",
    img: "IXQyzu8.png",
    opts: {
      element: ['ice'],
      path: ['pres'],
      affil: ['astr'],
      four: true,
      fem: true,
    }
  },
  {
    name: "Natasha",
    img: "oO9CKqM.png",
    opts: {
      element: ['phys'],
      path: ['abun'],
      affil: ['wild'],
      four: true,
      fem: true,
    }
  },
  {
    name: "Pela a.k.a Pelageya Sergeyevna (Russian: Пелагея Сергеевна Pelageya Sergeevna)",
    img: "Ein7Cpq.png",
    opts: {
      element: ['ice'],
      path: ['nihi'],
      affil: ['uni'],
      four: true,
      fem: true,
    }
  },
  {
    name: "Qingque",
    img: "EWo9zkC.png",
    opts: {
      element: ['quan'],
      path: ['erud'],
      affil: ['xianlu'],
      four: true,
      fem: true,
    }
  },
  {
    name: "Sampo a.k.a Sampo Koski",
    img: "2nCK5Rd.png",
    opts: {
      element: ['wind'],
      path: ['nihi'],
      affil: ['wild'],
      four: true,
      men: true,
    }
  },
  {
    name: "Seele",
    img: "nCogULk.png",
    opts: {
      element: ['quan'],
      path: ['hunt'],
      affil: ['wild'],
      five: true,
      fem: true,
    }
  },
  {
    name: "Serval a.k.a Serval Landau",
    img: "Pda9Qsx.png",
    opts: {
      element: ['light'],
      path: ['erud'],
      affil: ['uni'],
      four: true,
      fem: true,
    }
  },
  {
    name: "Silver Wolf",
    img: "MMyzulz.png",
    opts: {
      element: ['quan'],
      path: ['nihi'],
      affil: ['stel'],
      five: true,
      fem: true,
    }
  },
  {
    name: "Sushang",
    img: "vVLB0WE.png",
    opts: {
      element: ['phys'],
      path: ['hunt'],
      affil: ['xianal', 'xianlu', 'clou'],
      four: true,
      fem: true,
    }
  },
  {
    name: "Tingyun",
    img: "dO8AMJj.png",
    opts: {
      element: ['light'],
      path: ['harm'],
      affil: ['xianlu'],
      four: true,
      fem: true,
    }
  },
  {
    name: "Trailblazer",
    img: "RZQRn62.png",
    opts: {
      element: ['adap'],
      path: ['adap'],
      affil: ['astr'],
      five: true,
      men: true,
      fem: true
    }
  },
  {
    name: "Welt a.k.a Joachim Nokianvirtanen",
    img: "pKPwV8u.png",
    opts: {
      element: ['imag'],
      path: ['nihi'],
      affil: ['astr', 'anti'],
      five: true,
      men: true
    }
  },
  {
    name: "Yanqing",
    img: "a85JTks.png",
    opts: {
      element: ['ice'],
      path: ['hunt'],
      affil: ['xianlu'],
      five: true,
      men: true
    }
  },
]
