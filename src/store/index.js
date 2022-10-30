import { createStore } from 'vuex'

export default createStore({
  state: {
    leagues: [
      {
        id: 1,
        name: 'PremierLeague',
        image: 'premier-league.png',
        establishedـyear: 1992,
        bestTeams: [
          {
          id: 1,
          name: 'Menchester United',
          logo: 'manutd.jpg'
        },
        {
          id: 2,
          name: 'Menchester city',
          logo: 'mancitylogo.jpg'
        },
        {
          id: 3,
          name: 'Liverpool',
          logo: 'liverpool.png'
        },
        {
          id: 4,
          name: 'Arsenal',
          logo: 'arsenal.png'
        },
        {
          id: 5,
          name: 'Chelsea',
          logo: 'chelsea.png'
        },
        {
          id: 6,
          name: 'Tottenham',
          logo: 'tottenham.png'
        },

        ]

      },
      {
        id: 2,
        name: 'LaLiga',
        image: 'laliga.png',
        establishedـyear: 1928 ,
        bestTeams: [{
          id: 1,
          name: 'Menchester United',
          logo: 'manchester.jpg'
        },

        ]
      },
      {
        id: 3,
        name: 'SerieA',
        image: 'Serie-A-logo.png',
        establishedـyear: 1898,
        bestTeams: [{
          id: 1,
          name: 'Menchester United',
          logo: 'manchester.jpg'
        },

        ]
      },
      {
        id: 4,
        name: 'BondesLiga',
        image: 'Bundesliga-logo.png',
        establishedـyear: 1962,
        bestTeams: [{
          id: 1,
          name: 'Menchester United',
          logo: 'manchester.jpg'
        },

        ]

      },
      {
        id: 5,
        name: 'Lige1',
        image: 'Ligue1_logo.png',
        establishedـyear: 1932,
        bestTeams: [{
          id: 1,
          name: 'Menchester United',
          logo: 'manchester.jpg'
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
