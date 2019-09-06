import axios from "axios"

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
            colors: ['#E91E63', '#9C27B0']
        }
    },
    mutations: {
        setChartData(state,payload){
            state.seriesData = [{
                name:'other',
                data:[67,22,13,78,23,65,62,9]
            }]
            
        }
    },
    actions: {
        getDataAsync({
            commit
        }, option) {
            axios({
                method:'get',
                url:'https://api.coindesk.com/v1/bpi/currentprice.json',
                responseType:'json'
            }).then(function(response){
               if(response.status==200){
                
                 commit('setChartData', response.data)  
               }
            // eslint-disable-next-line no-console
            }).catch((error) => {console.log(error)})
            
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