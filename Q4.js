const oldarr=["muskan","kumari","singh"];
const newarr=oldarr.map(function(cValue,i){
    return i+":"+cValue+"thapa";
});
console.log(newarr);
//output:[ '0:muskanthapa', '1:kumarithapa', '2:singhthapa' ]