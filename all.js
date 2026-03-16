// 65 Football Players Database - May Contain Traces of Footballing Greatness
// ⚽ 21 Forwards, 23 Midfielders, 21 Defenders ⚽
// Warning: These players are dangerously talented
// Last Updated: When the transfer window was closed (we think)

const PLAYERS_DATABASE = [
    // FORWARDS (21)
    {
        id: 1,
        name: "Lionel Messi",
        nationality: "Argentina",
        position: "Forward",
        imageUrl: "images/lionel_messi.jpg",
        imageFile: "Messi.png"
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        nationality: "Portugal",
        position: "Forward",
        imageUrl: "images/cristiano_ronaldo.jpg",
        imageFile: "CR7.png"
    },
    {
        id: 3,
        name: "Kylian Mbappé",
        nationality: "France",
        position: "Forward",
        imageUrl: "images/kylian_mbappe.jpg",
        imageFile: "KM10.png"
    },
    {
        id: 4,
        name: "Erling Haaland",
        nationality: "Norway",
        position: "Forward",
        imageUrl: "images/erling_haaland.jpg",
        imageFile: "EH9.png"
    },
    {
        id: 5,
        name: "Neymar",
        nationality: "Brazil",
        position: "Forward",
        imageUrl: "images/neymar.jpg",
        imageFile: "NJ10.png"
    },
    {
        id: 6,
        name: "Mohamed Salah",
        nationality: "Egypt",
        position: "Forward",
        imageUrl: "images/mohamed_salah.jpg",
        imageFile: "MO10.png"
    },
    {
        id: 7,
        name: "Vinícius Júnior",
        nationality: "Brazil",
        position: "Forward",
        imageUrl: "images/vinicius_junior.jpg",
        imageFile: "VJ7.png"
    },
    {
        id: 8,
        name: "Harry Kane",
        nationality: "England",
        position: "Forward",
        imageUrl: "images/harry_kane.jpg",
        imageFile: "HK9.png"
    },
    {
        id: 9,
        name: "Sadio Mané",
        nationality: "Senegal",
        position: "Forward",
        imageUrl: "images/sadio_mane.jpg",
        imageFile: "mane.png"
    },
    {
        id: 10,
        name: "Son Heung-min",
        nationality: "South Korea",
        position: "Forward",
        imageUrl: "images/son_heungmin.jpg",
        imageFile: "son.png"
    },
    {
        id: 11,
        name: "Robert Lewandowski",
        nationality: "Poland",
        position: "Forward",
        imageUrl: "images/robert_lewandowski.jpg",
        imageFile: "RL9.png"
    },
    {
        id: 12,
        name: "Victor Osimhen",
        nationality: "Nigeria",
        position: "Forward",
        imageUrl: "images/victor_osimhen.jpg",
        imageFile: "osimen.png"
    },
    {
        id: 13,
        name: "Antoine Griezmann",
        nationality: "France",
        position: "Forward",
        imageUrl: "images/antoine_griezmann.jpg",
        imageFile: "grizeman.png"
    },
    {
        id: 14,
        name: "Lautaro Martínez",
        nationality: "Argentina",
        position: "Forward",
        imageUrl: "images/lautaro_martinez.jpg",
        imageFile: "lautaro.png"
    },
    {
        id: 15,
        name: "Julián Álvarez",
        nationality: "Argentina",
        position: "Forward",
        imageUrl: "images/julian_alvarez.jpg",
        imageFile: "alvarez.png"
    },
    {
        id: 16,
        name: "Viktor Gyökeres",
        nationality: "Sweden",
        position: "Forward",
        imageUrl: "images/viktor_gyokeres.jpg",
        imageFile: "vg14.png"
    },
    {
        id: 17,
        name: "Bukayo Saka",
        nationality: "England",
        position: "Forward",
        imageUrl: "images/bukayo_saka.jpg",
        imageFile: "bs7.png"
    },
    {
        id: 18,
        name: "Khvicha Kvaratskhelia",
        nationality: "Georgia",
        position: "Forward",
        imageUrl: "images/khvicha_kvaratskhelia.jpg",
        imageFile: "kvara.png"
    },
    {
        id: 19,
        name: "Marcus Rashford",
        nationality: "England",
        position: "Forward",
        imageUrl: "images/marcus_rashford.jpg",
        imageFile: "rashford.png"
    },
    {
        id: 20,
        name: "Rafael Leão",
        nationality: "Portugal",
        position: "Forward",
        imageUrl: "images/rafael_leao.jpg",
        imageFile: "leao.png"
    },

    // MIDFIELDERS (23) - The Engine Room of Dreams
    {
        id: 21,
        name: "Kevin De Bruyne",
        nationality: "Belgium",
        position: "Midfielder",
        imageUrl: "images/kevin_de_bruyne.jpg",
        imageFile: "KDB.png"
    },
    {
        id: 22,
        name: "Jude Bellingham",
        nationality: "England",
        position: "Midfielder",
        imageUrl: "images/jude_bellingham.jpg",
        imageFile: "jude.png"
    },
    {
        id: 23,
        name: "Pedri",
        nationality: "Spain",
        position: "Midfielder",
        imageUrl: "images/pedri.jpg",
        imageFile: "pedri.png"
    },
    {
        id: 24,
        name: "Rodri",
        nationality: "Spain",
        position: "Midfielder",
        imageUrl: "images/rodri.jpg",
        imageFile: "rodri.png"
    },
    {
        id: 25,
        name: "Phil Foden",
        nationality: "England",
        position: "Midfielder",
        imageUrl: "images/phil_foden.jpg",
        imageFile: "foden.png"
    },
    {
        id: 26,
        name: "Bernardo Silva",
        nationality: "Portugal",
        position: "Midfielder",
        imageUrl: "images/bernardo_silva.jpg",
        imageFile: "bernadosilva.png"
    },
    {
        id: 27,
        name: "Luka Modrić",
        nationality: "Croatia",
        position: "Midfielder",
        imageUrl: "images/luka_modric.jpg",
        imageFile: "modric.png"
    },
    {
        id: 28,
        name: "Toni Kroos",
        nationality: "Germany",
        position: "Midfielder",
        imageUrl: "images/toni_kroos.jpg",
        imageFile: "kroos.png"
    },
    {
        id: 29,
        name: "Joshua Kimmich",
        nationality: "Germany",
        position: "Midfielder",
        imageUrl: "images/joshua_kimmich.jpg",
        imageFile: "kimmich.png"
    },
    {
        id: 30,
        name: "Declan Rice",
        nationality: "England",
        position: "Midfielder",
        imageUrl: "images/declan_rice.jpg",
        imageFile: "rice.png"
    },
    {
        id: 31,
        name: "Martin Ødegaard",
        nationality: "Norway",
        position: "Midfielder",
        imageUrl: "images/martin_odegaard.jpg",
        imageFile: "ode.png"
    },
    {
        id: 32,
        name: "Bruno Fernandes",
        nationality: "Portugal",
        position: "Midfielder",
        imageUrl: "images/bruno_fernandes.jpg",
        imageFile: "burno.png"
    },
    {
        id: 33,
        name: "Frenkie de Jong",
        nationality: "Netherlands",
        position: "Midfielder",
        imageUrl: "images/frenkie_de_jong.jpg",
        imageFile: "deong.png"
    },
    {
        id: 34,
        name: "Federico Valverde",
        nationality: "Uruguay",
        position: "Midfielder",
        imageUrl: "images/federico_valverde.jpg",
        imageFile: "fede.png"
    },
    {
        id: 35,
        name: "Jamal Musiala",
        nationality: "Germany",
        position: "Midfielder",
        imageUrl: "images/jamal_musiala.jpg",
        imageFile: "jamal.png"
    },
    {
        id: 36,
        name: "Lamine Yamal",
        nationality: "Spain",
        position: "Forward",
        imageUrl: "images/lamine_yamal.jpg",
        imageFile: "yamal.png"
    },
    {
        id: 37,
        name: "Enzo Fernández",
        nationality: "Argentina",
        position: "Midfielder",
        imageUrl: "images/enzo_fernandez.jpg",
        imageFile: "enzo.png"
    },
    {
        id: 38,
        name: "Eduardo Camavinga",
        nationality: "France",
        position: "Midfielder",
        imageUrl: "images/eduardo_camavinga.jpg",
        imageFile: "camavingas.png"
    },
    {
        id: 39,
        name: "Florian Wirtz",
        nationality: "Germany",
        position: "Midfielder",
        imageUrl: "images/florian_wirtz.jpg",
        imageFile: "wirtz.png"
    },
    {
        id: 40,
        name: "James Maddison",
        nationality: "England",
        position: "Midfielder",
        imageUrl: "images/james_maddison.jpg",
        imageFile: "maddison.png"
    },

    // DEFENDERS (21)
    {
        id: 41,
        name: "Virgil van Dijk",
        nationality: "Netherlands",
        position: "Defender",
        imageUrl: "images/virgil_van_dijk.jpg",
        imageFile: "vvd.png"
    },
    {
        id: 42,
        name: "Sergio Ramos",
        nationality: "Spain",
        position: "Defender",
        imageUrl: "images/sergio_ramos.jpg",
        imageFile: "ramos.png"
    },
    {
        id: 43,
        name: "Antonio Rüdiger",
        nationality: "Germany",
        position: "Defender",
        imageUrl: "images/antonio_rudiger.jpg",
        imageFile: "rudiger.png"
    },
    {
        id: 44,
        name: "Rúben Dias",
        nationality: "Portugal",
        position: "Defender",
        imageUrl: "images/ruben_dias.jpg",
        imageFile: "ruben dias.png"
    },
    {
        id: 45,
        name: "Marquinhos",
        nationality: "Brazil",
        position: "Defender",
        imageUrl: "images/marquinhos.jpg",
        imageFile: "marqunious.png"
    },
    {
        id: 46,
        name: "João Cancelo",
        nationality: "Portugal",
        position: "Defender",
        imageUrl: "images/joao_cancelo.jpg",
        imageFile: "kounde.png"
    },
    {
        id: 47,
        name: "Trent Alexander-Arnold",
        nationality: "England",
        position: "Defender",
        imageUrl: "images/trent_alexander_arnold.jpg",
        imageFile: "trent.png"
    },
    {
        id: 48,
        name: "Achraf Hakimi",
        nationality: "Morocco",
        position: "Defender",
        imageUrl: "images/achraf_hakimi.jpg",
        imageFile: "hakimi.png"
    },
    {
        id: 49,
        name: "Theo Hernández",
        nationality: "France",
        position: "Defender",
        imageUrl: "images/theo_hernandez.jpg",
        imageFile: "theo fernadez.png"
    },
    {
        id: 50,
        name: "Jules Koundé",
        nationality: "France",
        position: "Defender",
        imageUrl: "images/jules_kounde.jpg",
        imageFile: "kounde.png"
    },
    {
        id: 51,
        name: "William Saliba",
        nationality: "France",
        position: "Defender",
        imageUrl: "images/william_saliba.jpg",
        imageFile: "saliba.png"
    },
    {
        id: 52,
        name: "Gabriel Magalhães",
        nationality: "Brazil",
        position: "Defender",
        imageUrl: "images/gabriel_magalhaes.jpg",
        imageFile: "mag6.png"
    },
    {
        id: 53,
        name: "Matthijs de Ligt",
        nationality: "Netherlands",
        position: "Defender",
        imageUrl: "images/matthijs_de_ligt.jpg",
        imageFile: "delight.png"
    },
    {
        id: 54,
        name: "Alphonso Davies",
        nationality: "Canada",
        position: "Defender",
        imageUrl: "images/alphonso_davies.jpg",
        imageFile: "alfonso.png"
    },
    {
        id: 55,
        name: "Kyle Walker",
        nationality: "England",
        position: "Defender",
        imageUrl: "images/kyle_walker.jpg",
        imageFile: "walker.png"
    },
    {
        id: 56,
        name: "Dayot Upamecano",
        nationality: "France",
        position: "Defender",
        imageUrl: "images/dayot_upamecano.jpg",
        imageFile: "dayot.png"
    },
    {
        id: 57,
        name: "Éder Militão",
        nationality: "Brazil",
        position: "Defender",
        imageUrl: "images/eder_militao.jpg",
        imageFile: "militao.png"
    },
    {
        id: 58,
        name: "Reece James",
        nationality: "England",
        position: "Defender",
        imageUrl: "images/reece_james.jpg",
        imageFile: "recce.png"
    },
    {
        id: 59,
        name: "Ben White",
        nationality: "England",
        position: "Defender",
        imageUrl: "images/ben_white.jpg",
        imageFile: "white.png"
    },
    {
        id: 60,
        name: "John Stones",
        nationality: "England",
        position: "Defender",
        imageUrl: "images/john_stones.jpg",
        imageFile: "stones.png"
    },
    {
        id: 61,
        name: "Jurrien Timber",
        nationality: "Netherlands",
        position: "Defender",
        imageUrl: "images/jurrien_timber.jpg",
        imageFile: "timber.png"
    },
    {
        id: 62,
        name: "Cole Palmer",
        nationality: "England",
        position: "Midfielder",
        imageUrl: "images/cole_palmer.jpg",
        imageFile: "palmer.png"
    },
    {
        id: 63,
        name: "Bruno Guimarães",
        nationality: "Brazil",
        position: "Midfielder",
        imageUrl: "images/bruno_guimaraes.jpg",
        imageFile: "gumaries.png"
    },
    {
        id: 64,
        name: "Jarrod Bowen",
        nationality: "England",
        position: "Forward",
        imageUrl: "images/jarrod_bowen.jpg",
        imageFile: "bowen.png"
    },
    {
        id: 65,
        name: "Dominik Szoboszlai",
        nationality: "Hungary",
        position: "Midfielder",
        imageUrl: "images/dominik_szoboszlai.jpg",
        imageFile: "sobozli.png"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PLAYERS_DATABASE };
}
// 30 Predetermined Rounds - Each round contains exactly 30 players in fixed positions
// Players appear 12-18 times across all rounds for balanced gameplay
// Round 1: positions 0-29, Round 2: positions 0-29, etc.
// Each player maintains their exact position when a round is reloaded

