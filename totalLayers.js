let totalLayersInarr =(input)=>{

    let layersCount =0

    let dupArr = input.slice()

    for(let i=0 ; i<dupArr.length; i++){
        for(let j=i+1 ; j<input.length ;j++){
            if(input[i] == input[j]){
                dupArr.splice([i],1)
            }
        }
    }
    let totalLength =0
    return totalLength = dupArr.length

}




