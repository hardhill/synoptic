import axios from "axios"

export default{
    state:{
        selected:[],
        processes:[]
    },
    mutations:{
        SET_CHECKED(state,payload){
            
            state.processes.find(x=>x.id===payload.item.id).checked = !payload.active
            state.selected = state.processes.filter(item=>item.checked===true)


        },
        SET_TYPEPROC(state,payload){ //заполняется список данными взятыми с сервиса "synserv"
             state.processes = []
             for( var i=0;i<payload.length;i++){
                 state.processes.push({id:payload[i].id_typeproc,name:payload[i].nameproc,checked:false})
             }
        }
    },
    actions:{
        async setChecked({commit},option){
            await commit('SET_CHECKED',option)
        },
        loadTypeProcAsync({commit}){
            var servurl = window.location.protocol + '//' + window.location.hostname + ':8081';
            axios(
                {
                    method: 'get',
                    url: servurl +'/proctype',
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
        },
        GetSelectedIdProc(state){
            var arr = []
            for(var i=0;i<state.selected.length;i++){
                arr.push(state.selected[i].id)
            }
            return arr
        },
        GetSelectedProc(state){
            return state.selected
        }
    }
}