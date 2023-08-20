import { Articles } from "../Components/textfields"
import image from "../assets/Image-Sustainability.jpg"
import image2 from "../assets/Image-Leave-No-One.jpg"
import image3 from "../assets/Image-Hunger.jpg"


export const verdensmaal = {
    title: "DE 17 VERDENSMÅL",
    text: ["På FN topmødet i New York i 2015 vedtog verdens stats- og regeringsledere en hidtil uset ambitiøs og samfundsforandrende udviklingsdagsorden, også kaldt 2030 dagsordenen.", "Frem til 2030 skal denne dagsorden sætte kurs mod en mere bæredygtig udvikling for både mennesker og planeten, vi bor på."]
}

export const delsmaalene = {
    title: "DELMÅLENE",
    text: ["FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål."],
}

export const udfordringer = {
    title: "UDFORDRINGER",
    text: ["Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har forpligtiget sig til."]
}

export const dual1: Articles = [
    {
        title: "Verdensmålene forpligter.",
        text: [
            "Medlemslandende forpligter sig til helt at afskaffe fattigdom og sult i verden, sikre god uddannelse og sundhed til alle, reducere ulighed, fremme ligestilling, anstændige jobs, bæredygtig vækst og forbrug.", "Den nye dagsorden anerkender således at social, økonomisk og miljømæssig udvikling, fred, sikkerhed og internationalt samarbejde er tæt forbundet, og at det kræver en integreret indsats at opnå holdbare udviklingsresultater."
        ]
    },
    {
        title: "Verdensmålene gælder alle.",
        text: [
            "Målene gælder alle lande - både rige og fattige - dvs. de er universelle.",
            "Udfordringer som social, økonomisk  marginalisering, stigende ulighed, fødevareusikkerhed,  ulig adgang til grundlæggende naturressourcer,og har regionale og globale konsekvenser.", 
            "Det er derfor afgørende at alle lande leverer og løfter opgaven i fællesskab."
        ]
    }
]

export const info = [
    {
        title: "Vækst vs. bæredygtighed.",
        text: [
        "En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.",
        "Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.",
        "De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større."
        ],
        image: image,
      },
      {
        title: "Leave no-one behind.",
        text: [
        "I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.",
        "Arbejdet med verdensmålene skal begynde med, at de fattigste og mest marginaliserede adresseres først.",
        "Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.",
        'Med andre ord: “Leave No-One behind”.'
        ],
        image: image2,
      },
      {
        title: "Fattigdom og sult.",
        text: [
        "Det første af FN’s verdensmål handler om at afskaffe verdens fattigdom inden 2030.",
        "Det handler især om at give muligheder for mennesker i verdens fattigste lande. Verdensbanken definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs. cirka 13 kroner.",
        "En stor udfordring, men vi er allerede godt på vej.",
        ],
        image: image3,
      },
      
]

export const footerLinks = [
    {
      title: "Eksterne Links:",
      links: [
        { title: "https://www.verdensmaalene.dk/", url: "/", pdf: false},
        { title: "https://www.globalgoals.org/", url: "/", pdf: false},
        { title: "https://www.un.org/sustainabledevelopment/", url: "/", pdf: false},
        { title: "https://worldslargestlesson.globalgoals.org/", url: "/" },
        { title: "https://www.unenvironment.org/", url: "/", pdf: false},
        { title: "https://ve.dk/klimaberegner/", url: "/", pdf: false},
      ],
    },
    {
      title: "Ressourcer:",
      links: [
        { title: "Bliver Verden Bedre", url: "/", pdf: true},
        { title: "Spotlight Rapport", url: "/", pdf: true},
      ],
    },
  ];