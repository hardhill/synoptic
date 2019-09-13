export default{
    getValueFromResponse(data) {
        var arr = []
        for (var ar in data) {
            arr.push(ar.value)
        }
    }
}