const PREDETERMINED_ROUNDS = {
    1: [
        { id: 1, name: "Lionel Messi", position: 0 },
        { id: 2, name: "Cristiano Ronaldo", position: 1 },
        { id: 3, name: "Kylian Mbappé", position: 2 },
        { id: 4, name: "Erling Haaland", position: 3 },
        { id: 5, name: "Neymar", position: 4 },
        { id: 6, name: "Mohamed Salah", position: 5 },
        { id: 7, name: "Vinícius Júnior", position: 6 },
        { id: 8, name: "Harry Kane", position: 7 },
        { id: 9, name: "Sadio Mané", position: 8 },
        { id: 10, name: "Son Heung-min", position: 9 },
        { id: 21, name: "Kevin De Bruyne", position: 10 },
        { id: 22, name: "Jude Bellingham", position: 11 },
        { id: 23, name: "Pedri", position: 12 },
        { id: 24, name: "Rodri", position: 13 },
        { id: 25, name: "Phil Foden", position: 14 },
        { id: 41, name: "Virgil van Dijk", position: 15 },
        { id: 42, name: "Sergio Ramos", position: 16 },
        { id: 43, name: "Antonio Rüdiger", position: 17 },
        { id: 44, name: "Rúben Dias", position: 18 },
        { id: 45, name: "Marquinhos", position: 19 },
        { id: 11, name: "Robert Lewandowski", position: 20 },
        { id: 12, name: "Victor Osimhen", position: 21 },
        { id: 26, name: "Bernardo Silva", position: 22 },
        { id: 27, name: "Luka Modrić", position: 23 },
        { id: 46, name: "João Cancelo", position: 24 },
        { id: 47, name: "Trent Alexander-Arnold", position: 25 },
        { id: 13, name: "Antoine Griezmann", position: 26 },
        { id: 28, name: "Toni Kroos", position: 27 },
        { id: 48, name: "Achraf Hakimi", position: 28 },
        { id: 14, name: "Lautaro Martínez", position: 29 }
    ],
    2: [
        { id: 15, name: "Julián Álvarez", position: 0 },
        { id: 16, name: "Viktor Gyökeres", position: 1 },
        { id: 17, name: "Bukayo Saka", position: 2 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 3 },
        { id: 19, name: "Marcus Rashford", position: 4 },
        { id: 20, name: "Rafael Leão", position: 5 },
        { id: 29, name: "Joshua Kimmich", position: 6 },
        { id: 30, name: "Declan Rice", position: 7 },
        { id: 31, name: "Martin Ødegaard", position: 8 },
        { id: 32, name: "Bruno Fernandes", position: 9 },
        { id: 49, name: "Theo Hernández", position: 10 },
        { id: 50, name: "Jules Koundé", position: 11 },
        { id: 51, name: "William Saliba", position: 12 },
        { id: 52, name: "Gabriel Magalhães", position: 13 },
        { id: 53, name: "Matthijs de Ligt", position: 14 },
        { id: 1, name: "Lionel Messi", position: 15 },
        { id: 2, name: "Cristiano Ronaldo", position: 16 },
        { id: 33, name: "Frenkie de Jong", position: 17 },
        { id: 34, name: "Federico Valverde", position: 18 },
        { id: 35, name: "Jamal Musiala", position: 19 },
        { id: 3, name: "Kylian Mbappé", position: 20 },
        { id: 4, name: "Erling Haaland", position: 21 },
        { id: 54, name: "Alphonso Davies", position: 22 },
        { id: 55, name: "Kyle Walker", position: 23 },
        { id: 5, name: "Neymar", position: 24 },
        { id: 36, name: "Lamine Yamal", position: 25 },
        { id: 56, name: "Dayot Upamecano", position: 26 },
        { id: 6, name: "Mohamed Salah", position: 27 },
        { id: 37, name: "Enzo Fernández", position: 28 },
        { id: 57, name: "Éder Militão", position: 29 }
    ],
    3: [
        { id: 7, name: "Vinícius Júnior", position: 0 },
        { id: 8, name: "Harry Kane", position: 1 },
        { id: 9, name: "Sadio Mané", position: 2 },
        { id: 10, name: "Son Heung-min", position: 3 },
        { id: 11, name: "Robert Lewandowski", position: 4 },
        { id: 12, name: "Victor Osimhen", position: 5 },
        { id: 38, name: "Eduardo Camavinga", position: 6 },
        { id: 39, name: "Florian Wirtz", position: 7 },
        { id: 40, name: "James Maddison", position: 8 },
        { id: 58, name: "Reece James", position: 9 },
        { id: 59, name: "Ben White", position: 10 },
        { id: 60, name: "John Stones", position: 11 },
        { id: 61, name: "Jurrien Timber", position: 12 },
        { id: 62, name: "Cole Palmer", position: 13 },
        { id: 63, name: "Bruno Guimarães", position: 14 },
        { id: 13, name: "Antoine Griezmann", position: 15 },
        { id: 14, name: "Lautaro Martínez", position: 16 },
        { id: 15, name: "Julián Álvarez", position: 17 },
        { id: 16, name: "Viktor Gyökeres", position: 18 },
        { id: 17, name: "Bukayo Saka", position: 19 },
        { id: 64, name: "Jarrod Bowen", position: 20 },
        { id: 65, name: "Dominik Szoboszlai", position: 21 },
        { id: 21, name: "Kevin De Bruyne", position: 22 },
        { id: 22, name: "Jude Bellingham", position: 23 },
        { id: 23, name: "Pedri", position: 24 },
        { id: 24, name: "Rodri", position: 25 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 26 },
        { id: 19, name: "Marcus Rashford", position: 27 },
        { id: 20, name: "Rafael Leão", position: 28 },
        { id: 25, name: "Phil Foden", position: 29 }
    ],
    4: [
        { id: 41, name: "Virgil van Dijk", position: 0 },
        { id: 42, name: "Sergio Ramos", position: 1 },
        { id: 43, name: "Antonio Rüdiger", position: 2 },
        { id: 44, name: "Rúben Dias", position: 3 },
        { id: 45, name: "Marquinhos", position: 4 },
        { id: 26, name: "Bernardo Silva", position: 5 },
        { id: 27, name: "Luka Modrić", position: 6 },
        { id: 28, name: "Toni Kroos", position: 7 },
        { id: 29, name: "Joshua Kimmich", position: 8 },
        { id: 30, name: "Declan Rice", position: 9 },
        { id: 46, name: "João Cancelo", position: 10 },
        { id: 47, name: "Trent Alexander-Arnold", position: 11 },
        { id: 48, name: "Achraf Hakimi", position: 12 },
        { id: 49, name: "Theo Hernández", position: 13 },
        { id: 50, name: "Jules Koundé", position: 14 },
        { id: 1, name: "Lionel Messi", position: 15 },
        { id: 2, name: "Cristiano Ronaldo", position: 16 },
        { id: 3, name: "Kylian Mbappé", position: 17 },
        { id: 31, name: "Martin Ødegaard", position: 18 },
        { id: 32, name: "Bruno Fernandes", position: 19 },
        { id: 4, name: "Erling Haaland", position: 20 },
        { id: 5, name: "Neymar", position: 21 },
        { id: 51, name: "William Saliba", position: 22 },
        { id: 52, name: "Gabriel Magalhães", position: 23 },
        { id: 6, name: "Mohamed Salah", position: 24 },
        { id: 33, name: "Frenkie de Jong", position: 25 },
        { id: 7, name: "Vinícius Júnior", position: 26 },
        { id: 34, name: "Federico Valverde", position: 27 },
        { id: 8, name: "Harry Kane", position: 28 },
        { id: 35, name: "Jamal Musiala", position: 29 }
    ],
    5: [
        { id: 9, name: "Sadio Mané", position: 0 },
        { id: 10, name: "Son Heung-min", position: 1 },
        { id: 11, name: "Robert Lewandowski", position: 2 },
        { id: 12, name: "Victor Osimhen", position: 3 },
        { id: 13, name: "Antoine Griezmann", position: 4 },
        { id: 14, name: "Lautaro Martínez", position: 5 },
        { id: 15, name: "Julián Álvarez", position: 6 },
        { id: 16, name: "Viktor Gyökeres", position: 7 },
        { id: 53, name: "Matthijs de Ligt", position: 8 },
        { id: 54, name: "Alphonso Davies", position: 9 },
        { id: 55, name: "Kyle Walker", position: 10 },
        { id: 56, name: "Dayot Upamecano", position: 11 },
        { id: 57, name: "Éder Militão", position: 12 },
        { id: 58, name: "Reece James", position: 13 },
        { id: 59, name: "Ben White", position: 14 },
        { id: 17, name: "Bukayo Saka", position: 15 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 16 },
        { id: 19, name: "Marcus Rashford", position: 17 },
        { id: 20, name: "Rafael Leão", position: 18 },
        { id: 36, name: "Lamine Yamal", position: 19 },
        { id: 60, name: "John Stones", position: 20 },
        { id: 61, name: "Jurrien Timber", position: 21 },
        { id: 62, name: "Cole Palmer", position: 22 },
        { id: 63, name: "Bruno Guimarães", position: 23 },
        { id: 37, name: "Enzo Fernández", position: 24 },
        { id: 38, name: "Eduardo Camavinga", position: 25 },
        { id: 64, name: "Jarrod Bowen", position: 26 },
        { id: 65, name: "Dominik Szoboszlai", position: 27 },
        { id: 39, name: "Florian Wirtz", position: 28 },
        { id: 40, name: "James Maddison", position: 29 }
    ],
    6: [
        { id: 21, name: "Kevin De Bruyne", position: 0 },
        { id: 22, name: "Jude Bellingham", position: 1 },
        { id: 23, name: "Pedri", position: 2 },
        { id: 24, name: "Rodri", position: 3 },
        { id: 25, name: "Phil Foden", position: 4 },
        { id: 1, name: "Lionel Messi", position: 5 },
        { id: 2, name: "Cristiano Ronaldo", position: 6 },
        { id: 26, name: "Bernardo Silva", position: 7 },
        { id: 27, name: "Luka Modrić", position: 8 },
        { id: 28, name: "Toni Kroos", position: 9 },
        { id: 3, name: "Kylian Mbappé", position: 10 },
        { id: 4, name: "Erling Haaland", position: 11 },
        { id: 41, name: "Virgil van Dijk", position: 12 },
        { id: 42, name: "Sergio Ramos", position: 13 },
        { id: 43, name: "Antonio Rüdiger", position: 14 },
        { id: 5, name: "Neymar", position: 15 },
        { id: 6, name: "Mohamed Salah", position: 16 },
        { id: 29, name: "Joshua Kimmich", position: 17 },
        { id: 30, name: "Declan Rice", position: 18 },
        { id: 44, name: "Rúben Dias", position: 19 },
        { id: 7, name: "Vinícius Júnior", position: 20 },
        { id: 8, name: "Harry Kane", position: 21 },
        { id: 45, name: "Marquinhos", position: 22 },
        { id: 46, name: "João Cancelo", position: 23 },
        { id: 9, name: "Sadio Mané", position: 24 },
        { id: 10, name: "Son Heung-min", position: 25 },
        { id: 47, name: "Trent Alexander-Arnold", position: 26 },
        { id: 48, name: "Achraf Hakimi", position: 27 },
        { id: 11, name: "Robert Lewandowski", position: 28 },
        { id: 12, name: "Victor Osimhen", position: 29 }
    ],
    7: [
        { id: 13, name: "Antoine Griezmann", position: 0 },
        { id: 14, name: "Lautaro Martínez", position: 1 },
        { id: 15, name: "Julián Álvarez", position: 2 },
        { id: 16, name: "Viktor Gyökeres", position: 3 },
        { id: 17, name: "Bukayo Saka", position: 4 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 5 },
        { id: 49, name: "Theo Hernández", position: 6 },
        { id: 50, name: "Jules Koundé", position: 7 },
        { id: 51, name: "William Saliba", position: 8 },
        { id: 52, name: "Gabriel Magalhães", position: 9 },
        { id: 19, name: "Marcus Rashford", position: 10 },
        { id: 20, name: "Rafael Leão", position: 11 },
        { id: 31, name: "Martin Ødegaard", position: 12 },
        { id: 32, name: "Bruno Fernandes", position: 13 },
        { id: 33, name: "Frenkie de Jong", position: 14 },
        { id: 53, name: "Matthijs de Ligt", position: 15 },
        { id: 54, name: "Alphonso Davies", position: 16 },
        { id: 55, name: "Kyle Walker", position: 17 },
        { id: 34, name: "Federico Valverde", position: 18 },
        { id: 35, name: "Jamal Musiala", position: 19 },
        { id: 56, name: "Dayot Upamecano", position: 20 },
        { id: 57, name: "Éder Militão", position: 21 },
        { id: 58, name: "Reece James", position: 22 },
        { id: 59, name: "Ben White", position: 23 },
        { id: 36, name: "Lamine Yamal", position: 24 },
        { id: 37, name: "Enzo Fernández", position: 25 },
        { id: 60, name: "John Stones", position: 26 },
        { id: 61, name: "Jurrien Timber", position: 27 },
        { id: 38, name: "Eduardo Camavinga", position: 28 },
        { id: 39, name: "Florian Wirtz", position: 29 }
    ],
    8: [
        { id: 62, name: "Cole Palmer", position: 0 },
        { id: 63, name: "Bruno Guimarães", position: 1 },
        { id: 64, name: "Jarrod Bowen", position: 2 },
        { id: 65, name: "Dominik Szoboszlai", position: 3 },
        { id: 40, name: "James Maddison", position: 4 },
        { id: 1, name: "Lionel Messi", position: 5 },
        { id: 21, name: "Kevin De Bruyne", position: 6 },
        { id: 22, name: "Jude Bellingham", position: 7 },
        { id: 2, name: "Cristiano Ronaldo", position: 8 },
        { id: 23, name: "Pedri", position: 9 },
        { id: 3, name: "Kylian Mbappé", position: 10 },
        { id: 24, name: "Rodri", position: 11 },
        { id: 4, name: "Erling Haaland", position: 12 },
        { id: 25, name: "Phil Foden", position: 13 },
        { id: 5, name: "Neymar", position: 14 },
        { id: 41, name: "Virgil van Dijk", position: 15 },
        { id: 6, name: "Mohamed Salah", position: 16 },
        { id: 42, name: "Sergio Ramos", position: 17 },
        { id: 7, name: "Vinícius Júnior", position: 18 },
        { id: 43, name: "Antonio Rüdiger", position: 19 },
        { id: 8, name: "Harry Kane", position: 20 },
        { id: 44, name: "Rúben Dias", position: 21 },
        { id: 9, name: "Sadio Mané", position: 22 },
        { id: 45, name: "Marquinhos", position: 23 },
        { id: 10, name: "Son Heung-min", position: 24 },
        { id: 46, name: "João Cancelo", position: 25 },
        { id: 11, name: "Robert Lewandowski", position: 26 },
        { id: 47, name: "Trent Alexander-Arnold", position: 27 },
        { id: 12, name: "Victor Osimhen", position: 28 },
        { id: 48, name: "Achraf Hakimi", position: 29 }
    ],
    9: [
        { id: 26, name: "Bernardo Silva", position: 0 },
        { id: 27, name: "Luka Modrić", position: 1 },
        { id: 28, name: "Toni Kroos", position: 2 },
        { id: 29, name: "Joshua Kimmich", position: 3 },
        { id: 30, name: "Declan Rice", position: 4 },
        { id: 13, name: "Antoine Griezmann", position: 5 },
        { id: 49, name: "Theo Hernández", position: 6 },
        { id: 14, name: "Lautaro Martínez", position: 7 },
        { id: 50, name: "Jules Koundé", position: 8 },
        { id: 15, name: "Julián Álvarez", position: 9 },
        { id: 51, name: "William Saliba", position: 10 },
        { id: 16, name: "Viktor Gyökeres", position: 11 },
        { id: 52, name: "Gabriel Magalhães", position: 12 },
        { id: 17, name: "Bukayo Saka", position: 13 },
        { id: 53, name: "Matthijs de Ligt", position: 14 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 15 },
        { id: 54, name: "Alphonso Davies", position: 16 },
        { id: 19, name: "Marcus Rashford", position: 17 },
        { id: 55, name: "Kyle Walker", position: 18 },
        { id: 20, name: "Rafael Leão", position: 19 },
        { id: 56, name: "Dayot Upamecano", position: 20 },
        { id: 31, name: "Martin Ødegaard", position: 21 },
        { id: 57, name: "Éder Militão", position: 22 },
        { id: 32, name: "Bruno Fernandes", position: 23 },
        { id: 58, name: "Reece James", position: 24 },
        { id: 33, name: "Frenkie de Jong", position: 25 },
        { id: 59, name: "Ben White", position: 26 },
        { id: 34, name: "Federico Valverde", position: 27 },
        { id: 60, name: "John Stones", position: 28 },
        { id: 35, name: "Jamal Musiala", position: 29 }
    ],
    10: [
        { id: 36, name: "Lamine Yamal", position: 0 },
        { id: 61, name: "Jurrien Timber", position: 1 },
        { id: 37, name: "Enzo Fernández", position: 2 },
        { id: 62, name: "Cole Palmer", position: 3 },
        { id: 38, name: "Eduardo Camavinga", position: 4 },
        { id: 63, name: "Bruno Guimarães", position: 5 },
        { id: 39, name: "Florian Wirtz", position: 6 },
        { id: 64, name: "Jarrod Bowen", position: 7 },
        { id: 40, name: "James Maddison", position: 8 },
        { id: 65, name: "Dominik Szoboszlai", position: 9 },
        { id: 1, name: "Lionel Messi", position: 10 },
        { id: 41, name: "Virgil van Dijk", position: 11 },
        { id: 2, name: "Cristiano Ronaldo", position: 12 },
        { id: 42, name: "Sergio Ramos", position: 13 },
        { id: 3, name: "Kylian Mbappé", position: 14 },
        { id: 21, name: "Kevin De Bruyne", position: 15 },
        { id: 4, name: "Erling Haaland", position: 16 },
        { id: 22, name: "Jude Bellingham", position: 17 },
        { id: 5, name: "Neymar", position: 18 },
        { id: 23, name: "Pedri", position: 19 },
        { id: 6, name: "Mohamed Salah", position: 20 },
        { id: 24, name: "Rodri", position: 21 },
        { id: 7, name: "Vinícius Júnior", position: 22 },
        { id: 25, name: "Phil Foden", position: 23 },
        { id: 8, name: "Harry Kane", position: 24 },
        { id: 43, name: "Antonio Rüdiger", position: 25 },
        { id: 9, name: "Sadio Mané", position: 26 },
        { id: 44, name: "Rúben Dias", position: 27 },
        { id: 10, name: "Son Heung-min", position: 28 },
        { id: 45, name: "Marquinhos", position: 29 }
    ],
    11: [
        { id: 11, name: "Robert Lewandowski", position: 0 },
        { id: 46, name: "João Cancelo", position: 1 },
        { id: 12, name: "Victor Osimhen", position: 2 },
        { id: 47, name: "Trent Alexander-Arnold", position: 3 },
        { id: 13, name: "Antoine Griezmann", position: 4 },
        { id: 48, name: "Achraf Hakimi", position: 5 },
        { id: 14, name: "Lautaro Martínez", position: 6 },
        { id: 49, name: "Theo Hernández", position: 7 },
        { id: 15, name: "Julián Álvarez", position: 8 },
        { id: 50, name: "Jules Koundé", position: 9 },
        { id: 16, name: "Viktor Gyökeres", position: 10 },
        { id: 51, name: "William Saliba", position: 11 },
        { id: 17, name: "Bukayo Saka", position: 12 },
        { id: 52, name: "Gabriel Magalhães", position: 13 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 14 },
        { id: 53, name: "Matthijs de Ligt", position: 15 },
        { id: 19, name: "Marcus Rashford", position: 16 },
        { id: 54, name: "Alphonso Davies", position: 17 },
        { id: 20, name: "Rafael Leão", position: 18 },
        { id: 55, name: "Kyle Walker", position: 19 },
        { id: 26, name: "Bernardo Silva", position: 20 },
        { id: 56, name: "Dayot Upamecano", position: 21 },
        { id: 27, name: "Luka Modrić", position: 22 },
        { id: 57, name: "Éder Militão", position: 23 },
        { id: 28, name: "Toni Kroos", position: 24 },
        { id: 58, name: "Reece James", position: 25 },
        { id: 29, name: "Joshua Kimmich", position: 26 },
        { id: 59, name: "Ben White", position: 27 },
        { id: 30, name: "Declan Rice", position: 28 },
        { id: 60, name: "John Stones", position: 29 }
    ],
    12: [
        { id: 31, name: "Martin Ødegaard", position: 0 },
        { id: 61, name: "Jurrien Timber", position: 1 },
        { id: 32, name: "Bruno Fernandes", position: 2 },
        { id: 62, name: "Cole Palmer", position: 3 },
        { id: 33, name: "Frenkie de Jong", position: 4 },
        { id: 63, name: "Bruno Guimarães", position: 5 },
        { id: 34, name: "Federico Valverde", position: 6 },
        { id: 64, name: "Jarrod Bowen", position: 7 },
        { id: 35, name: "Jamal Musiala", position: 8 },
        { id: 65, name: "Dominik Szoboszlai", position: 9 },
        { id: 36, name: "Lamine Yamal", position: 10 },
        { id: 1, name: "Lionel Messi", position: 11 },
        { id: 37, name: "Enzo Fernández", position: 12 },
        { id: 2, name: "Cristiano Ronaldo", position: 13 },
        { id: 38, name: "Eduardo Camavinga", position: 14 },
        { id: 3, name: "Kylian Mbappé", position: 15 },
        { id: 39, name: "Florian Wirtz", position: 16 },
        { id: 4, name: "Erling Haaland", position: 17 },
        { id: 40, name: "James Maddison", position: 18 },
        { id: 5, name: "Neymar", position: 19 },
        { id: 41, name: "Virgil van Dijk", position: 20 },
        { id: 6, name: "Mohamed Salah", position: 21 },
        { id: 42, name: "Sergio Ramos", position: 22 },
        { id: 7, name: "Vinícius Júnior", position: 23 },
        { id: 43, name: "Antonio Rüdiger", position: 24 },
        { id: 8, name: "Harry Kane", position: 25 },
        { id: 44, name: "Rúben Dias", position: 26 },
        { id: 9, name: "Sadio Mané", position: 27 },
        { id: 45, name: "Marquinhos", position: 28 },
        { id: 10, name: "Son Heung-min", position: 29 }
    ],
    13: [
        { id: 11, name: "Robert Lewandowski", position: 0 },
        { id: 46, name: "João Cancelo", position: 1 },
        { id: 12, name: "Victor Osimhen", position: 2 },
        { id: 47, name: "Trent Alexander-Arnold", position: 3 },
        { id: 13, name: "Antoine Griezmann", position: 4 },
        { id: 48, name: "Achraf Hakimi", position: 5 },
        { id: 14, name: "Lautaro Martínez", position: 6 },
        { id: 49, name: "Theo Hernández", position: 7 },
        { id: 15, name: "Julián Álvarez", position: 8 },
        { id: 50, name: "Jules Koundé", position: 9 },
        { id: 16, name: "Viktor Gyökeres", position: 10 },
        { id: 51, name: "William Saliba", position: 11 },
        { id: 17, name: "Bukayo Saka", position: 12 },
        { id: 21, name: "Kevin De Bruyne", position: 13 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 14 },
        { id: 22, name: "Jude Bellingham", position: 15 },
        { id: 19, name: "Marcus Rashford", position: 16 },
        { id: 23, name: "Pedri", position: 17 },
        { id: 20, name: "Rafael Leão", position: 18 },
        { id: 24, name: "Rodri", position: 19 },
        { id: 52, name: "Gabriel Magalhães", position: 20 },
        { id: 25, name: "Phil Foden", position: 21 },
        { id: 53, name: "Matthijs de Ligt", position: 22 },
        { id: 26, name: "Bernardo Silva", position: 23 },
        { id: 54, name: "Alphonso Davies", position: 24 },
        { id: 27, name: "Luka Modrić", position: 25 },
        { id: 55, name: "Kyle Walker", position: 26 },
        { id: 28, name: "Toni Kroos", position: 27 },
        { id: 56, name: "Dayot Upamecano", position: 28 },
        { id: 29, name: "Joshua Kimmich", position: 29 }
    ],
    14: [
        { id: 30, name: "Declan Rice", position: 0 },
        { id: 57, name: "Éder Militão", position: 1 },
        { id: 31, name: "Martin Ødegaard", position: 2 },
        { id: 58, name: "Reece James", position: 3 },
        { id: 32, name: "Bruno Fernandes", position: 4 },
        { id: 59, name: "Ben White", position: 5 },
        { id: 33, name: "Frenkie de Jong", position: 6 },
        { id: 60, name: "John Stones", position: 7 },
        { id: 34, name: "Federico Valverde", position: 8 },
        { id: 61, name: "Jurrien Timber", position: 9 },
        { id: 35, name: "Jamal Musiala", position: 10 },
        { id: 1, name: "Lionel Messi", position: 11 },
        { id: 36, name: "Lamine Yamal", position: 12 },
        { id: 2, name: "Cristiano Ronaldo", position: 13 },
        { id: 37, name: "Enzo Fernández", position: 14 },
        { id: 3, name: "Kylian Mbappé", position: 15 },
        { id: 38, name: "Eduardo Camavinga", position: 16 },
        { id: 4, name: "Erling Haaland", position: 17 },
        { id: 39, name: "Florian Wirtz", position: 18 },
        { id: 5, name: "Neymar", position: 19 },
        { id: 40, name: "James Maddison", position: 20 },
        { id: 41, name: "Virgil van Dijk", position: 21 },
        { id: 6, name: "Mohamed Salah", position: 22 },
        { id: 62, name: "Cole Palmer", position: 23 },
        { id: 7, name: "Vinícius Júnior", position: 24 },
        { id: 63, name: "Bruno Guimarães", position: 25 },
        { id: 8, name: "Harry Kane", position: 26 },
        { id: 64, name: "Jarrod Bowen", position: 27 },
        { id: 42, name: "Sergio Ramos", position: 28 },
        { id: 65, name: "Dominik Szoboszlai", position: 29 }
    ],
    15: [
        { id: 9, name: "Sadio Mané", position: 0 },
        { id: 43, name: "Antonio Rüdiger", position: 1 },
        { id: 10, name: "Son Heung-min", position: 2 },
        { id: 44, name: "Rúben Dias", position: 3 },
        { id: 11, name: "Robert Lewandowski", position: 4 },
        { id: 45, name: "Marquinhos", position: 5 },
        { id: 12, name: "Victor Osimhen", position: 6 },
        { id: 46, name: "João Cancelo", position: 7 },
        { id: 13, name: "Antoine Griezmann", position: 8 },
        { id: 47, name: "Trent Alexander-Arnold", position: 9 },
        { id: 14, name: "Lautaro Martínez", position: 10 },
        { id: 48, name: "Achraf Hakimi", position: 11 },
        { id: 15, name: "Julián Álvarez", position: 12 },
        { id: 49, name: "Theo Hernández", position: 13 },
        { id: 16, name: "Viktor Gyökeres", position: 14 },
        { id: 50, name: "Jules Koundé", position: 15 },
        { id: 17, name: "Bukayo Saka", position: 16 },
        { id: 51, name: "William Saliba", position: 17 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 18 },
        { id: 52, name: "Gabriel Magalhães", position: 19 },
        { id: 19, name: "Marcus Rashford", position: 20 },
        { id: 53, name: "Matthijs de Ligt", position: 21 },
        { id: 20, name: "Rafael Leão", position: 22 },
        { id: 54, name: "Alphonso Davies", position: 23 },
        { id: 21, name: "Kevin De Bruyne", position: 24 },
        { id: 55, name: "Kyle Walker", position: 25 },
        { id: 22, name: "Jude Bellingham", position: 26 },
        { id: 56, name: "Dayot Upamecano", position: 27 },
        { id: 23, name: "Pedri", position: 28 },
        { id: 57, name: "Éder Militão", position: 29 }
    ],
    16: [
        { id: 24, name: "Rodri", position: 0 },
        { id: 58, name: "Reece James", position: 1 },
        { id: 25, name: "Phil Foden", position: 2 },
        { id: 59, name: "Ben White", position: 3 },
        { id: 26, name: "Bernardo Silva", position: 4 },
        { id: 60, name: "John Stones", position: 5 },
        { id: 27, name: "Luka Modrić", position: 6 },
        { id: 61, name: "Jurrien Timber", position: 7 },
        { id: 28, name: "Toni Kroos", position: 8 },
        { id: 62, name: "Cole Palmer", position: 9 },
        { id: 29, name: "Joshua Kimmich", position: 10 },
        { id: 63, name: "Bruno Guimarães", position: 11 },
        { id: 30, name: "Declan Rice", position: 12 },
        { id: 64, name: "Jarrod Bowen", position: 13 },
        { id: 31, name: "Martin Ødegaard", position: 14 },
        { id: 65, name: "Dominik Szoboszlai", position: 15 },
        { id: 32, name: "Bruno Fernandes", position: 16 },
        { id: 1, name: "Lionel Messi", position: 17 },
        { id: 33, name: "Frenkie de Jong", position: 18 },
        { id: 2, name: "Cristiano Ronaldo", position: 19 },
        { id: 34, name: "Federico Valverde", position: 20 },
        { id: 3, name: "Kylian Mbappé", position: 21 },
        { id: 35, name: "Jamal Musiala", position: 22 },
        { id: 4, name: "Erling Haaland", position: 23 },
        { id: 36, name: "Lamine Yamal", position: 24 },
        { id: 5, name: "Neymar", position: 25 },
        { id: 37, name: "Enzo Fernández", position: 26 },
        { id: 6, name: "Mohamed Salah", position: 27 },
        { id: 38, name: "Eduardo Camavinga", position: 28 },
        { id: 39, name: "Florian Wirtz", position: 29 }
    ],
    17: [
        { id: 40, name: "James Maddison", position: 0 },
        { id: 7, name: "Vinícius Júnior", position: 1 },
        { id: 41, name: "Virgil van Dijk", position: 2 },
        { id: 8, name: "Harry Kane", position: 3 },
        { id: 42, name: "Sergio Ramos", position: 4 },
        { id: 9, name: "Sadio Mané", position: 5 },
        { id: 43, name: "Antonio Rüdiger", position: 6 },
        { id: 10, name: "Son Heung-min", position: 7 },
        { id: 44, name: "Rúben Dias", position: 8 },
        { id: 11, name: "Robert Lewandowski", position: 9 },
        { id: 45, name: "Marquinhos", position: 10 },
        { id: 12, name: "Victor Osimhen", position: 11 },
        { id: 46, name: "João Cancelo", position: 12 },
        { id: 13, name: "Antoine Griezmann", position: 13 },
        { id: 47, name: "Trent Alexander-Arnold", position: 14 },
        { id: 14, name: "Lautaro Martínez", position: 15 },
        { id: 48, name: "Achraf Hakimi", position: 16 },
        { id: 15, name: "Julián Álvarez", position: 17 },
        { id: 49, name: "Theo Hernández", position: 18 },
        { id: 16, name: "Viktor Gyökeres", position: 19 },
        { id: 50, name: "Jules Koundé", position: 20 },
        { id: 17, name: "Bukayo Saka", position: 21 },
        { id: 51, name: "William Saliba", position: 22 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 23 },
        { id: 52, name: "Gabriel Magalhães", position: 24 },
        { id: 19, name: "Marcus Rashford", position: 25 },
        { id: 53, name: "Matthijs de Ligt", position: 26 },
        { id: 20, name: "Rafael Leão", position: 27 },
        { id: 54, name: "Alphonso Davies", position: 28 },
        { id: 55, name: "Kyle Walker", position: 29 }
    ],
    18: [
        { id: 56, name: "Dayot Upamecano", position: 0 },
        { id: 21, name: "Kevin De Bruyne", position: 1 },
        { id: 57, name: "Éder Militão", position: 2 },
        { id: 22, name: "Jude Bellingham", position: 3 },
        { id: 58, name: "Reece James", position: 4 },
        { id: 23, name: "Pedri", position: 5 },
        { id: 59, name: "Ben White", position: 6 },
        { id: 24, name: "Rodri", position: 7 },
        { id: 60, name: "John Stones", position: 8 },
        { id: 25, name: "Phil Foden", position: 9 },
        { id: 61, name: "Jurrien Timber", position: 10 },
        { id: 26, name: "Bernardo Silva", position: 11 },
        { id: 62, name: "Cole Palmer", position: 12 },
        { id: 27, name: "Luka Modrić", position: 13 },
        { id: 63, name: "Bruno Guimarães", position: 14 },
        { id: 28, name: "Toni Kroos", position: 15 },
        { id: 64, name: "Jarrod Bowen", position: 16 },
        { id: 29, name: "Joshua Kimmich", position: 17 },
        { id: 65, name: "Dominik Szoboszlai", position: 18 },
        { id: 30, name: "Declan Rice", position: 19 },
        { id: 1, name: "Lionel Messi", position: 20 },
        { id: 31, name: "Martin Ødegaard", position: 21 },
        { id: 2, name: "Cristiano Ronaldo", position: 22 },
        { id: 32, name: "Bruno Fernandes", position: 23 },
        { id: 3, name: "Kylian Mbappé", position: 24 },
        { id: 33, name: "Frenkie de Jong", position: 25 },
        { id: 4, name: "Erling Haaland", position: 26 },
        { id: 34, name: "Federico Valverde", position: 27 },
        { id: 5, name: "Neymar", position: 28 },
        { id: 35, name: "Jamal Musiala", position: 29 }
    ],
    19: [
        { id: 36, name: "Lamine Yamal", position: 0 },
        { id: 6, name: "Mohamed Salah", position: 1 },
        { id: 37, name: "Enzo Fernández", position: 2 },
        { id: 7, name: "Vinícius Júnior", position: 3 },
        { id: 38, name: "Eduardo Camavinga", position: 4 },
        { id: 8, name: "Harry Kane", position: 5 },
        { id: 39, name: "Florian Wirtz", position: 6 },
        { id: 40, name: "James Maddison", position: 7 },
        { id: 41, name: "Virgil van Dijk", position: 8 },
        { id: 9, name: "Sadio Mané", position: 9 },
        { id: 42, name: "Sergio Ramos", position: 10 },
        { id: 10, name: "Son Heung-min", position: 11 },
        { id: 43, name: "Antonio Rüdiger", position: 12 },
        { id: 11, name: "Robert Lewandowski", position: 13 },
        { id: 44, name: "Rúben Dias", position: 14 },
        { id: 12, name: "Victor Osimhen", position: 15 },
        { id: 45, name: "Marquinhos", position: 16 },
        { id: 46, name: "João Cancelo", position: 17 },
        { id: 47, name: "Trent Alexander-Arnold", position: 18 },
        { id: 48, name: "Achraf Hakimi", position: 19 },
        { id: 13, name: "Antoine Griezmann", position: 20 },
        { id: 49, name: "Theo Hernández", position: 21 },
        { id: 14, name: "Lautaro Martínez", position: 22 },
        { id: 50, name: "Jules Koundé", position: 23 },
        { id: 15, name: "Julián Álvarez", position: 24 },
        { id: 51, name: "William Saliba", position: 25 },
        { id: 16, name: "Viktor Gyökeres", position: 26 },
        { id: 52, name: "Gabriel Magalhães", position: 27 },
        { id: 17, name: "Bukayo Saka", position: 28 },
        { id: 53, name: "Matthijs de Ligt", position: 29 }
    ],
    20: [
        { id: 18, name: "Khvicha Kvaratskhelia", position: 0 },
        { id: 54, name: "Alphonso Davies", position: 1 },
        { id: 19, name: "Marcus Rashford", position: 2 },
        { id: 55, name: "Kyle Walker", position: 3 },
        { id: 20, name: "Rafael Leão", position: 4 },
        { id: 56, name: "Dayot Upamecano", position: 5 },
        { id: 21, name: "Kevin De Bruyne", position: 6 },
        { id: 57, name: "Éder Militão", position: 7 },
        { id: 22, name: "Jude Bellingham", position: 8 },
        { id: 58, name: "Reece James", position: 9 },
        { id: 23, name: "Pedri", position: 10 },
        { id: 59, name: "Ben White", position: 11 },
        { id: 24, name: "Rodri", position: 12 },
        { id: 60, name: "John Stones", position: 13 },
        { id: 25, name: "Phil Foden", position: 14 },
        { id: 61, name: "Jurrien Timber", position: 15 },
        { id: 26, name: "Bernardo Silva", position: 16 },
        { id: 62, name: "Cole Palmer", position: 17 },
        { id: 27, name: "Luka Modrić", position: 18 },
        { id: 63, name: "Bruno Guimarães", position: 19 },
        { id: 28, name: "Toni Kroos", position: 20 },
        { id: 64, name: "Jarrod Bowen", position: 21 },
        { id: 29, name: "Joshua Kimmich", position: 22 },
        { id: 65, name: "Dominik Szoboszlai", position: 23 },
        { id: 30, name: "Declan Rice", position: 24 },
        { id: 1, name: "Lionel Messi", position: 25 },
        { id: 31, name: "Martin Ødegaard", position: 26 },
        { id: 2, name: "Cristiano Ronaldo", position: 27 },
        { id: 32, name: "Bruno Fernandes", position: 28 },
        { id: 33, name: "Frenkie de Jong", position: 29 }
    ],
    21: [
        { id: 34, name: "Federico Valverde", position: 0 },
        { id: 3, name: "Kylian Mbappé", position: 1 },
        { id: 35, name: "Jamal Musiala", position: 2 },
        { id: 4, name: "Erling Haaland", position: 3 },
        { id: 36, name: "Lamine Yamal", position: 4 },
        { id: 5, name: "Neymar", position: 5 },
        { id: 37, name: "Enzo Fernández", position: 6 },
        { id: 6, name: "Mohamed Salah", position: 7 },
        { id: 38, name: "Eduardo Camavinga", position: 8 },
        { id: 7, name: "Vinícius Júnior", position: 9 },
        { id: 39, name: "Florian Wirtz", position: 10 },
        { id: 8, name: "Harry Kane", position: 11 },
        { id: 40, name: "James Maddison", position: 12 },
        { id: 41, name: "Virgil van Dijk", position: 13 },
        { id: 9, name: "Sadio Mané", position: 14 },
        { id: 42, name: "Sergio Ramos", position: 15 },
        { id: 10, name: "Son Heung-min", position: 16 },
        { id: 43, name: "Antonio Rüdiger", position: 17 },
        { id: 11, name: "Robert Lewandowski", position: 18 },
        { id: 44, name: "Rúben Dias", position: 19 },
        { id: 12, name: "Victor Osimhen", position: 20 },
        { id: 45, name: "Marquinhos", position: 21 },
        { id: 46, name: "João Cancelo", position: 22 },
        { id: 47, name: "Trent Alexander-Arnold", position: 23 },
        { id: 48, name: "Achraf Hakimi", position: 24 },
        { id: 13, name: "Antoine Griezmann", position: 25 },
        { id: 49, name: "Theo Hernández", position: 26 },
        { id: 14, name: "Lautaro Martínez", position: 27 },
        { id: 50, name: "Jules Koundé", position: 28 },
        { id: 15, name: "Julián Álvarez", position: 29 }
    ],
    22: [
        { id: 51, name: "William Saliba", position: 0 },
        { id: 16, name: "Viktor Gyökeres", position: 1 },
        { id: 52, name: "Gabriel Magalhães", position: 2 },
        { id: 17, name: "Bukayo Saka", position: 3 },
        { id: 53, name: "Matthijs de Ligt", position: 4 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 5 },
        { id: 54, name: "Alphonso Davies", position: 6 },
        { id: 19, name: "Marcus Rashford", position: 7 },
        { id: 55, name: "Kyle Walker", position: 8 },
        { id: 20, name: "Rafael Leão", position: 9 },
        { id: 56, name: "Dayot Upamecano", position: 10 },
        { id: 21, name: "Kevin De Bruyne", position: 11 },
        { id: 57, name: "Éder Militão", position: 12 },
        { id: 22, name: "Jude Bellingham", position: 13 },
        { id: 58, name: "Reece James", position: 14 },
        { id: 23, name: "Pedri", position: 15 },
        { id: 59, name: "Ben White", position: 16 },
        { id: 24, name: "Rodri", position: 17 },
        { id: 60, name: "John Stones", position: 18 },
        { id: 25, name: "Phil Foden", position: 19 },
        { id: 61, name: "Jurrien Timber", position: 20 },
        { id: 26, name: "Bernardo Silva", position: 21 },
        { id: 62, name: "Cole Palmer", position: 22 },
        { id: 27, name: "Luka Modrić", position: 23 },
        { id: 63, name: "Bruno Guimarães", position: 24 },
        { id: 28, name: "Toni Kroos", position: 25 },
        { id: 64, name: "Jarrod Bowen", position: 26 },
        { id: 29, name: "Joshua Kimmich", position: 27 },
        { id: 65, name: "Dominik Szoboszlai", position: 28 },
        { id: 30, name: "Declan Rice", position: 29 }
    ],
    23: [
        { id: 1, name: "Lionel Messi", position: 0 },
        { id: 31, name: "Martin Ødegaard", position: 1 },
        { id: 2, name: "Cristiano Ronaldo", position: 2 },
        { id: 32, name: "Bruno Fernandes", position: 3 },
        { id: 3, name: "Kylian Mbappé", position: 4 },
        { id: 33, name: "Frenkie de Jong", position: 5 },
        { id: 4, name: "Erling Haaland", position: 6 },
        { id: 34, name: "Federico Valverde", position: 7 },
        { id: 5, name: "Neymar", position: 8 },
        { id: 35, name: "Jamal Musiala", position: 9 },
        { id: 6, name: "Mohamed Salah", position: 10 },
        { id: 36, name: "Lamine Yamal", position: 11 },
        { id: 7, name: "Vinícius Júnior", position: 12 },
        { id: 37, name: "Enzo Fernández", position: 13 },
        { id: 8, name: "Harry Kane", position: 14 },
        { id: 38, name: "Eduardo Camavinga", position: 15 },
        { id: 9, name: "Sadio Mané", position: 16 },
        { id: 39, name: "Florian Wirtz", position: 17 },
        { id: 10, name: "Son Heung-min", position: 18 },
        { id: 40, name: "James Maddison", position: 19 },
        { id: 41, name: "Virgil van Dijk", position: 20 },
        { id: 11, name: "Robert Lewandowski", position: 21 },
        { id: 42, name: "Sergio Ramos", position: 22 },
        { id: 12, name: "Victor Osimhen", position: 23 },
        { id: 43, name: "Antonio Rüdiger", position: 24 },
        { id: 13, name: "Antoine Griezmann", position: 25 },
        { id: 44, name: "Rúben Dias", position: 26 },
        { id: 14, name: "Lautaro Martínez", position: 27 },
        { id: 45, name: "Marquinhos", position: 28 },
        { id: 15, name: "Julián Álvarez", position: 29 }
    ],
    24: [
        { id: 46, name: "João Cancelo", position: 0 },
        { id: 16, name: "Viktor Gyökeres", position: 1 },
        { id: 47, name: "Trent Alexander-Arnold", position: 2 },
        { id: 17, name: "Bukayo Saka", position: 3 },
        { id: 48, name: "Achraf Hakimi", position: 4 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 5 },
        { id: 49, name: "Theo Hernández", position: 6 },
        { id: 19, name: "Marcus Rashford", position: 7 },
        { id: 50, name: "Jules Koundé", position: 8 },
        { id: 20, name: "Rafael Leão", position: 9 },
        { id: 51, name: "William Saliba", position: 10 },
        { id: 21, name: "Kevin De Bruyne", position: 11 },
        { id: 52, name: "Gabriel Magalhães", position: 12 },
        { id: 22, name: "Jude Bellingham", position: 13 },
        { id: 53, name: "Matthijs de Ligt", position: 14 },
        { id: 23, name: "Pedri", position: 15 },
        { id: 54, name: "Alphonso Davies", position: 16 },
        { id: 24, name: "Rodri", position: 17 },
        { id: 55, name: "Kyle Walker", position: 18 },
        { id: 25, name: "Phil Foden", position: 19 },
        { id: 56, name: "Dayot Upamecano", position: 20 },
        { id: 26, name: "Bernardo Silva", position: 21 },
        { id: 57, name: "Éder Militão", position: 22 },
        { id: 27, name: "Luka Modrić", position: 23 },
        { id: 58, name: "Reece James", position: 24 },
        { id: 28, name: "Toni Kroos", position: 25 },
        { id: 59, name: "Ben White", position: 26 },
        { id: 29, name: "Joshua Kimmich", position: 27 },
        { id: 60, name: "John Stones", position: 28 },
        { id: 30, name: "Declan Rice", position: 29 }
    ],
    25: [
        { id: 61, name: "Jurrien Timber", position: 0 },
        { id: 31, name: "Martin Ødegaard", position: 1 },
        { id: 62, name: "Cole Palmer", position: 2 },
        { id: 32, name: "Bruno Fernandes", position: 3 },
        { id: 63, name: "Bruno Guimarães", position: 4 },
        { id: 33, name: "Frenkie de Jong", position: 5 },
        { id: 64, name: "Jarrod Bowen", position: 6 },
        { id: 34, name: "Federico Valverde", position: 7 },
        { id: 65, name: "Dominik Szoboszlai", position: 8 },
        { id: 35, name: "Jamal Musiala", position: 9 },
        { id: 1, name: "Lionel Messi", position: 10 },
        { id: 36, name: "Lamine Yamal", position: 11 },
        { id: 2, name: "Cristiano Ronaldo", position: 12 },
        { id: 37, name: "Enzo Fernández", position: 13 },
        { id: 3, name: "Kylian Mbappé", position: 14 },
        { id: 38, name: "Eduardo Camavinga", position: 15 },
        { id: 4, name: "Erling Haaland", position: 16 },
        { id: 39, name: "Florian Wirtz", position: 17 },
        { id: 5, name: "Neymar", position: 18 },
        { id: 40, name: "James Maddison", position: 19 },
        { id: 41, name: "Virgil van Dijk", position: 20 },
        { id: 6, name: "Mohamed Salah", position: 21 },
        { id: 42, name: "Sergio Ramos", position: 22 },
        { id: 7, name: "Vinícius Júnior", position: 23 },
        { id: 43, name: "Antonio Rüdiger", position: 24 },
        { id: 8, name: "Harry Kane", position: 25 },
        { id: 44, name: "Rúben Dias", position: 26 },
        { id: 9, name: "Sadio Mané", position: 27 },
        { id: 45, name: "Marquinhos", position: 28 },
        { id: 10, name: "Son Heung-min", position: 29 }
    ],
    26: [
        { id: 11, name: "Robert Lewandowski", position: 0 },
        { id: 46, name: "João Cancelo", position: 1 },
        { id: 12, name: "Victor Osimhen", position: 2 },
        { id: 47, name: "Trent Alexander-Arnold", position: 3 },
        { id: 13, name: "Antoine Griezmann", position: 4 },
        { id: 48, name: "Achraf Hakimi", position: 5 },
        { id: 14, name: "Lautaro Martínez", position: 6 },
        { id: 49, name: "Theo Hernández", position: 7 },
        { id: 15, name: "Julián Álvarez", position: 8 },
        { id: 50, name: "Jules Koundé", position: 9 },
        { id: 16, name: "Viktor Gyökeres", position: 10 },
        { id: 51, name: "William Saliba", position: 11 },
        { id: 17, name: "Bukayo Saka", position: 12 },
        { id: 52, name: "Gabriel Magalhães", position: 13 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 14 },
        { id: 53, name: "Matthijs de Ligt", position: 15 },
        { id: 19, name: "Marcus Rashford", position: 16 },
        { id: 54, name: "Alphonso Davies", position: 17 },
        { id: 20, name: "Rafael Leão", position: 18 },
        { id: 55, name: "Kyle Walker", position: 19 },
        { id: 21, name: "Kevin De Bruyne", position: 20 },
        { id: 56, name: "Dayot Upamecano", position: 21 },
        { id: 22, name: "Jude Bellingham", position: 22 },
        { id: 57, name: "Éder Militão", position: 23 },
        { id: 23, name: "Pedri", position: 24 },
        { id: 58, name: "Reece James", position: 25 },
        { id: 24, name: "Rodri", position: 26 },
        { id: 59, name: "Ben White", position: 27 },
        { id: 25, name: "Phil Foden", position: 28 },
        { id: 60, name: "John Stones", position: 29 }
    ],
    27: [
        { id: 26, name: "Bernardo Silva", position: 0 },
        { id: 61, name: "Jurrien Timber", position: 1 },
        { id: 27, name: "Luka Modrić", position: 2 },
        { id: 62, name: "Cole Palmer", position: 3 },
        { id: 28, name: "Toni Kroos", position: 4 },
        { id: 63, name: "Bruno Guimarães", position: 5 },
        { id: 29, name: "Joshua Kimmich", position: 6 },
        { id: 64, name: "Jarrod Bowen", position: 7 },
        { id: 30, name: "Declan Rice", position: 8 },
        { id: 65, name: "Dominik Szoboszlai", position: 9 },
        { id: 1, name: "Lionel Messi", position: 10 },
        { id: 31, name: "Martin Ødegaard", position: 11 },
        { id: 2, name: "Cristiano Ronaldo", position: 12 },
        { id: 32, name: "Bruno Fernandes", position: 13 },
        { id: 3, name: "Kylian Mbappé", position: 14 },
        { id: 33, name: "Frenkie de Jong", position: 15 },
        { id: 4, name: "Erling Haaland", position: 16 },
        { id: 34, name: "Federico Valverde", position: 17 },
        { id: 5, name: "Neymar", position: 18 },
        { id: 35, name: "Jamal Musiala", position: 19 },
        { id: 41, name: "Virgil van Dijk", position: 20 },
        { id: 6, name: "Mohamed Salah", position: 21 },
        { id: 42, name: "Sergio Ramos", position: 22 },
        { id: 7, name: "Vinícius Júnior", position: 23 },
        { id: 43, name: "Antonio Rüdiger", position: 24 },
        { id: 8, name: "Harry Kane", position: 25 },
        { id: 44, name: "Rúben Dias", position: 26 },
        { id: 36, name: "Lamine Yamal", position: 27 },
        { id: 45, name: "Marquinhos", position: 28 },
        { id: 37, name: "Enzo Fernández", position: 29 }
    ],
    28: [
        { id: 46, name: "João Cancelo", position: 0 },
        { id: 9, name: "Sadio Mané", position: 1 },
        { id: 47, name: "Trent Alexander-Arnold", position: 2 },
        { id: 10, name: "Son Heung-min", position: 3 },
        { id: 48, name: "Achraf Hakimi", position: 4 },
        { id: 11, name: "Robert Lewandowski", position: 5 },
        { id: 49, name: "Theo Hernández", position: 6 },
        { id: 12, name: "Victor Osimhen", position: 7 },
        { id: 50, name: "Jules Koundé", position: 8 },
        { id: 13, name: "Antoine Griezmann", position: 9 },
        { id: 51, name: "William Saliba", position: 10 },
        { id: 14, name: "Lautaro Martínez", position: 11 },
        { id: 52, name: "Gabriel Magalhães", position: 12 },
        { id: 15, name: "Julián Álvarez", position: 13 },
        { id: 53, name: "Matthijs de Ligt", position: 14 },
        { id: 16, name: "Viktor Gyökeres", position: 15 },
        { id: 54, name: "Alphonso Davies", position: 16 },
        { id: 17, name: "Bukayo Saka", position: 17 },
        { id: 55, name: "Kyle Walker", position: 18 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 19 },
        { id: 56, name: "Dayot Upamecano", position: 20 },
        { id: 19, name: "Marcus Rashford", position: 21 },
        { id: 57, name: "Éder Militão", position: 22 },
        { id: 20, name: "Rafael Leão", position: 23 },
        { id: 58, name: "Reece James", position: 24 },
        { id: 21, name: "Kevin De Bruyne", position: 25 },
        { id: 59, name: "Ben White", position: 26 },
        { id: 22, name: "Jude Bellingham", position: 27 },
        { id: 60, name: "John Stones", position: 28 },
        { id: 23, name: "Pedri", position: 29 }
    ],
    29: [
        { id: 24, name: "Rodri", position: 0 },
        { id: 61, name: "Jurrien Timber", position: 1 },
        { id: 25, name: "Phil Foden", position: 2 },
        { id: 62, name: "Cole Palmer", position: 3 },
        { id: 26, name: "Bernardo Silva", position: 4 },
        { id: 63, name: "Bruno Guimarães", position: 5 },
        { id: 27, name: "Luka Modrić", position: 6 },
        { id: 64, name: "Jarrod Bowen", position: 7 },
        { id: 28, name: "Toni Kroos", position: 8 },
        { id: 65, name: "Dominik Szoboszlai", position: 9 },
        { id: 29, name: "Joshua Kimmich", position: 10 },
        { id: 1, name: "Lionel Messi", position: 11 },
        { id: 30, name: "Declan Rice", position: 12 },
        { id: 2, name: "Cristiano Ronaldo", position: 13 },
        { id: 31, name: "Martin Ødegaard", position: 14 },
        { id: 3, name: "Kylian Mbappé", position: 15 },
        { id: 32, name: "Bruno Fernandes", position: 16 },
        { id: 4, name: "Erling Haaland", position: 17 },
        { id: 33, name: "Frenkie de Jong", position: 18 },
        { id: 5, name: "Neymar", position: 19 },
        { id: 34, name: "Federico Valverde", position: 20 },
        { id: 6, name: "Mohamed Salah", position: 21 },
        { id: 35, name: "Jamal Musiala", position: 22 },
        { id: 38, name: "Eduardo Camavinga", position: 23 },
        { id: 39, name: "Florian Wirtz", position: 24 },
        { id: 40, name: "James Maddison", position: 25 },
        { id: 7, name: "Vinícius Júnior", position: 26 },
        { id: 8, name: "Harry Kane", position: 27 },
        { id: 9, name: "Sadio Mané", position: 28 },
        { id: 10, name: "Son Heung-min", position: 29 }
    ],
    30: [
        { id: 11, name: "Robert Lewandowski", position: 0 },
        { id: 12, name: "Victor Osimhen", position: 1 },
        { id: 13, name: "Antoine Griezmann", position: 2 },
        { id: 14, name: "Lautaro Martínez", position: 3 },
        { id: 15, name: "Julián Álvarez", position: 4 },
        { id: 16, name: "Viktor Gyökeres", position: 5 },
        { id: 17, name: "Bukayo Saka", position: 6 },
        { id: 18, name: "Khvicha Kvaratskhelia", position: 7 },
        { id: 19, name: "Marcus Rashford", position: 8 },
        { id: 20, name: "Rafael Leão", position: 9 },
        { id: 36, name: "Lamine Yamal", position: 10 },
        { id: 41, name: "Virgil van Dijk", position: 11 },
        { id: 42, name: "Sergio Ramos", position: 12 },
        { id: 43, name: "Antonio Rüdiger", position: 13 },
        { id: 44, name: "Rúben Dias", position: 14 },
        { id: 45, name: "Marquinhos", position: 15 },
        { id: 46, name: "João Cancelo", position: 16 },
        { id: 47, name: "Trent Alexander-Arnold", position: 17 },
        { id: 48, name: "Achraf Hakimi", position: 18 },
        { id: 49, name: "Theo Hernández", position: 19 },
        { id: 50, name: "Jules Koundé", position: 20 },
        { id: 51, name: "William Saliba", position: 21 },
        { id: 52, name: "Gabriel Magalhães", position: 22 },
        { id: 53, name: "Matthijs de Ligt", position: 23 },
        { id: 54, name: "Alphonso Davies", position: 24 },
        { id: 55, name: "Kyle Walker", position: 25 },
        { id: 56, name: "Dayot Upamecano", position: 26 },
        { id: 57, name: "Éder Militão", position: 27 },
        { id: 58, name: "Reece James", position: 28 },
        { id: 59, name: "Ben White", position: 29 }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PREDETERMINED_ROUNDS };
}
// 90 Words Database for Guess The Word Game
// Football-related terms, famous players, teams, and stadiums

