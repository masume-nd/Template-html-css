function sort(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i]!== -1){
            newArray.push(array[i])
        }
    }
    newArray.sort((a, b) => a - b)
    for(let i = 0; i < array.length; i++){
        if(array[i] !== -1){
            array[i] = newArray[0]
            newArray = newArray.slice(1)
        }
    }
    return (array)
}
console.log(sort([-1, 250 ,-1, 150, 190, 170, -1, -1, 160, 180]))


// function sort(array){
//     let nums = array.filter(x=> x!==-1)
//     let indexes =[];
//     array.map((i,index)=>i==-1 
//     &&indexes.push(index))

//     nums = nums.sort((a,b)=>a-b)
//     indexes.map(i=>{
// nums=[...nums.slice(0,i),-1,...nums.slice(i)]
// })
// console.log (nums)
// }
// sort([-1, 250 ,-1, 150, 190, 170, -1, -1, 160, 180])