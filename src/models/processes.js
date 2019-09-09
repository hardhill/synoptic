export default{
    state:{
        processes:[
            {
                id:1,
                name:"Первый процесс",
                checked:false
            },
            {
                id:2,
                name:"Второй процесс",
                checked:false
            },
            {
                id:3,
                name:"Третий процесс",
                checked:false
            },
            {
                id:4,
                name:"Четвертый процесс",
                checked:false
            },
            {
                id:5,
                name:"Пятый процесс",
                checked:false
            }, 
            {
                id: 6,
                name: "Шестой процесс",
                checked: false
            }
            ,{
                id: 7,
                name: "Седьмой процесс",
                checked: false
            }

        ]
    },
    mutations:{
        SET_CHECKED(state,payload){
            state.processes.find(x=>x.id===payload.item.id).checked = !payload.active
        }
    },
    actions:{
        async setChecked({commit},option){
            await commit('SET_CHECKED',option)
        }
    },
    getters:{
        GetProcesses(state){
            return state.processes
        }
    }
}