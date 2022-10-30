import { createStore } from 'vuex'

export default createStore({
  state: {
    leagues: [
      {
        id: 1,
        name: 'PremierLeague',
        country:'England',
        image: 'premier-league.png',
        establishedـyear: 1992,
        number_of_teams:20,
        bestTeams: [
          {
          id: 1,
          name: 'Menchester United',
          logo: 'manutd.jpg',
          players:[
            {id:1,name:'ronaldo',image:'ronaldo4.jpg'}
          ]
        },
        {
          id: 2,
          name: 'Menchester city',
          logo: 'mancitylogo.jpg',
          players:[
            {id:1,name:'ronaldo',image:'ronaldo4.jpg'}
          ]

        },
        {
          id: 3,
          name: 'Liverpool',
          logo: 'liverpool.png',
          players:[
            {id:1,name:'ronaldo',image:'ronaldo4.jpg'}
          ]
        },
        {
          id: 4,
          name: 'Arsenal',
          logo: 'arsenal.png',
          players:[
            {id:1,name:'ronaldo',image:'ronaldo4.jpg'}
          ]
        },
        {
          id: 5,
          name: 'Chelsea',
          logo: 'chelsea.png',
          players:[
            {id:1,name:'ronaldo',image:'ronaldo4.jpg'}
          ]
        },
        {
          id: 6,
          name: 'Tottenham',
          logo: 'tottenham.png',
          players:[
            {id:1,name:'ronaldo',image:'ronaldo4.jpg'}
          ]
        },

        ]

      },
      {
        id: 2,
        name: 'LaLiga',
        country:'Spania',
        image: 'laliga.png',
        establishedـyear: 1928 ,
        number_of_teams:20,
        bestTeams: [
          {
          id: 1,
          name: 'Real Madrid',
          logo: 'Real_Madrid.png'
        },
        {
          id: 2,
          name: 'Barcelona',
          logo: 'FC_Barcelona.png'
        },
        {
          id: 3,
          name: 'Atletico Madrid',
          logo: 'Atletico_de_Madrid.png'
        },
        {
          id: 4,
          name: 'Sevilla',
          logo: 'Sevilla.png'
        },
        {
          id: 5,
          name: 'Valencia',
          logo: 'Valencia.png'
        },
        {
          id: 6,
          name: 'Villarreal',
          logo: 'Villarreal.png'
        },

        ]
      },
      {
        id: 3,
        name: 'SerieA',
        country:'Italy',
        image: 'Serie-A-logo.png',
        establishedـyear: 1898,
        number_of_teams:20,
        bestTeams: [
          {
          id: 1,
          name: 'Ac Millan',
          logo: 'AC_Milan.png'
        },
        {
          id: 2,
          name: 'Inter Millan',
          logo: 'Internazionale_Milano.png'
        },
        {
          id: 3,
          name: 'Juventus',
          logo: 'Juventus.png'
        },
        {
          id: 4,
          name: 'Napoli',
          logo: 'napoli.png'
        },
        {
          id: 5,
          name: 'As Roma',
          logo: 'AS_Roma.png'
        },
        {
          id: 6,
          name: 'Atalanta',
          logo: 'Atalanta.png'
        },

        ]
      },
      {
        id: 4,
        name: 'BondesLiga',
        country:'Germany',
        image: 'Bundesliga-logo.png',
        establishedـyear: 1962,
        number_of_teams:18,
        bestTeams: [
          {
          id: 1,
          name: 'Bayern Munich',
          logo: 'bayern.png',
         
        },
          {
          id: 2,
          name: 'Dortmond',
          logo: 'dortmond.png'
        },
          {
          id: 3,
          name: 'Leipzig',
          logo: 'leipzig.png'
        },
          {
          id: 4,
          name: 'Bayer Leverkusen',
          logo: 'bayer-Leverkusen.png'
        },
          {
          id: 5,
          name: 'Eintracht Frankfurt',
          logo: 'frankfort.png'
        },
          {
          id: 6,
          name: 'Wolfsburg',
          logo: 'wolfsburg.png'
        },
        

        ]

      },
      {
        id: 5,
        name: 'Lige1',
        country:'France',
        image: 'Ligue1_logo.png',
        establishedـyear: 1932,
        number_of_teams:20,
        bestTeams: [
          {
          id: 1,
          name: 'PSG',
          logo: 'psg.png'
        },
          {
          id: 2,
          name: 'Marseille',
          logo: 'marsey.png'
        },
          {
          id: 3,
          name: 'OL',
          logo: 'lion.png'
        },
          {
          id: 4,
          name: 'lille',
          logo: 'lille.png'
        },
          {
          id: 5,
          name: 'Monaco',
          logo: 'monaco.jpg'
        },
          {
          id: 6,
          name: 'Rennais',
          logo: 'ren.png'
        },

        ]
      }
    ]

  },
  getters: {
    allLeagues(state) {
      return state.leagues
    },
    getLeaguesById: (state) => (name) => {
      return state.leagues.find(lig => lig.name == name)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
