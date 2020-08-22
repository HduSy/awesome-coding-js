let list

//Init module if you need
function Init() {
    // write code here
    list = {}
}

//Insert one char from stringstream
function Insert(ch) {
    // write code here
    list[ch] = list[ch] ? list[ch] + 1 : 1
}

//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
    // write code here
    for (let key in list) {
        if (list[key] === 1)
            return key
    }
    return '#'
}