const WORDS_DATABASE = [
    // FOOTBALL TERMS (30)
    { id: 1, word: "GOALKEEPER", category: "Position" },
    { id: 2, word: "DEFENDER", category: "Position" },
    { id: 3, word: "MIDFIELDER", category: "Position" },
    { id: 4, word: "FORWARD", category: "Position" },
    { id: 5, word: "STRIKER", category: "Position" },
    { id: 6, word: "WINGER", category: "Position" },
    { id: 7, word: "CAPTAIN", category: "Role" },
    { id: 8, word: "MANAGER", category: "Role" },
    { id: 9, word: "REFEREE", category: "Role" },
    { id: 10, word: "LINESMAN", category: "Role" },
    { id: 11, word: "PENALTY", category: "Term" },
    { id: 12, word: "CORNER", category: "Term" },
    { id: 13, word: "OFFSIDE", category: "Term" },
    { id: 14, word: "HEADER", category: "Term" },
    { id: 15, word: "VOLLEY", category: "Term" },
    { id: 16, word: "DRIBBLE", category: "Term" },
    { id: 17, word: "TACKLE", category: "Term" },
    { id: 18, word: "PASSING", category: "Term" },
    { id: 19, word: "SHOOTING", category: "Term" },
    { id: 20, word: "SAVINGS", category: "Term" },
    { id: 21, word: "FORMATION", category: "Term" },
    { id: 22, word: "SUBSTITUTE", category: "Term" },
    { id: 23, word: "INJURY", category: "Term" },
    { id: 24, word: "VAR", category: "Term" },
    { id: 25, word: "FLAG", category: "Term" },
    { id: 26, word: "WHISTLE", category: "Term" },
    { id: 27, word: "KICKOFF", category: "Term" },
    { id: 28, word: "HALFTIME", category: "Term" },
    { id: 29, word: "FULLTIME", category: "Term" },
    { id: 30, word: "EXTRA", category: "Term" },
    
    // FAMOUS PLAYERS (30)
    { id: 31, word: "PELE", category: "Legend" },
    { id: 32, word: "MARADONA", category: "Legend" },
    { id: 33, word: "ZIDANE", category: "Legend" },
    { id: 34, word: "RONALDINHO", category: "Legend" },
    { id: 35, word: "BECKHAM", category: "Legend" },
    { id: 36, word: "ROONEY", category: "Legend" },
    { id: 37, word: "SHEARER", category: "Legend" },
    { id: 38, word: "HENRY", category: "Legend" },
    { id: 39, word: "GERRARD", category: "Legend" },
    { id: 40, word: "LAMPARD", category: "Legend" },
    { id: 41, word: "TERRY", category: "Legend" },
    { id: 42, word: "FERDINAND", category: "Legend" },
    { id: 43, word: "NESTA", category: "Legend" },
    { id: 44, word: "MALDINI", category: "Legend" },
    { id: 45, word: "BUFFON", category: "Legend" },
    { id: 46, word: "CASILLAS", category: "Legend" },
    { id: 47, word: "CAFU", category: "Legend" },
    { id: 48, word: "ROBERTO", category: "Legend" },
    { id: 49, word: "KAKA", category: "Legend" },
    { id: 50, word: "RIVALDO", category: "Legend" },
    { id: 51, word: "FIGO", category: "Legend" },
    { id: 52, word: "RAUL", category: "Legend" },
    { id: 53, word: "SHEVCHENKO", category: "Legend" },
    { id: 54, word: "DROGBA", category: "Legend" },
    { id: 55, word: "LAMPARD", category: "Legend" },
    { id: 56, word: "GERARD", category: "Legend" },
    { id: 57, word: "SCHOLES", category: "Legend" },
    { id: 58, word: "GIGGS", category: "Legend" },
    { id: 59, word: "BECKENBAUER", category: "Legend" },
    { id: 60, word: "CRUYFF", category: "Legend" },
    
    // TEAMS & STADIUMS (30)
    { id: 61, word: "MADRID", category: "Team" },
    { id: 62, word: "BARCELONA", category: "Team" },
    { id: 63, word: "MANCHESTER", category: "Team" },
    { id: 64, word: "LIVERPOOL", category: "Team" },
    { id: 65, word: "CHELSEA", category: "Team" },
    { id: 66, word: "ARSENAL", category: "Team" },
    { id: 67, word: "TOTTENHAM", category: "Team" },
    { id: 68, word: "JUVENTUS", category: "Team" },
    { id: 69, word: "MILAN", category: "Team" },
    { id: 70, word: "INTER", category: "Team" },
    { id: 71, word: "NAPOLI", category: "Team" },
    { id: 72, word: "ROMA", category: "Team" },
    { id: 73, word: "BAYERN", category: "Team" },
    { id: 74, word: "DORTMUND", category: "Team" },
    { id: 75, word: "PSG", category: "Team" },
    { id: 76, word: "AJAX", category: "Team" },
    { id: 77, word: "PORTO", category: "Team" },
    { id: 78, word: "BENFICA", category: "Team" },
    { id: 79, word: "SPORTING", category: "Team" },
    { id: 80, word: "SEVILLA", category: "Team" },
    { id: 81, word: "VALENCIA", category: "Team" },
    { id: 82, word: "ATLETICO", category: "Team" },
    { id: 83, word: "WEMBLEY", category: "Stadium" },
    { id: 84, word: "CAMPNOU", category: "Stadium" },
    { id: 85, word: "BERNABEU", category: "Stadium" },
    { id: 86, word: "OLDTRAFFORD", category: "Stadium" },
    { id: 87, word: "ANFIELD", category: "Stadium" },
    { id: 88, word: "SANSIRO", category: "Stadium" },
    { id: 89, word: "ALLIANZ", category: "Stadium" },
    { id: 90, word: "MARACANA", category: "Stadium" }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WORDS_DATABASE };
}
/**
 * Guess Whoo - Complete Game Logic
 * 30 predetermined rounds, 6x5 grid, local images
 */

