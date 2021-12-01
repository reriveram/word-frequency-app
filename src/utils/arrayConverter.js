export const arrayConverter = (array)=>{
    const finalArray = []
    array.forEach(element => {
        finalArray.push([element.word, element.times])
    });
    return finalArray;
}