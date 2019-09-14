export default{
    getValueFromResponse(data) {
        var arr_value = []
        for(var i=0; i<data.length;i++){
            arr_value.push(data[i].value);
        }
        //console.log(arr_value)
        return arr_value
    },
    getLabelFromResponse(data){
        
        var arr_value = []
        for(var i=0; i<data.length;i++){
            arr_value.push(data[i].label);
        }
        //console.log(arr_value)
        return arr_value
    }
}