// Game State
let currentGameMode = null; // 'player' or 'word'
let currentRound = 1;
let secretPlayer = null;
let isPickMode = false;

// Word game state
let currentWord = null;
let currentWordDisplay = [];
let guessedLetters = [];
let remainingAttempts = 6;

// DOM Elements
const modeSelection = document.getElementById('mode-selection');
const gameContent = document.getElementById('game-content');
const modeButtons = document.querySelectorAll('.mode-btn');
const backBtn = document.getElementById('back-btn');
const gameTitle = document.getElementById('game-title');
const gameInstruction = document.getElementById('game-instruction');
const roundButtonsContainer = document.getElementById('round-buttons');
const playersGrid = document.getElementById('players-grid');
const playerBoard = document.getElementById('player-board');
const wordBoard = document.getElementById('word-board');
const secretInfo = document.getElementById('secret-info');
const revealBtn = document.getElementById('reveal-btn');
const newGameBtn = document.getElementById('new-game-btn');
const hideAllBtn = document.getElementById('hide-all-btn');
const showAllBtn = document.getElementById('show-all-btn');
const pickSecretBtn = document.getElementById('pick-secret-btn');

// Word game elements
const wordDisplay = document.getElementById('word-display');
const wordCategory = document.getElementById('word-category');
const attemptsLeft = document.getElementById('attempts-left');
const usedLetters = document.getElementById('used-letters');
const letterInput = document.getElementById('letter-input');
const guessBtn = document.getElementById('guess-btn');

