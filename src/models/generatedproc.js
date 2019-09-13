import axios from "axios"
import myutil from "@/functions"

export default {
    state: {
        seriesData: [{
            name: "цена",
            data: [30, 49, 45, 43, 32, 13, 29, 37],
        }],

        chartOptions: {
            chart: {
                id: "vuechart-example"
            },
            xaxis: {
                categories: ['27.08.2018', '28.08.2018', '29.08.2018', '30.08.2018', '31.08.2018', '01.09.2018', '02.09.2018', '03.09.2018']
            },
            colors: ['#9C27B0', '#E91E63']
        }
    },
    mutations: {
        setChartData(state,data) {
            state.seriesData = [{
                name: 'other',
                data: myutil.getValueFromResponse(data)
            }]

        }
    },
    actions: {
        getDataAsync({
            commit
        }) {
            var servurl = window.location.protocol + '//' + window.location.hostname + ':8088';
            axios({
                method: 'post',
                url: servurl + '/proc/year',
                responseType: 'json',
                data:{
                    'startdate':'2015-01-01',
                    'typeprocs':[]
                }
            }).then(function (response) {
                if (response.status == 200) {
                    commit('setChartData', response.data)
                }
            }).catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error)
            })

        }
    },
    getters: {
        GetChartOptions(state) {
            return state.chartOptions
        },
        GetSeries(state) {
            return state.seriesData
        }
    }
    
}