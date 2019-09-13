import axios from "axios"

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
        },
        SET_TYPEPROC(state,payload){
            if(payload.length>0){
                state.processes = []
            }
        }
    },
    actions:{
        async setChecked({commit},option){
            await commit('SET_CHECKED',option)
        },
        loadTypeProcAsync({commit}){
            axios(
                {
                    method: 'get',
                    url: this.$store.servhost+'/proctype',
                    responseType: 'json',
                }
            )
            .then((response)=>{
                if(response.status===200){
                    commit('SET_TYPEPROC',response.data)
                }
            })
            // eslint-disable-next-line no-console
            .catch((err)=>{console.log(err)})
        }
    },
    getters:{
        GetProcesses(state){
            return state.processes
        }
    }
}