// ====================
// Initialization
// ====================
document.addEventListener('DOMContentLoaded', () => {
    createRoundButtons();
    setupEventListeners();
    console.log('Guess Whoo initialized');
    alert('Game loaded! Click the mode buttons to start.');
});

// ====================
// Event Listeners
// ====================
function setupEventListeners() {
    // Mode selection
    console.log('Setting up event listeners, found mode buttons:', modeButtons.length);
    modeButtons.forEach((btn, index) => {
        console.log('Adding click listener to button', index, btn.dataset.mode);
        btn.addEventListener('click', (e) => {
            console.log('Button clicked!', e.target);
            alert('Mode button clicked: ' + btn.dataset.mode);
            const mode = btn.dataset.mode;
            selectGameMode(mode);
        });
    });

    // Back button
    backBtn.addEventListener('click', showModeSelection);

    // Control buttons
    newGameBtn.addEventListener('click', startNewGame);
    hideAllBtn.addEventListener('click', hideAllCards);
    showAllBtn.addEventListener('click', showAllCards);
    revealBtn.addEventListener('click', revealSecretPlayer);
    pickSecretBtn.addEventListener('click', togglePickMode);

    // Word game
    guessBtn.addEventListener('click', guessLetter);
    letterInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') guessLetter();
    });
}

