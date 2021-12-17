function commonSameCount(s1, s2) {
    var s1Array = s1.split("");
    var s2Array = s2.split("");
    var count = 0;
    let index = 0;
    
    s1Array.filter(s1 => {
        index = s2Array.findIndex(s2 => s2 == s1);
        if(index >= 0){
            count++;
            s2Array.splice(index, 1);
        }
    });
    return count;
}

console.log(commonSameCount("aaaaa" , "aaaaa"))