 function SearchArr(target,arr, output = v => { console.log(v);} ) {
    const position = Search(target,arr);
    if(position!==-1)
    {
        output(`Found target at ${position}`);
    }
    else
    {
        output(`Target Not Found`);
    }
}

 function Search(target,arr) {
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]===target)
        {
            return index;
        }
    }
    return -1;
}

module.exports = {
    Search,SearchArr
}