// ====================
// Game Mode Selection
// ====================
function selectGameMode(mode) {
    currentGameMode = mode;
    modeSelection.classList.add('hidden');
    gameContent.classList.remove('hidden');

    if (mode === 'player') {
        setupPlayerMode();
    } else if (mode === 'word') {
        setupWordMode();
    }

    loadRound(1);
}

function showModeSelection() {
    currentGameMode = null;
    modeSelection.classList.remove('hidden');
    gameContent.classList.add('hidden');
    resetPickMode();
}

function setupPlayerMode() {
    gameTitle.textContent = 'Guess The Football Player';
    gameInstruction.textContent = 'Click cards to flip them and find the secret player!';
    playerBoard.classList.remove('hidden');
    wordBoard.classList.add('hidden');
    revealBtn.classList.remove('hidden');
    secretInfo.innerHTML = '<span class="hidden-text">???</span>';
}

function setupWordMode() {
    gameTitle.textContent = 'Guess The Word';
    gameInstruction.textContent = 'Guess letters to reveal the hidden football word!';
    playerBoard.classList.add('hidden');
    wordBoard.classList.remove('hidden');
    revealBtn.classList.add('hidden');
}

// ====================
// Round Management
// ====================
function createRoundButtons() {
    roundButtonsContainer.innerHTML = '';
    for (let i = 1; i <= 30; i++) {
        const btn = document.createElement('button');
        btn.className = 'round-btn';
        btn.textContent = i;
        btn.dataset.round = i;
        btn.addEventListener('click', () => loadRound(i));
        roundButtonsContainer.appendChild(btn);
    }
}

