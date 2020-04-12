import Axios from "axios"

const state = {
    summary: {
        confirmed: {
            value: null
        },
        recovered: {
            value: null
        },
        deaths: {
            value: null
        },
    },
    sevenDays: {
        confirmed: null,
        dates: null
    }
}

const getters = {
    globalSummary: (state) => {
        return state.summary
    },
    globalSevenDays: (state) => {
        return state.sevenDays
    }
}

const mutations = {
    setGlobalSummary: (state, payload) => {
        state.summary.confirmed.value = payload.confirmed.value
        state.summary.recovered.value = payload.recovered.value
        state.summary.deaths.value = payload.deaths.value
    },
    setGlobalSenvenDays: (state, payload) => {
        const datas = payload.slice(payload.length - 7, payload.length)
        var confirmed = new Array()
        var dates = new Array()
        datas.forEach(data => {
            confirmed.push(data.totalConfirmed)
            dates.push(data.reportDate)
        });
        state.sevenDays.confirmed = confirmed
        state.sevenDays.dates = dates
    }
}

const actions = {
    getGlobalSummary: async (context) => {
        let { data } = await Axios.get("https://covid19.mathdro.id/api")
        context.commit("setGlobalSummary", data)
    },
    getGlobalDaily: async (context) => {
        let { data } = await Axios.get("https://covid19.mathdro.id/api/daily")
        context.commit("setGlobalSenvenDays", data)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}