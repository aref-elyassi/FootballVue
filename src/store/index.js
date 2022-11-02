import { createStore } from 'vuex'

export default createStore({
  state: {
    leagues: [
      {
        id: 1,
        name: 'PremierLeague',
        country: 'England',
        image: 'premier-league.png',
        establishedـyear: 1992,
        number_of_teams: 20,
        bestTeams: [
          {
            id: 1,
            name: 'Menchester United',
            logo: 'manutd.jpg',
            players: [
              { id: 1, name: 'ronaldo' },
              {id:2,name:'roney'}
            ]
          },
          {
            id: 2,
            name: 'Menchester city',
            logo: 'mancitylogo.jpg',
            players: [
              { id: 1, name: 'ronaldo' }
            ]

          },
          {
            id: 3,
            name: 'Liverpool',
            logo: 'liverpool.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 4,
            name: 'Arsenal',
            logo: 'arsenal.png',
            players: [
              { id: 1, name: 'ronaldo'}
            ]
          },
          {
            id: 5,
            name: 'Chelsea',
            logo: 'chelsea.png',
            players: [
              { id: 1, name: 'ronaldo'}
            ]
          },
          {
            id: 6,
            name: 'Tottenham',
            logo: 'tottenham.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },

        ]

      },
      {
        id: 2,
        name: 'LaLiga',
        country: 'Spania',
        image: 'laliga.png',
        establishedـyear: 1928,
        number_of_teams: 20,
        bestTeams: [
          {
            id: 1,
            name: 'Real Madrid',
            logo: 'Real_Madrid.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 2,
            name: 'Barcelona',
            logo: 'FC_Barcelona.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 3,
            name: 'Atletico Madrid',
            logo: 'Atletico_de_Madrid.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 4,
            name: 'Sevilla',
            logo: 'Sevilla.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 5,
            name: 'Valencia',
            logo: 'Valencia.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 6,
            name: 'Villarreal',
            logo: 'Villarreal.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },

        ]
      },
      {
        id: 3,
        name: 'SerieA',
        country: 'Italy',
        image: 'Serie-A-logo.png',
        establishedـyear: 1898,
        number_of_teams: 20,
        bestTeams: [
          {
            id: 1,
            name: 'Ac Millan',
            logo: 'AC_Milan.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 2,
            name: 'Inter Millan',
            logo: 'Internazionale_Milano.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 3,
            name: 'Juventus',
            logo: 'Juventus.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 4,
            name: 'Napoli',
            logo: 'napoli.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 5,
            name: 'As Roma',
            logo: 'AS_Roma.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 6,
            name: 'Atalanta',
            logo: 'Atalanta.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },

        ]
      },
      {
        id: 4,
        name: 'BondesLiga',
        country: 'Germany',
        image: 'Bundesliga-logo.png',
        establishedـyear: 1962,
        number_of_teams: 18,
        bestTeams: [
          {
            id: 1,
            name: 'Bayern Munich',
            logo: 'bayern.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]

          },
          {
            id: 2,
            name: 'Dortmond',
            logo: 'dortmond.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 3,
            name: 'Leipzig',
            logo: 'leipzig.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 4,
            name: 'Bayer Leverkusen',
            logo: 'bayer-Leverkusen.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 5,
            name: 'Eintracht Frankfurt',
            logo: 'frankfort.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 6,
            name: 'Wolfsburg',
            logo: 'wolfsburg.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },


        ]

      },
      {
        id: 5,
        name: 'Lige1',
        country: 'France',
        image: 'Ligue1_logo.png',
        establishedـyear: 1932,
        number_of_teams: 20,
        bestTeams: [
          {
            id: 1,
            name: 'PSG',
            logo: 'psg.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 2,
            name: 'Marseille',
            logo: 'marsey.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
          {
            id: 3,
            name: 'OL',
            logo: 'lion.png',
            players: [
              { id: 1, name: 'ronaldo' }
            ]
          },
        ]
      }
    ],
Teams:[
  {
        id: 1,
        name: 'Menchester United',
        logo: 'manutd.jpg',
        founded:'1878',
        stadium:'Old Trafford',
        stadium_image:'oldtraford.jpg',
        capacity:'74.310',
        coach:'Erik Ten Hag',
        imageCoach:'tenhag.jpg',
        players: [
          { id: 1, name: 'Ronaldo', image: 'ronaldo.jpg' },
          {id:2,name:'Jadon Sancho',image:'sancho.jpg'},
          {id:3,name:'Christian Erikse' , image:'eriksen.jpeg'},
          {id:4,name:'David Degea',image:'daviddegea.jpg'},
          {id:5,name:'Casemiro',image:'casemiro.jpg'},
          {id:6,name:'Brono Fernandes',image:'brono.jpg'}
        ]
      },
      {
        id: 2,
        name: 'Menchester city',
        logo: 'mancitylogo.jpg',
        founded:'1880',
        stadium:'Etihad',
        stadium_image:'mancity.jpg',
        coach:'Pep Guardiola',
        imageCoach:'pep.jpg',
        capacity:'53.400',
        players: [
          { id: 1, name: 'Erling Haaland', image: 'haaland.jpg' },
          {id:2,name:'Kevin De Bruyne',image:'kevin.jpg'},
          {id:3,name:'Phil Foden',image:'foden.jpg'},
          {id:4,name:'Riyad Mahrez',image:'mahrez.jpg'},
          {id:5,name:'İlkay Gündoğan',image:'gondogan.jpg'},
          {id:6,name:'Ederson',image:'ederson.jpg'}
        ]

      },
      {
        id: 3,
        name: 'Liverpool',
        logo: 'liverpool.png',
        founded:'1892',
        stadium:'Anfield',
        stadium_image:'liverpoolstadium.jpg',
        coach:'Jürgen Klopp',
        imageCoach:'klop.jpg',
        capacity:'53.394',
        players: [
          { id: 1, name: 'Mohammad Salah', image: 'salah.jpg' },
          {id:2,name:'Virgil van Dijk',image:'virgil.jpg'},
          {id:3,name:'Roberto Firmino',image:'firmino.jpg'},
          {id:4,name:'Alisson Becker',image:'becker.jpg'},
          {id:5,name:'Thiago Alcântara',image:'tiago.jpg'},
          {id:6,name:'Jordan Henderson',image:'henderson.jpg'}
        ]
      },
      {
        id: 4,
        name: 'Arsenal',
        logo: 'arsenal.png',
        founded:'1886',
        stadium:'Emirates',
        stadium_image:'emirates.jpg',
        coach:'Mikel Arteta',
        imageCoach:"arteta.jpg",
        capacity:'60.704',
        players: [
          { id: 1, name: 'Gabriel Jesus', image: 'jesus.jpg' },
          {id:2,name:'Bukayo Saka',image:'saka.jpg'},
          {id:3,name:'Martin Ødegaard',image:'odegard.jpg'},
          {id:4,name:'Gabriel Martinelli',image:'martinelli.jpg'},
          {id:5,name:'Aaron Ramsdale',image:'ramsdale.jpg'},
          {id:6,name:'Granit Xhaka',image:'xaka.jpg'}
        ]
      },
      {
        id: 5,
        name: 'Chelsea',
        logo: 'chelsea.png',
        founded:'1905',
        stadium:'Stamford Bridge',
        stadium_image:'chelsea.jpg',
        coach:'Graham Potte',
        imageCoach:'potter.jpg',
        capacity:'40.341',
        players: [
          { id: 1, name: 'Kai Havertz', image: 'havertz.jpg' },
          {id:2,name:'NGolo Kanté',image:'kante.jpg'},
          {id:3,name:'Édouard Mendy',image:'mendy.jpg'},
          {id:4,name:'César Azpilicueta',image:'azpili.jpg'},
          {id:5,name:'Thiago Silva',image:'silva.jpg'},
          {id:6,name:'Jorginho',image:'jorginho.jpg'}
        ]
      },
      {
        id: 6,
        name: 'Tottenham',
        logo: 'tottenham.png',
        founded:'1882',
        stadium:'Tottenham Stadium',
        stadium_image:'tottenhamstadium.jpg',
        coach:'Antonio Conte',
        imageCoach:'konte.jpg',
        capacity:'65.000',
        players: [
          { id: 1, name: 'Son Heung-min', image: 'son.jpg' },
          {id:2,name:'Harry Kane',image:'kane.jpg'},
          {id:3,name:'Ivan Perišić',image:'ivan.jpg'},
          {id:4,name:'Rodrigo Bentancur',image:'bentancur.jpg'},
          {id:5,name:'Lucas Moura',image:'mora.jpg'},
          {id:6,name:'Hugo Lloris',image:'loris.jpeg'}
        ]
      },
      {
        id: 7,
        name: 'Real Madrid',
        logo: 'Real_Madrid.png',
        founded:'1902',
        stadium:'Sntiago Bernabeo',
        stadium_image:'realstadium.jpg',
        coach:'Carlo Angelotti',
        imageCoach:'carlo.jpg',
        capacity:'81.000',
        players:[
          {id:1,name:'Karim Benzema',image:'benzema.jpg'},
          {id:2,name:'Vini Jr',image:'vini.jpg'},
          {id:3,name:'Toni Kroos',image:'kroos.jpg'},
          {id:4,name:'Luka Modrić',image:'modrich.jpg'},
          {id:5,name:'Thibaut Courtois',image:'tibo.jpg'},
          {id:6,name:'Federico Valverde',image:'fede.jpg'}
        ]

      },
      {
        id: 8,
        name: 'Barcelona',
        logo: 'FC_Barcelona.png',
        founded:'1899',
        stadium:'Camp Nou',
        stadium_image:'newcamp.jpg',
        coach:'Xavi Hernandes',
        imageCoach:'xavi.jpeg',
        capacity:'99.065',
        players:[
          {id:1,name:'Robert Lewandowski',image:'lewa.jpg'},
          {id:2,name:'Gavi',image:'gavi.jpg'},
          {id:3,name:'Pedri',image:'pedri.jpg'},
          {id:4,name:'Frenkie de Jong',image:'franki.jpg'},
          {id:5,name:'Ousmane Dembélé',image:'osman.jpg'},
          {id:6,name:'Raphinha',image:'raphinia.jpg'}
        ]
      },
      {
        id: 9,
        name: 'Atletico Madrid',
        logo: 'Atletico_de_Madrid.png',
        founded:'1903',
        stadium:'Metropolitano',
        coach:'Diego Simeone',
        imageCoach:'diego.jpg',
        stadium_image:'metropolitano.jpg',
        capacity:'68.456',
        players:[
          {id:1,name:'Antoine Griezmann',image:'grizman.jpg'},
          {id:2,name:'João Félix',image:'felix.jpg'},
          {id:3,name:'Jan Oblak',image:'oblak.jpg'},
          {id:4,name:'Ángel Correa',image:'corea.jpg'},
          {id:5,name:'Yannick Carrasco',image:'carasco.jpg'},
          {id:6,name:'Álvaro Morata',image:'morat.jpg'}
        ]
      },
      {
        id: 10,
        name: 'Sevilla',
        logo: 'Sevilla.png',
        founded:'1890',
        stadium:'Ramón Sánchez Pizjuán',
        stadium_image:'Sevillastadium.jpg',
        coach:'Julen Lopetegui',
        imageCoach:'lopetegi.jpg',
        capacity:'42.704',
        players:[
          {id:1,name:'Isco',image:'isco.jpg'},
          {id:2,name:'Ivan Rakitić',image:'rakitich.jpg'},
          {id:3,name:'Marcos do Nascimento Teixeira',image:'marcos.jpg'},
          {id:4,name:'Jesús Manuel Corona',image:'corona.jpg'},
          {id:5,name:'Alex Telles',image:'teles.jpg'},
          {id:6,name:'Jesús Navas',image:'navas.jpg'},
        ]
      },
      {
        id: 11,
        name: 'Valencia',
        logo: 'Valencia.png',
        founded:'1919',
        stadium:'Mestalla',
        coach:'Gennaro Gattuso',
        imageCoach:'gatuso.jpg',
        stadium_image:'mestalla.jpg',
        capacity:'45.000',
        players:[
          {id:1,name:'Toni Lato',image:'lato.jpg'},
          {id:2,name:'Edinson Cavani',image:'cavani.jpg'},
          {id:3,name:'Hugo Guillamón',image:'hugo.jpg'},
          {id:4,name:'José Gayà',image:'gaya.jpg'},
          {id:5,name:'Mouctar Diakhaby',image:'diakhabi.jpg'},
          {id:6,name:'Jaume Doménech',image:'juame.jpg'}
        ]

      },
      {
        id: 12,
        name: 'Villarreal',
        logo: 'Villarreal.png',
        founded:'1923',
        stadium:'Arena',
        stadium_image:'viarealstadium.jpg',
        coach:'Unai Emery',
        imageCoach:'emeri.jpg',
        capacity:'23.700',
        players:[
          {id:1,name:'Dani Parejo',image:'parejo.jpg'},
          {id:2,name:'Juan Foyth',image:'foyth.jpg'},
          {id:3,name:'Gerard Moreno',image:'moreno.jpg'},
          {id:4,name:'Yéremy Pino',image:'pino.jpg'},
          {id:5,name:'Gerónimo Rulli',image:'rulli.jpg'},
          {id:6,name:'Johan Mojica',image:'mojica.jpg'}
        ]
      },
      {
        id: 13,
        name: 'Ac Millan',
        logo: 'AC_Milan.png',
        founded:'1899',
        stadium:'San Siro',
        stadium_image:'sansiro.jpg',
        coach:'Stefano Pioli',
        imageCoach:'pioli.jpg',
        capacity:'75.923',
        players:[
          {id:1,name:'Rafael Leão',image:'leao.jpg'},
          {id:2,name:'Olivier Giroud',image:'giroud.jpg'},
          {id:3,name:'Mike Maignan',image:'mike.jpg'},
          {id:4,name:'Theo Hernández',image:'theo.jpg'},
          {id:5,name:'Ante Rebić',image:'rebic.jpg'},
          {id:6,name:'Alessandro Florenzi',image:'florenzi.jpg'}
        ]
      },
      {
        id: 14,
        name: 'Inter Millan',
        logo: 'Internazionale_Milano.png',
        founded:'1908',
        stadium:'	Giuseppe Meazza',
        stadium_image:'sansiro.jpg',
        coach:'Simone Inzaghi',
        imageCoach:'simone.jpg',
        capacity:'75.923',
        players:[
          {id:1,name:'Samir Handanović',image:'handanovic.jpg'},
          {id:2,name:'Nicolò Barella',image:'barela.jpg'},
          {id:3,name:'Kristjan Asllani',image:'aslani.jpg'},
          {id:4,name:'Marcelo Brozović',image:'brozovic.jpg'},
          {id:5,name:'Alessandro Bastoni',image:'bastoni.jpg'},
          {id:6,name:'Roberto Gagliardini',image:'gilardini.jpg'}
        ]
      },
      {
        id: 15,
        name: 'Juventus',
        logo: 'Juventus.png',
        founded:'1897',
        stadium:'Juventus Stadium',
        stadium_image:'Juventusstadium.jpg',
        coach:'Massimiliano Allegri',
        imageCoach:'alegri.jpg',
        capacity:'41.507',
        players:[
          {id:1,name:'Alex Sandro',image:'sandro.jpg'},
          {id:2,name:'Leonardo Bonucci',image:'bonucci.jpg'},
          {id:3,name:'Leandro Paredes',image:'parades.jpg'},
          {id:4,name:'Juan Cuadrado',image:'cuadrado.jpg'},
          {id:5,name:'Dušan Vlahović',image:'vulahovic.jpg'},
          {id:6,name:'Federico Chiesa',image:'chiesa.jpg'}
        ]
      },
      {
        id: 16,
        name: 'Napoli',
        logo: 'napoli.png',
        founded:'1926',
        stadium:'Stadio San Paolo',
        stadium_image:'napolistadium.jpg',
        coach:'Luciano Spalletti',
        imageCoach:'spaleti.jpg',
        capacity:'54.726'
      },
      {
        id: 17,
        name: 'As Roma',
        logo: 'AS_Roma.png',
        founded:'1927',
        stadium:'Stadio Olimpico',
        stadium_image:'romstadium.jpg',
        capacity:'70.000'
      },
      {
        id: 18,
        name: 'Atalanta',
        logo: 'Atalanta.png',
        founded:'1907',
        stadium:"	Gewiss Stadium",
        stadium_image:"atalantastadium.jpg",
        capacity:"21.747"
      },
      {
        id: 19,
        name: 'Bayern Munich',
        logo: 'bayern.png',
        founded:'1900',
        stadium:'Allianz Arena',
        stadium_image:'alianarena.jpg',
        capacity:'75.000'

      },
      {
        id: 20,
        name: 'Dortmond',
        logo: 'dortmond.png',
        founded:'1974',
        stadium:'Signal Iduna Park',
        stadium_image:'dortmondstadium.jpg',   
        capacity:'81.365'

      },
      {
        id: 21,
        name: 'Leipzig',
        logo: 'leipzig.png',
        founded:'2009',
        stadium:'Red Bull Arena',
        stadium_image:'leipzigstadium.jpg',
        capacity:'47.069'
      },
      {
        id: 22,
        name: 'Bayer Leverkusen',
        logo: 'bayer-Leverkusen.png',
        founded:'1904',
        stadium:'BayArena',
        stadium_image:'leverkusen.jpg',
        capacity:'30.210'
      },
      {
        id: 23,
        name: 'Eintracht Frankfurt',
        logo: 'frankfort.png',
        founded:'1899',
        stadium:'Deutsche Bank Park',
        stadium_image:'frankfortstadium.jpg',
        capacity:'51.500'
      },
      {
        id: 24,
        name: 'Wolfsburg',
        logo: 'wolfsburg.png',
        founded:'1945',
        stadium:'Volkswagen Arena',
        stadium_image:"volkswagen-arena.jpg",
        capacity:'30.000'
      },
      {
        id: 25,
        name: 'PSG',
        logo: 'psg.png',
        founded:'1974',
        stadium:'Parc des Princes',
        stadium_image:'psgstadium.jpg',
        capacity:'47.929'
      },
      {
        id: 26,
        name: 'Marseille',
        logo: 'marsey.png',
        founded:'1899',
        stadium:'Orange Vélodrome',
        stadium_image:'marseysta.jpg',
        capacity:'67.260'
      },
      {
        id: 27,
        name: 'OL',
        logo: 'lion.png',
        founded:'1950',
        stadium:'Groupama Stadium',
        stadium_image:'olsta.jpg',
        capacity:'59.186'
      },
    



]
  },
  getters: {
    allLeagues(state) {
      return state.leagues
    },
    allTeams(state){
      return state.Teams
    },
    getLeaguesById: (state) => (name) => {
      return state.leagues.find(lig => lig.name == name)
    },
    getTeamsById: (state) => (name) => {
      return state.Teams.find(team => team.name == name)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