function loadRound(roundNum) {
    currentRound = roundNum;
    updateActiveRoundButton();

    if (currentGameMode === 'player') {
        loadPlayerRound(roundNum);
    } else if (currentGameMode === 'word') {
        loadWordRound(roundNum);
    }
}

function updateActiveRoundButton() {
    document.querySelectorAll('.round-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.round) === currentRound);
    });
}

// ====================
// Player Game Logic
// ====================
function loadPlayerRound(roundNum) {
    const roundData = PREDETERMINED_ROUNDS[roundNum];
    if (!roundData) {
        console.error('Round not found:', roundNum);
        return;
    }

    // Clear and render grid
    playersGrid.innerHTML = '';
    
    // Get 30 players for this round based on predetermined data
    const roundPlayers = roundData.map(slot => {
        const player = PLAYERS_DATABASE.find(p => p.id === slot.id);
        return { ...player, position: slot.position };
    });

    // Sort by position
    roundPlayers.sort((a, b) => a.position - b.position);

    // Render 30 cards in 6x5 grid
    roundPlayers.forEach((player, index) => {
        const card = createPlayerCard(player, index);
        playersGrid.appendChild(card);
    });

    // Select secret player (first player in round as default, or random)
    selectSecretPlayer(roundPlayers);

    console.log(`Loaded Round ${roundNum} with ${roundPlayers.length} players`);
}

