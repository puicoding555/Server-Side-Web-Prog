function Cut(arr) {
    return arr.splice(0,arr.length / 2)
}

let user = [{
    "name":"Ratchaphiphat",
    "lastname": "Thichon",
    "email": "seksant66@nu.ac.th",
    "from":"TH"
}, {
    "name":"Job",
    "lastname": "Steve",
    "email": "steve.job@gmail.com",
    "from":"USA"
}, {
    "name":"AAA",
    "lastname": "AAAAA",
    "email": "AAA@gmail.com",
    "from":"TH"
}, {
    "name":"BBB",
    "lastname": "BBBBB",
    "email": "BBB@gmail.com",
    "from":"TH"
}, {
    "name":"CCC",
    "lastname": "CCCCC",
    "email": "CCC@gmail.com",
    "from":"SG"
} , {
    "name":"DDD",
    "lastname": "DDDDD",
    "email": "DDD@gmail.com",
    "from":"UK"
}, {
    "name":"EEE",
    "lastname": "EEEEEE",
    "email": "EEE@gmail.com",
    "from":"HK"
}, {
    "name":"FFF",
    "lastname": "FFFFF",
    "email": "FFF@gmail.com",
    "from":"JP"
}]


console.log(user)
console.log('--------------')
allArr = []
for (let i = 0; i <= user.length; i++) {
    allArr = Cut(user)
    console.log(user)
    console.log('------------')
    console.log(allArr)
    user = allArr
    console.log('----------------' + i + '--' + i.length)
}
