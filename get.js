function getData(){
    let data;
    $.get("timeout.js", function(response){
        data = response;
    });
    return data;
}
let data = getData();
console.log("The data is" +data);