function createPlayerCard(player, index) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.dataset.index = index;
    card.dataset.playerId = player.id;

    const initials = player.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <div class="player-image-container">
                    <img src="Images/${player.imageFile}" 
                         alt="${player.name}" 
                         class="player-image"
                         loading="lazy"
                         onerror="this.style.display='none'; this.parentElement.classList.add('image-failed');">
                    <div class="player-initials">${initials}</div>
                </div>
                <div class="player-info">
                    <div class="player-name">${player.name}</div>
                    <div class="player-nationality">${player.nationality}</div>
                </div>
            </div>
            <div class="card-back">
                <div class="question-mark">?</div>
                <div class="hidden-text">Guess Who?</div>
            </div>
        </div>
    `;

    card.addEventListener('click', () => handleCardClick(card, player));

    return card;
}

function handleCardClick(card, player) {
    if (isPickMode) {
        // Set this player as secret
        secretPlayer = player;
        updateSecretDisplay();
        togglePickMode();
        
        // Unflip all cards first
        document.querySelectorAll('.player-card').forEach(c => c.classList.remove('flipped'));
        
        // Flip all except new secret
        document.querySelectorAll('.player-card').forEach(c => {
            if (parseInt(c.dataset.playerId) !== player.id) {
                c.classList.add('flipped');
            }
        });
    } else {
        // Normal flip
        card.classList.toggle('flipped');
        
        // Check if secret was revealed
        if (player.id === secretPlayer.id && !card.classList.contains('flipped')) {
            revealSecretPlayer();
        }
    }
}

function selectSecretPlayer(players) {
    // Use round number to deterministically select secret player
    // This ensures same secret player for same round every time
    const secretIndex = (currentRound * 7) % players.length;
    secretPlayer = players[secretIndex];
    updateSecretDisplay();
    console.log('Secret player:', secretPlayer.name);
}

function updateSecretDisplay() {
    if (secretPlayer) {
        secretInfo.innerHTML = `<span class="hidden-text">???</span>`;
        secretInfo.classList.remove('revealed');
    }
}

function revealSecretPlayer() {
    if (secretPlayer) {
        secretInfo.innerHTML = `
            <div>${secretPlayer.name}</div>
            <div style="font-size: 0.9rem; font-weight: 500; margin-top: 5px;">
                ${secretPlayer.nationality} • ${secretPlayer.position}
            </div>
        `;
        secretInfo.classList.add('revealed');
        
        // Highlight secret card
        document.querySelectorAll('.player-card').forEach(card => {
            if (parseInt(card.dataset.playerId) === secretPlayer.id) {
                card.querySelector('.card-front').style.boxShadow = '0 0 20px var(--secondary)';
            }
        });
    }
}

function startNewGame() {
    // Reset all cards
    document.querySelectorAll('.player-card').forEach(card => {
        card.classList.remove('flipped');
        card.querySelector('.card-front').style.boxShadow = '';
    });
    
    // Reselect secret player
    const roundData = PREDETERMINED_ROUNDS[currentRound];
    const roundPlayers = roundData.map(slot => PLAYERS_DATABASE.find(p => p.id === slot.id));
    selectSecretPlayer(roundPlayers);
    
    // Auto-hide all except secret
    document.querySelectorAll('.player-card').forEach(card => {
        if (parseInt(card.dataset.playerId) !== secretPlayer.id) {
            card.classList.add('flipped');
        }
    });
}

function hideAllCards() {
    document.querySelectorAll('.player-card').forEach(card => {
        card.classList.add('flipped');
    });
}

function showAllCards() {
    document.querySelectorAll('.player-card').forEach(card => {
        card.classList.remove('flipped');
    });
}

function togglePickMode() {
    isPickMode = !isPickMode;
    pickSecretBtn.classList.toggle('active', isPickMode);
    document.body.style.cursor = isPickMode ? 'crosshair' : 'default';
    
    if (isPickMode) {
        gameInstruction.textContent = 'Click on a player card to set them as the secret player!';
    } else {
        gameInstruction.textContent = 'Click cards to flip them and find the secret player!';
    }
}

function resetPickMode() {
    isPickMode = false;
    pickSecretBtn.classList.remove('active');
    document.body.style.cursor = 'default';
}

// ====================
// Word Game Logic
// ====================
const WORDS_DATABASE = [
    { word: 'MESSI', category: 'Player' },
    { word: 'RONALDO', category: 'Player' },
    { word: 'BARCELONA', category: 'Club' },
    { word: 'MADRID', category: 'Club' },
    { word: 'CHAMPIONS', category: 'Competition' },
    { word: 'WORLDCUP', category: 'Competition' },
    { word: 'PENALTY', category: 'Football Term' },
    { word: 'CORNER', category: 'Football Term' },
    { word: 'OFFSIDE', category: 'Football Term' },
    { word: 'HATTRICK', category: 'Football Term' },
    { word: 'STRIKER', category: 'Position' },
    { word: 'GOALKEEPER', category: 'Position' },
    { word: 'MIDFIELD', category: 'Position' },
    { word: 'DEFENDER', category: 'Position' },
    { word: 'CAPTAIN', category: 'Role' },
    { word: 'REFEREE', category: 'Role' },
    { word: 'VAR', category: 'Football Term' },
    { word: 'TRANSFER', category: 'Football Term' },
    { word: 'LEAGUE', category: 'Competition' },
    { word: 'STADIUM', category: 'Venue' },
    { word: 'TROPHY', category: 'Award' },
    { word: 'GOLDENBOOT', category: 'Award' },
    { word: 'BALLONDOR', category: 'Award' },
    { word: 'SEMIFINAL', category: 'Stage' },
    { word: 'FINAL', category: 'Stage' },
    { word: 'EXTRATIME', category: 'Match Phase' },
    { word: 'PENALTIES', category: 'Match Phase' },
    { word: 'CLEANSHEET', category: 'Goalkeeper Term' },
    { word: 'ASSIST', category: 'Statistic' },
    { word: 'REDCARD', category: 'Discipline' }
];

function loadWordRound(roundNum) {
    // Select word based on round number
    const wordIndex = (roundNum - 1) % WORDS_DATABASE.length;
    currentWord = WORDS_DATABASE[wordIndex];
    
    // Initialize display
    currentWordDisplay = Array(currentWord.word.length).fill('_');
    guessedLetters = [];
    remainingAttempts = 6;
    
    updateWordDisplay();
    updateWordStatus();
    letterInput.value = '';
    letterInput.focus();
}

function updateWordDisplay() {
    wordDisplay.textContent = currentWordDisplay.join(' ');
    wordCategory.textContent = `Category: ${currentWord.category}`;
}

function updateWordStatus() {
    attemptsLeft.textContent = remainingAttempts;
    usedLetters.textContent = guessedLetters.length > 0 ? guessedLetters.join(', ') : '-';
}

function guessLetter() {
    const letter = letterInput.value.toUpperCase();
    if (!letter || letter.length !== 1) return;
    
    // Check if already guessed
    if (guessedLetters.includes(letter)) {
        letterInput.value = '';
        return;
    }
    
    guessedLetters.push(letter);
    
    // Check if letter is in word
    let found = false;
    for (let i = 0; i < currentWord.word.length; i++) {
        if (currentWord.word[i] === letter) {
            currentWordDisplay[i] = letter;
            found = true;
        }
    }
    
    if (!found) {
        remainingAttempts--;
    }
    
    letterInput.value = '';
    updateWordDisplay();
    updateWordStatus();
    
    // Check win/lose conditions
    if (!currentWordDisplay.includes('_')) {
        wordDisplay.style.color = 'var(--accent)';
        setTimeout(() => {
            alert('Congratulations! You guessed the word: ' + currentWord.word);
            loadWordRound(currentRound);
            wordDisplay.style.color = '';
        }, 300);
    } else if (remainingAttempts === 0) {
        wordDisplay.textContent = currentWord.word;
        wordDisplay.style.color = 'var(--danger)';
        setTimeout(() => {
            alert('Game Over! The word was: ' + currentWord.word);
            loadWordRound(currentRound);
            wordDisplay.style.color = '';
        }, 300);
    } else {
        letterInput.focus();
    }
}
