import React, { useEffect, useState} from 'react';
import { Card } from '../components/Card';
import { Container } from '../styles/styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';

// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import scrollLock from 'scroll-lock';

// import 'firebase/compat/firestore';

import { ToastContainer } from 'react-toastify';

const cardObject = {
  "0O0V4KDs2xgxaViUgGSK": {
    "backgroundColor": "#e9f51e",
    "countFinished": 13,
    "countSkipped": 60,
    "id": "0O0V4KDs2xgxaViUgGSK",
    "subtitle": "Stel deze vraag aan de medespeler rechts van je: op welk continent komen nijlpaarden in het wild voor? (Antwoord: Afrika) Fout? Eén slok!",
    "textColor": "#403131",
    "title": "Dierenvragen"
  },
  "0ZxHXB726A239ilcawD3": {
    "backgroundColor": "#33cc49",
    "countFinished": 7,
    "countSkipped": 60,
    "id": "0ZxHXB726A239ilcawD3",
    "subtitle": "Wie zou er als eerste meedoen aan Temptation Island?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "0uaoI7Zfk4xSlMt4YnuK": {
    "backgroundColor": "#8b85ff",
    "countFinished": 12,
    "countSkipped": 26,
    "id": "0uaoI7Zfk4xSlMt4YnuK",
    "subtitle": "Leg alle telefoons op een hoop, wie als eerste een appje krijgt, drinkt!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "2DkxymqbBmlybFvGSlGM": {
    "backgroundColor": "#8b85ff",
    "countFinished": 50,
    "countSkipped": 8,
    "id": "2DkxymqbBmlybFvGSlGM",
    "subtitle": "Roep 'Marco' totdat een onbekende 'Polo' terugroept. Lukt dit? Dan mag de rest een adje doen. ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "4Vb2y62ULhJdLzeMzQXL": {
    "backgroundColor": "#e9f51e",
    "countFinished": 9,
    "countSkipped": 24,
    "id": "4Vb2y62ULhJdLzeMzQXL",
    "subtitle": "Stel deze vraag aan een medespeler: welk wezen maakt jaarlijks een slordige 725.000 menselijke slachtoffers en is daarmee het dodelijkste dier ter wereld? (Antwoord: de mug) Fout? 4 slokken!",
    "textColor": "#403131",
    "title": "Dierenvraag"
  },
  "4VuVSOHx36BUnY39vNjo": {
    "backgroundColor": "#8b85ff",
    "countFinished": 30,
    "countSkipped": 18,
    "id": "4VuVSOHx36BUnY39vNjo",
    "subtitle": "De lezer mag 30 minuten niet drinken. Lukt dit niet? 5 slokken, gha. ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "4x6ZQgRh78UnO88cQoeI": {
    "backgroundColor": "#33cc49",
    "countFinished": 79,
    "countSkipped": 13,
    "id": "4x6ZQgRh78UnO88cQoeI",
    "subtitle": "Wie zou er als eerste bekend worden? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "4xeL1gj64alyQ5kStDIu": {
    "backgroundColor": "#8b85ff",
    "countFinished": 8,
    "countSkipped": 91,
    "id": "4xeL1gj64alyQ5kStDIu",
    "subtitle": "Doe een handstand en blijf 10 sec. staan. Geen succes? 2 slokken!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "6AV3LvgWpkJKf4qlWDPq": {
    "backgroundColor": "#e9f51e",
    "countFinished": 16,
    "countSkipped": 15,
    "id": "6AV3LvgWpkJKf4qlWDPq",
    "subtitle": "Stel deze vraag aan de medespeler rechts van je: hoelang is de nek van een giraffe? (Antwoord: 3 meter) Fout? 2 slokken!",
    "textColor": "#403131",
    "title": "Dierenvragen"
  },
  "729drz7wCOpuQMXz6JQp": {
    "backgroundColor": "#e9f51e",
    "countFinished": 22,
    "countSkipped": 88,
    "id": "729drz7wCOpuQMXz6JQp",
    "subtitle": "Stel deze vraag aan een medespeler: welk zoogdier kan als enige vliegen? (Antwoord: de vleermuis) Fout? 4 slokken!",
    "textColor": "#403131",
    "title": "Dierenvragen"
  },
  "772OdFfCRv7n1h7blNj5": {
    "backgroundColor": "#e9f51e",
    "countFinished": 20,
    "countSkipped": 15,
    "id": "772OdFfCRv7n1h7blNj5",
    "subtitle": "Stel deze vraag aan een medespeler: hoe noem je een vrouwelijke olifant? (Antwoord: een koe) Fout? Neem de grootste slok ooit. ",
    "textColor": "#403131",
    "title": "Dierenvraag"
  },
  "91BhrpU2Kc6Jzt4vDsd4": {
    "backgroundColor": "#8b85ff",
    "countFinished": 17,
    "countSkipped": 83,
    "id": "91BhrpU2Kc6Jzt4vDsd4",
    "subtitle": "Je mag vanaf nu alleen nog maar drinken zonder handen.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "9rXvBXnfKpWsp41Cnn2e": {
    "backgroundColor": "#e9f51e",
    "countFinished": 30,
    "countSkipped": 35,
    "id": "9rXvBXnfKpWsp41Cnn2e",
    "subtitle": "Stel deze vraag aan een medespeler: hoeveel tenen heeft een papegaai aan één poot? (Antwoord: 4) Fout? 2 slokken!",
    "textColor": "#403131",
    "title": "Dierenvragen"
  },
  "BFRy0oyTUbnMwsAWTLbh": {
    "backgroundColor": "#8b85ff",
    "countFinished": 45,
    "countSkipped": 16,
    "id": "BFRy0oyTUbnMwsAWTLbh",
    "subtitle": "Lees je laatste whatsappberichtje voor. ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "BwQ5wQ8W54TX2iOCMkVP": {
    "backgroundColor": "#33cc49",
    "countFinished": 13,
    "countSkipped": 38,
    "id": "BwQ5wQ8W54TX2iOCMkVP",
    "subtitle": "Wie zal hoogstwaarschijnlijk niet in staat zijn om slechts 30 minuten een geheim te bewaren?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "CImK0tEuweYJfUHTBLhJ": {
    "backgroundColor": "#33cc49",
    "countFinished": 26,
    "countSkipped": 14,
    "id": "CImK0tEuweYJfUHTBLhJ",
    "subtitle": "Wie wordt wakker tijdens Solar en weet niet meer wie of waar hij is? ",
    "textColor": "#403131",
    "title": "Most likely To"
  },
  "Cwqx65DHy1zlhHgf0wJt": {
    "backgroundColor": "#33cc49",
    "countFinished": 18,
    "countSkipped": 25,
    "id": "Cwqx65DHy1zlhHgf0wJt",
    "subtitle": "Wie maakt de grootste kans op een leven als alcoholist? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "DpCNfXd2pkw5Tko1YHS4": {
    "backgroundColor": "#8b85ff",
    "countFinished": 19,
    "countSkipped": 88,
    "id": "DpCNfXd2pkw5Tko1YHS4",
    "subtitle": "De vloer is lava! Jullie hebben tien sec. vanaf nu! Wie te laat is, drinkt!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "DqmAS59zPMPylfmJkmNo": {
    "backgroundColor": "#33cc49",
    "countFinished": 16,
    "countSkipped": 16,
    "id": "DqmAS59zPMPylfmJkmNo",
    "subtitle": "Wie zou er als eerste aan het ondergoed van iemand anders ruiken?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "E5v13E7VRGbC2zajlpGr": {
    "backgroundColor": "#33cc49",
    "countFinished": 26,
    "countSkipped": 31,
    "id": "E5v13E7VRGbC2zajlpGr",
    "subtitle": "Wie sneuvelt er dit weekend als eerste?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "F1isJwjsFJSZHEKtjqvj": {
    "backgroundColor": "#ff7add",
    "countFinished": 49,
    "countSkipped": 9,
    "id": "F1isJwjsFJSZHEKtjqvj",
    "subtitle": "Je mag tijdens Solar maar bij één area staan, welke kies je?",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "FQtSulyi69FAZGNoAwui": {
    "backgroundColor": "#8b85ff",
    "countFinished": 25,
    "countSkipped": 16,
    "id": "FQtSulyi69FAZGNoAwui",
    "subtitle": "Doe een staredown met een vreemde. Wie als eerste knippert, moet 2 slokken nemen.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "GCZlsavehOoB66HCyC3C": {
    "backgroundColor": "#e9f51e",
    "countFinished": 18,
    "countSkipped": 22,
    "id": "GCZlsavehOoB66HCyC3C",
    "subtitle": "Ofidiofobie is de extreme angst voor welk soort dieren? (Je medespelers mogen het antwoord opzoeken) Fout? 2 slokken!",
    "textColor": "#403131",
    "title": "Dierenvraag"
  },
  "GJxM25Do3xDtGT2WPc77": {
    "backgroundColor": "#8b85ff",
    "countFinished": 14,
    "countSkipped": 16,
    "id": "GJxM25Do3xDtGT2WPc77",
    "subtitle": "Maak een Solar TikTok en mail deze naar info@solarweekend.com. Wie weet delen we 'm! ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "GRhdg02KdikLr4ycLcci": {
    "backgroundColor": "#ff7add",
    "countFinished": 15,
    "countSkipped": 12,
    "id": "GRhdg02KdikLr4ycLcci",
    "subtitle": "Liever heel Solar zonder sokken of zonder ondergoed?",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "HVNlRkCZhbmmCcLNOz7z": {
    "backgroundColor": "#8b85ff",
    "countFinished": 15,
    "countSkipped": 80,
    "id": "HVNlRkCZhbmmCcLNOz7z",
    "subtitle": "Zoek de giraffe op de camping en maak een selfie. Lukt dit niet? 3 slokken.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "HYznfPh8IIKs2bC3NuKH": {
    "backgroundColor": "#8b85ff",
    "countFinished": 11,
    "countSkipped": 27,
    "id": "HYznfPh8IIKs2bC3NuKH",
    "subtitle": "Draag je sokken om je handen voor 10 minuten.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "HcAMw7TjVITg0KNwyljZ": {
    "backgroundColor": "#8b85ff",
    "countFinished": 52,
    "countSkipped": 10,
    "id": "HcAMw7TjVITg0KNwyljZ",
    "subtitle": "Bouw een zo hoog mogelijke toren met random spullen.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "IiVZzlhS8A5bG5ALpryS": {
    "backgroundColor": "#8b85ff",
    "countFinished": 13,
    "countSkipped": 9,
    "id": "IiVZzlhS8A5bG5ALpryS",
    "subtitle": "Maak de meest creatieve foto die je kunt bedenken, deel deze in je stories en tag Solar. Wie weet win jij de eerste tickets voor Solar 2024!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "Iu14r4dZlpWxkM5azC6e": {
    "backgroundColor": "#33cc49",
    "countFinished": 15,
    "countSkipped": 32,
    "id": "Iu14r4dZlpWxkM5azC6e",
    "subtitle": "Wie heeft er een kind zonder dat hij of zij het weet? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "JHOCKOB2hDCjFsM4pqYx": {
    "backgroundColor": "#8b85ff",
    "countFinished": 11,
    "countSkipped": 11,
    "id": "JHOCKOB2hDCjFsM4pqYx",
    "subtitle": "Ik ben op Solar en ik ben vergeten... (wie als eerste het niet meer kan opnoemen, drinkt)",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "JcDIG45trd6bSRR1gEu6": {
    "backgroundColor": "#33cc49",
    "countFinished": 37,
    "countSkipped": 13,
    "id": "JcDIG45trd6bSRR1gEu6",
    "subtitle": "Wie doucht zich niet tijdens 4 dagen Solar? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "K28SDsXvLD9qNxnfRyJ0": {
    "backgroundColor": "#33cc49",
    "countFinished": 16,
    "countSkipped": 76,
    "id": "K28SDsXvLD9qNxnfRyJ0",
    "subtitle": "Wie van de vriendengroep komt er als eerste in aanraking met de beveiliging? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "KuknZQrSloTyXdypsN9M": {
    "backgroundColor": "#ff7add",
    "countFinished": 21,
    "countSkipped": 3,
    "id": "KuknZQrSloTyXdypsN9M",
    "subtitle": "Je mag nooit meer naar een concert of nooit meer naar een festival",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "LB1CBHrutvHzmgC35FNc": {
    "backgroundColor": "#e9f51e",
    "countFinished": 26,
    "countSkipped": 15,
    "id": "LB1CBHrutvHzmgC35FNc",
    "subtitle": "Noem de BIG 5. (vrienden mogen het antwoord opzoeken)",
    "textColor": "#403131",
    "title": "Dierenvragen"
  },
  "LDh2Yt4Oe6Pr5TnNiWIw": {
    "backgroundColor": "#33cc49",
    "countFinished": 16,
    "countSkipped": 58,
    "id": "LDh2Yt4Oe6Pr5TnNiWIw",
    "subtitle": "Wie eet het vaakst met open mond? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "LOaLnTRfCWqcEQcyFWSB": {
    "backgroundColor": "#ff7add",
    "countFinished": 114,
    "countSkipped": 14,
    "id": "LOaLnTRfCWqcEQcyFWSB",
    "subtitle": "The Opposites of La Fuente?",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "LyUdQlf1zFVyJWRA8rZj": {
    "backgroundColor": "#33cc49",
    "countFinished": 34,
    "countSkipped": 86,
    "id": "LyUdQlf1zFVyJWRA8rZj",
    "subtitle": "Wie zou als eerste verdwalen tijdens Solar?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "M92OwlbirLWak2jb9JSV": {
    "backgroundColor": "#33cc49",
    "countFinished": 12,
    "countSkipped": 24,
    "id": "M92OwlbirLWak2jb9JSV",
    "subtitle": "Wie zou er het eerst naar huis gaan van vakantie vanwege heimwee?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "MJlPdehmTnoy2y9Vs6zg": {
    "backgroundColor": "#e9f51e",
    "countFinished": 109,
    "countSkipped": 23,
    "id": "MJlPdehmTnoy2y9Vs6zg",
    "subtitle": "Stel deze vraag aan de medespeler rechts van je: welke dieren hebben net zoals mensen last van de overgang? (Antwoord: olifanten en walvissen) Alles fout? 2 slokken! Eén fout? Slokje vatten! ",
    "textColor": "#403131",
    "title": "Dierenvragen"
  },
  "NJxS3ZiSvAqLjyfkI7ZH": {
    "backgroundColor": "#8b85ff",
    "countFinished": 88,
    "countSkipped": 66,
    "id": "NJxS3ZiSvAqLjyfkI7ZH",
    "subtitle": "Armpje drukken met een onbekende. Als je verliest, moet je 2 slokken nemen. ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "OA2UFQicngzvkuQpCB5K": {
    "backgroundColor": "#8b85ff",
    "countFinished": 88,
    "countSkipped": 15,
    "id": "OA2UFQicngzvkuQpCB5K",
    "subtitle": "Maak een panoramafoto waar je zelf 3 keer op staat. ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "OjnwmMzsqZow8puz8d9Z": {
    "backgroundColor": "#33cc49",
    "countFinished": 62,
    "countSkipped": 20,
    "id": "OjnwmMzsqZow8puz8d9Z",
    "subtitle": "Wie is de hartenbreker van de groep?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "PjmadX10D5Kn9gaFWhzx": {
    "backgroundColor": "#8b85ff",
    "countFinished": 34,
    "countSkipped": 17,
    "id": "PjmadX10D5Kn9gaFWhzx",
    "subtitle": "Regel dit weekend een selfie met een bekend persoon!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "Q7atHz09VZvZcnGT1jO8": {
    "backgroundColor": "#ff7add",
    "countFinished": 7,
    "countSkipped": 17,
    "id": "Q7atHz09VZvZcnGT1jO8",
    "subtitle": "Liever elke avond tijdens Solar als eerste of als laatste naar bed?",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "QYkGnpdLS5w4zEeMmGX2": {
    "backgroundColor": "#8b85ff",
    "countFinished": 20,
    "countSkipped": 13,
    "id": "QYkGnpdLS5w4zEeMmGX2",
    "subtitle": "Je mag vanaf nu 10 minuten niet lachen. Doe je dit toch? Dan drink jij 3 slokken!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "QftIMgyOmZPuXE3GUl7m": {
    "backgroundColor": "#8b85ff",
    "countFinished": 11,
    "countSkipped": 41,
    "id": "QftIMgyOmZPuXE3GUl7m",
    "subtitle": "Je hebt 10 minuten: ruil een object uit je tent om voor een beter object! Lekker subjectief! ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "RVA22Okj3imgCmdh7Dbv": {
    "backgroundColor": "#8b85ff",
    "countFinished": 19,
    "countSkipped": 40,
    "id": "RVA22Okj3imgCmdh7Dbv",
    "subtitle": "Scoor een handtekening van FeestDJRuud! (Long term challenge)",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "RoTGP6vRxuTYTpuL8vZa": {
    "backgroundColor": "#8b85ff",
    "countFinished": 18,
    "countSkipped": 16,
    "id": "RoTGP6vRxuTYTpuL8vZa",
    "subtitle": "Wie als laatste schreeuwt, moet drinken!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "SNYRUklheRWh90bstWib": {
    "backgroundColor": "#ff7add",
    "countFinished": 1,
    "countSkipped": 1,
    "id": "SNYRUklheRWh90bstWib",
    "subtitle": "Elke keer van geslacht veranderen als je niest. Of: Niet het verschil kunnen zien tussen een baby en een muffin.",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "SPVmNOUxXzikCRVJLz1C": {
    "backgroundColor": "#33cc49",
    "countFinished": 27,
    "countSkipped": 21,
    "id": "SPVmNOUxXzikCRVJLz1C",
    "subtitle": "Wie raakt er op Solar al zijn zojuist gekochte munten kwijt?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "TB3g034UeEC3cDQFjOYJ": {
    "backgroundColor": "#33cc49",
    "countFinished": 77,
    "countSkipped": 31,
    "id": "TB3g034UeEC3cDQFjOYJ",
    "subtitle": "Wie is er het snelst dronken? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "UDb0sZ5CYUSqG4YO3DFU": {
    "backgroundColor": "#8b85ff",
    "countFinished": 70,
    "countSkipped": 10,
    "id": "UDb0sZ5CYUSqG4YO3DFU",
    "subtitle": "Doe de worm. Of probeer het op z'n minst. ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "Unqqu3b2nAipiEb5v2LL": {
    "backgroundColor": "#8b85ff",
    "countFinished": 15,
    "countSkipped": 14,
    "id": "Unqqu3b2nAipiEb5v2LL",
    "subtitle": "Je mag vanaf nu het woord 'ja' niet meer zeggen.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "UyWgNwkCD5LVm0udxST7": {
    "backgroundColor": "#8b85ff",
    "countFinished": 16,
    "countSkipped": 7,
    "id": "UyWgNwkCD5LVm0udxST7",
    "subtitle": "Iedereen. 5 slokken!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "Uzu34qupXNH2GmUFB9oK": {
    "backgroundColor": "#e9f51e",
    "countFinished": 14,
    "countSkipped": 64,
    "id": "Uzu34qupXNH2GmUFB9oK",
    "subtitle": "Welke vogels kunnen achteruit vliegen? (Medespelers mogen dit opzoeken) Fout? 2 slokken",
    "textColor": "#403131",
    "title": "Dierenvraag"
  },
  "VhImPhCKyVQlPFzUtUH9": {
    "backgroundColor": "#e9f51e",
    "countFinished": 13,
    "countSkipped": 53,
    "id": "VhImPhCKyVQlPFzUtUH9",
    "subtitle": "Stel deze vraag aan de medespeler links van je: welke vandaag nog levende diersoort staat genetisch het dichtst bij de t-rex? (Antwoord: de kip) Fout? 2 tokken, uh, slokken. ",
    "textColor": "#403131",
    "title": "Dierenvraag"
  },
  "VnBRVTjlXHm43pVV8ftc": {
    "backgroundColor": "#e9f51e",
    "countFinished": 22,
    "countSkipped": 95,
    "id": "VnBRVTjlXHm43pVV8ftc",
    "subtitle": "Welke Britse bioloog staat bekend om zijn talent als verhalenverteller in natuurdocumentaires zoals \"Life\" en \"Planet Earth\"? (je medespelers mogen het antwoord opzoeken) Fout? 2 slokken!",
    "textColor": "#403131",
    "title": "Dierenvraag"
  },
  "WI73hSLJXwBWqyYVG5sB": {
    "backgroundColor": "#33cc49",
    "countFinished": 143,
    "countSkipped": 12,
    "id": "WI73hSLJXwBWqyYVG5sB",
    "subtitle": "Wie komt er als eerste met glitter in het haar terug dit weekend?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "Wiz3AhllogsGqPg5MOHb": {
    "backgroundColor": "#8b85ff",
    "countFinished": 12,
    "countSkipped": 59,
    "id": "Wiz3AhllogsGqPg5MOHb",
    "subtitle": "Lees je laatste Tindergesprek voor. Doe je dit niet? Dan drink je 5 slokken!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "X0zz2pfl28iMdYo6DXD9": {
    "backgroundColor": "#8b85ff",
    "countFinished": 87,
    "countSkipped": 15,
    "id": "X0zz2pfl28iMdYo6DXD9",
    "subtitle": "Landen die beginnen met de letter K. Als een speler een antwoord herhaalt of niet meer weet, klap je 4 keer! De lezer begint!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "X9i2kdfGZTKuYh5bbn4c": {
    "backgroundColor": "#8b85ff",
    "countFinished": 16,
    "countSkipped": 10,
    "id": "X9i2kdfGZTKuYh5bbn4c",
    "subtitle": "Wie dit leest, mag 5 slokken uitdelen.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "XpjAtI51kfYwCFs2ckX1": {
    "backgroundColor": "#ff7add",
    "countFinished": 17,
    "countSkipped": 9,
    "id": "XpjAtI51kfYwCFs2ckX1",
    "subtitle": "Wie sneuvelt als eerste tijdens Solar 2023?",
    "textColor": "#403131",
    "title": "Most Likely to"
  },
  "YHrW1gOV38NADw8dOHiH": {
    "backgroundColor": "#ff7add",
    "countFinished": 11,
    "countSkipped": 10,
    "id": "YHrW1gOV38NADw8dOHiH",
    "subtitle": "999999999 of Joost? ",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "YWXRXLJqNzjgtzLHC1Vi": {
    "backgroundColor": "#8b85ff",
    "countFinished": 40,
    "countSkipped": 69,
    "id": "YWXRXLJqNzjgtzLHC1Vi",
    "subtitle": "Doe 20 push ups in 1 minuut. Lukt dit niet? 20 slokken! ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "ZZLdwAJXovDqsnhBeyEF": {
    "backgroundColor": "#8b85ff",
    "countFinished": 41,
    "countSkipped": 16,
    "id": "ZZLdwAJXovDqsnhBeyEF",
    "subtitle": "Laat je laatste 10 foto's zien.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "Zqya8PeeK3WsTZxfvZYz": {
    "backgroundColor": "#8b85ff",
    "countFinished": 8,
    "countSkipped": 81,
    "id": "Zqya8PeeK3WsTZxfvZYz",
    "subtitle": "Doe voor 30 sec. een gorilla na!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "aTiAvpeb0DL0zPrVRUDj": {
    "backgroundColor": "#8b85ff",
    "countFinished": 119,
    "countSkipped": 29,
    "id": "aTiAvpeb0DL0zPrVRUDj",
    "subtitle": "Wie als laatste staat, moet drinken!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "bIPTyPAUKtsqwYkmVWlq": {
    "backgroundColor": "#33cc49",
    "countFinished": 18,
    "countSkipped": 10,
    "id": "bIPTyPAUKtsqwYkmVWlq",
    "subtitle": "Wie neemt er als eerste iemand mee naar huis, kort na de eerste ontmoeting? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "cFgYZC7a4ZuHKC9WCuvJ": {
    "backgroundColor": "#33cc49",
    "countFinished": 14,
    "countSkipped": 12,
    "id": "cFgYZC7a4ZuHKC9WCuvJ",
    "subtitle": "Wie haakt er als eerst af tijdens dit spel? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "cMPK73RRiY8gntB4Nrx9": {
    "backgroundColor": "#33cc49",
    "countFinished": 75,
    "countSkipped": 14,
    "id": "cMPK73RRiY8gntB4Nrx9",
    "subtitle": "Wie zou als eerste eten van een ander opeten? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "coNfBYq2AaAZ0Uwa5Cp3": {
    "backgroundColor": "#33cc49",
    "countFinished": 12,
    "countSkipped": 52,
    "id": "coNfBYq2AaAZ0Uwa5Cp3",
    "subtitle": "Wie verliest als eerste zijn of haar telefoon tijdens Solar?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "dFvxUFB4lkK0qOcViylQ": {
    "backgroundColor": "#33cc49",
    "countFinished": 7,
    "countSkipped": 68,
    "id": "dFvxUFB4lkK0qOcViylQ",
    "subtitle": "Wie zou op het verkeerde moment als eerste gaan lachen?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "dL0uDFAqjkFLne148BXn": {
    "backgroundColor": "#33cc49",
    "countFinished": 54,
    "countSkipped": 44,
    "id": "dL0uDFAqjkFLne148BXn",
    "subtitle": "Wie zakt er dit weekend als eerste door zijn campingstoel?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "dcVrL734mCMLG9zWBlNu": {
    "backgroundColor": "#e9f51e",
    "countFinished": 16,
    "countSkipped": 18,
    "id": "dcVrL734mCMLG9zWBlNu",
    "subtitle": "Stel deze vraag aan de medespeler links van je: welke vogel hakt met zijn scherpe snavel gaten in bomen? (Antwoord: de specht) Fout? 2 slokken!",
    "textColor": "#403131",
    "title": "Dierenvragen"
  },
  "ehOiLCzEezinR8B1qRh6": {
    "backgroundColor": "#ff7add",
    "countFinished": 15,
    "countSkipped": 14,
    "id": "ehOiLCzEezinR8B1qRh6",
    "subtitle": "Is het patat of friet?",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "fcTtN8Oi0T9NfzFh7TGK": {
    "backgroundColor": "#8b85ff",
    "countFinished": 11,
    "countSkipped": 16,
    "id": "fcTtN8Oi0T9NfzFh7TGK",
    "subtitle": "Doe iemand uit de vriendengroep na totdat iemand het raadt. ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "jbBqiAmLZ7rPHZUgfjwP": {
    "backgroundColor": "#ff7add",
    "countFinished": 23,
    "countSkipped": 1,
    "id": "jbBqiAmLZ7rPHZUgfjwP",
    "subtitle": "1 jaar in de bak zitten. Of: voor de rest van je leven elke dag alle albums van Justin Bieber luisteren.",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "jdLM8CW2pihj3WdodkRC": {
    "backgroundColor": "#e9f51e",
    "countFinished": 10,
    "countSkipped": 12,
    "id": "jdLM8CW2pihj3WdodkRC",
    "subtitle": "Welk dier is een Finse spits? (Medespelers mogen het antwoord opzoeken) Fout? 3 slokken! ",
    "textColor": "#403131",
    "title": "Dierenvraag"
  },
  "k1dEacYuxXRsW0rLtLH9": {
    "backgroundColor": "#e9f51e",
    "countFinished": 12,
    "countSkipped": 20,
    "id": "k1dEacYuxXRsW0rLtLH9",
    "subtitle": "Stel deze vraag aan een medespeler:  welke dieren houden handjes vast als ze slapen? (Antwoord: zeeotters) Fout? 2 slokken!",
    "textColor": "#403131",
    "title": "Dierenvraag"
  },
  "kS6NpdecCOIE0Ihly2Ev": {
    "backgroundColor": "#ff7add",
    "countFinished": 78,
    "countSkipped": 7,
    "id": "kS6NpdecCOIE0Ihly2Ev",
    "subtitle": "Liever heel Solar op een leeg luchtbed slapen of alleen maar lauw bier?",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "mEs7D8z50DaNWo2ZY3Gm": {
    "backgroundColor": "#8b85ff",
    "countFinished": 40,
    "countSkipped": 8,
    "id": "mEs7D8z50DaNWo2ZY3Gm",
    "subtitle": "Douche met kleren aan. Geen zin in? Snappen we. Drinken dan? ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "ngVfvDgvge9gFqEN0Gbf": {
    "backgroundColor": "#33cc49",
    "countFinished": 9,
    "countSkipped": 12,
    "id": "ngVfvDgvge9gFqEN0Gbf",
    "subtitle": "Wie plast er altijd onder de douche? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "o7qEQS7ib8mFhXO2m6PK": {
    "backgroundColor": "#8b85ff",
    "countFinished": 70,
    "countSkipped": 4,
    "id": "o7qEQS7ib8mFhXO2m6PK",
    "subtitle": "Trek je shirt achterstevoren en binnenstebuiten aan voor 30 min. ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "obL6l34fr1qXDPdkQZjN": {
    "backgroundColor": "#33cc49",
    "countFinished": 12,
    "countSkipped": 8,
    "id": "obL6l34fr1qXDPdkQZjN",
    "subtitle": "Wie gaat er als eerst he-le-maal mee in een complottheorie? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "p3t1boc7vWLC6zDYZe8W": {
    "backgroundColor": "#e9f51e",
    "countFinished": 17,
    "countSkipped": 8,
    "id": "p3t1boc7vWLC6zDYZe8W",
    "subtitle": "Stel deze vraag aan een medespeler: wat is het snelste landdier op twee poten? (Antwoord: de struisvogel) Fout? 2 slokken! ",
    "textColor": "#403131",
    "title": "Dierenvraag"
  },
  "pCFPCjW5rc6k4Ed6VEfG": {
    "backgroundColor": "#ff7add",
    "countFinished": 4,
    "countSkipped": 56,
    "id": "pCFPCjW5rc6k4Ed6VEfG",
    "subtitle": "Altijd een clown naast je bed of je neus groeit als je liegt.",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "pvnMxwPATkyBIVphRuhA": {
    "backgroundColor": "#ff7add",
    "countFinished": 1,
    "countSkipped": 1,
    "id": "pvnMxwPATkyBIVphRuhA",
    "subtitle": "Je mag dit weekend alleen maar friet eten of je mag dit weekend alleen maar vega eten",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "pwCXJCvJGcfb6MluS0NJ": {
    "backgroundColor": "#e9f51e",
    "countFinished": 25,
    "countSkipped": 5,
    "id": "pwCXJCvJGcfb6MluS0NJ",
    "subtitle": "Stel deze vraag aan een medespeler: welk dier is het symbool van het WNF? (Antwoord: de panda) Fout? 2 slokken!",
    "textColor": "#403131",
    "title": "Dierenvragen"
  },
  "qxeFal241Bntd4mlqFoF": {
    "backgroundColor": "#8b85ff",
    "countFinished": 9,
    "countSkipped": 73,
    "id": "qxeFal241Bntd4mlqFoF",
    "subtitle": "Vraag aan je buurman en laat deze kaart niet zien: uit hoeveel innings bestaat een honkbalwedstrijd? (Antwoord: 9) Fout? 2 slokken",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "r1ER3ZvPm2XK4SQmw8dv": {
    "backgroundColor": "#ff7add",
    "countFinished": 1,
    "countSkipped": 32,
    "id": "r1ER3ZvPm2XK4SQmw8dv",
    "subtitle": "Je mag tijdens Solar maar één artiest zien, waar sta je links vooraan?",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "rKqEU5pkVsNHfhjgC9JJ": {
    "backgroundColor": "#33cc49",
    "countFinished": 62,
    "countSkipped": 5,
    "id": "rKqEU5pkVsNHfhjgC9JJ",
    "subtitle": "Wie zou er als eerste een Second Love-account aanmaken?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "rQNg3o3oBUfRUsiOHe2I": {
    "backgroundColor": "#8b85ff",
    "countFinished": 53,
    "countSkipped": 8,
    "id": "rQNg3o3oBUfRUsiOHe2I",
    "subtitle": "Je mag vanaf nu het woord 'nee' niet meer zeggen.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "rcHgVbKOXf8RND52j19x": {
    "backgroundColor": "#8b85ff",
    "countFinished": 6,
    "countSkipped": 10,
    "id": "rcHgVbKOXf8RND52j19x",
    "subtitle": "Haal met je tanden de sokken van de voeten van je buurman! Lukt dit niet? 3 slokken!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "rpuYuAGG8EPUR8SamaKP": {
    "backgroundColor": "#8b85ff",
    "countFinished": 9,
    "countSkipped": 45,
    "id": "rpuYuAGG8EPUR8SamaKP",
    "subtitle": "Scoor zo snel mogelijk een nummer van een onbekende. Wie dit als eerste heeft, mag 10 slokken uitdelen!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "s2ZqSLHmkiWmdToCPDFD": {
    "backgroundColor": "#ff7add",
    "countFinished": 9,
    "countSkipped": 2,
    "id": "s2ZqSLHmkiWmdToCPDFD",
    "subtitle": "Je hebt een permanente pisvlek in je broek of je houdt een afscheidsspeech voor elke drol die je doorspoelt",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "tzTrilyYHLN1fboaTFl5": {
    "backgroundColor": "#8b85ff",
    "countFinished": 6,
    "countSkipped": 14,
    "id": "tzTrilyYHLN1fboaTFl5",
    "subtitle": "Regel 12 sensuele foto’s voor de erotische kalender van jullie vriendengroep. Wie niet durft, mag 5 slokken drinken!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "u4OxB1hU3VdzNhhs91EJ": {
    "backgroundColor": "#8b85ff",
    "countFinished": 6,
    "countSkipped": 5,
    "id": "u4OxB1hU3VdzNhhs91EJ",
    "subtitle": "Wissel van outfit. ",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "uCMoQAa9tk5E45J2FW40": {
    "backgroundColor": "#33cc49",
    "countFinished": 8,
    "countSkipped": 42,
    "id": "uCMoQAa9tk5E45J2FW40",
    "subtitle": "Wie zou als eerste iedereen in de problemen brengen?",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "uEH0kBdC3jq0ZMap5nN2": {
    "backgroundColor": "#e9f51e",
    "countFinished": 5,
    "countSkipped": 9,
    "id": "uEH0kBdC3jq0ZMap5nN2",
    "subtitle": "Stel deze vraag aan een medespeler: arachnofobie is de extreme angst voor welk soort dieren? (Antwoord: spinnen) Fout? Eén slok!",
    "textColor": "#403131",
    "title": "Dierenvragen"
  },
  "uRDjIIzGh9ssIkj12DBc": {
    "backgroundColor": "#e9f51e",
    "countFinished": 23,
    "countSkipped": 18,
    "id": "uRDjIIzGh9ssIkj12DBc",
    "subtitle": "Stel deze vraag aan de medespeler links van je: hoe noemt men een groep zeehonden? (Antwoord: een school) Fout? 3 slokken!",
    "textColor": "#403131",
    "title": "Dierenvragen"
  },
  "uz5Iwejb5D7loOwKpcrA": {
    "backgroundColor": "#33cc49",
    "countFinished": 54,
    "countSkipped": 4,
    "id": "uz5Iwejb5D7loOwKpcrA",
    "subtitle": "Wie belandt er als eerste in de verkeerde tent dit weekend? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "v1zsrCa9wAqtFqYU9cMM": {
    "backgroundColor": "#8b85ff",
    "countFinished": 9,
    "countSkipped": 16,
    "id": "v1zsrCa9wAqtFqYU9cMM",
    "subtitle": "Geef een onbekende een kushandje, doe je dat niet? 3 slokken.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "vFECU3Goztx7ThZELgPI": {
    "backgroundColor": "#8b85ff",
    "countFinished": 3,
    "countSkipped": 18,
    "id": "vFECU3Goztx7ThZELgPI",
    "subtitle": "Wie die leest, moet nu De Maasplassen in springen! Anders drinken!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "wahR2j6ZBexWOTwuzOzZ": {
    "backgroundColor": "#ff7add",
    "countFinished": 16,
    "countSkipped": 16,
    "id": "wahR2j6ZBexWOTwuzOzZ",
    "subtitle": "Je draagt alleen maar kleding met een tijgerprint of iedere zaterdagavond speel je bingo in een bejaardentehuis.",
    "textColor": "#403131",
    "title": "Dilemma"
  },
  "wgMp7ZY1LM6YrGbN76Mk": {
    "backgroundColor": "#8b85ff",
    "countFinished": 4,
    "countSkipped": 2,
    "id": "wgMp7ZY1LM6YrGbN76Mk",
    "subtitle": "Wie dit leest, moet iedereen van de groep een compliment geven!",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "wha7NYqUWzXWelum8fw7": {
    "backgroundColor": "#33cc49",
    "countFinished": 47,
    "countSkipped": 42,
    "id": "wha7NYqUWzXWelum8fw7",
    "subtitle": "Wie van dit gezelschap wordt het oudst? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "x9OZ80eIwv90ErgpocDj": {
    "backgroundColor": "#33cc49",
    "countFinished": 6,
    "countSkipped": 35,
    "id": "x9OZ80eIwv90ErgpocDj",
    "subtitle": "Wie speelt de 72-uurs Tent uit? ",
    "textColor": "#403131",
    "title": "Most Likely To"
  },
  "y0EhuVS5apmjev1S95ta": {
    "backgroundColor": "#8b85ff",
    "countFinished": 64,
    "countSkipped": 5,
    "id": "y0EhuVS5apmjev1S95ta",
    "subtitle": "Iedereen met zwarte schoenen aan, drinkt.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "ymVpzV2NJWIPCJ9ji9jA": {
    "backgroundColor": "#8b85ff",
    "countFinished": 1,
    "countSkipped": 7,
    "id": "ymVpzV2NJWIPCJ9ji9jA",
    "subtitle": "Wissel van schoenen.",
    "textColor": "#403131",
    "title": "Challenge"
  },
  "zd5RrueT5T1qUufhPXKI": {
    "backgroundColor": "#e9f51e",
    "countFinished": 1,
    "countSkipped": 55,
    "id": "zd5RrueT5T1qUufhPXKI",
    "subtitle": "Stel deze vraag aan de medespeler rechts van je: welk dier legt de grootste eieren ter wereld? (Antwoord: de struisvogel) Fout? Adje! ",
    "textColor": "#403131",
    "title": "Dierenvragen"
  },
  "zhUabluGIERJoy0EiYHL": {
    "backgroundColor": "#e9f51e",
    "countFinished": 29,
    "countSkipped": 13,
    "id": "zhUabluGIERJoy0EiYHL",
    "subtitle": "Stel deze vraag aan een medespeler: hoeveel bulten heeft een dromedaris? (Antwoord: één) Fout? Eén slok! ",
    "textColor": "#403131",
    "title": "Dierenvraag"
  }
}

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const HomeScreen = () => {
  scrollLock.disablePageScroll();
  // const [showConfetti, setShowConfetti] = useState(false);
  // const [cards, setCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);

  function refreshPage() {
    window.location.reload(false);
  }

  function startGame() {
    const startRef = document.getElementById('startcontainer');
    startRef.style.zIndex = -1;
    startRef.style.opacity = 0;

    setShuffledCards(shuffle(Object.values(cardObject)));
  }

  return (
    <Container>
      <ToastContainer />
      <StartContainer id="startcontainer">
        <h1>HALLO TIJGER!</h1>
        <p>Dit is het spel om te spelen tijdens Solar Weekend 2023!</p>
        <p>Van spannende challenges tot grappige opdrachten tot je vrienden voorshut zetten. Begin snel en have fun!</p>
        <p>PS. Klappen = Drinken!</p>
        <StyledFloatingBtn onClick={startGame}>GAS EROP!</StyledFloatingBtn>
      </StartContainer>
      <CardContainer id="cardcontainer">
        {shuffledCards.map((item, i) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            id={item.id}
            key={i}
            backgroundColor={item.backgroundColor}
            textColor={item.textColor}
          />
        ))}
      </CardContainer>
      <StyledSignagute>
        <StyledBtn onClick={refreshPage}>Shuffle the deck!</StyledBtn>
      </StyledSignagute>
      {/* {showConfetti && <ConfettiExplosion zIndex={99999} duration={1000} />} */}
    </Container>
  );
};

export default HomeScreen;

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 999;
  opacity: 1;
`;

// const StyledConfetti = styled(Confetti)`
//   position: fixed !important;
//   right: 0;
//   top: 50%;
// `;

const StyledSignagute = styled.div`
  position: fixed !important;
  z-index: 0;
  font-size: 1.5em;
`;

const StyledBtn = styled.button`
  background-color: #5e5ef0;
  border: 1px solid #000;
  color: #fff;
  padding: 10px 20px;
  text-transform: uppercase;
`;

const StartContainer = styled.div`
  position: fixed;
  width: 85vw;
  background-color: #ff7add;
  border: 2px solid #a03bad;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
const StyledFloatingBtn = styled.button`
  background-color: #5e5ef0;
  border: 1px solid #000;
  color: #fff;
  padding: 10px 20px;
  text-transform: uppercase;
`;

// const ControlsContainer = styled.div`
//   position: fixed;
//   bottom: 10%;
//   width: 100%;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   z-index: 999;
// `;

// const ActionBtn = styled.button`
//   background: none;
//   border: none;
//   font-size: 1em;
//   color: #403131;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
