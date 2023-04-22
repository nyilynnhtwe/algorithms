function SearchArr(target,arr, output = v => { console.log(v);} ) {
    const position = Search(target,arr);
    console.log(position);
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
    let start = 0;
    let end = arr.length-1;
    while(start<=end)
    {
        mid = Math.floor((end+start)/2);
        if(arr[mid]===target)
        {
            return mid;
        }
        else if(arr[mid]>target)
        {
            end = mid-1;
        }
        else
        {
            start = mid+1;
        }
    }
    return -1;
}

module.exports = {
    Search,SearchArr
}


