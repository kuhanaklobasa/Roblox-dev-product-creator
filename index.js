const noblox = require("noblox.js")
const fs = require("fs")


const GAME_ID = 000000000

function writeData(product, i) {
    var keysOpt = require('./products.json');
    keysOpt[i] = product.productId;
    // Make whatever changes you want to the parsed data
    fs.writeFile('./products.json', JSON.stringify(keysOpt), function(){});
    console.log("Uploaded asset " + product.name)
}

async function startApp () {
    const currentUser = await noblox.setCookie('YOUR_COOKIE')
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
    var i = 0;
    for (; i<1000000 ;) {
        if (i<100) {
            await noblox.addDeveloperProduct(GAME_ID, ("Donate " + (i+5) + "R$"), (5+i)).then(promise => writeData(promise, (i+5)), error => function(error) {
                console.log("There was an error uploading asset! " + error)
            })
            await new Promise(r => setTimeout(r, 10000));
            i = (i +5)
        }
        if (i>=100 && i<1000) {
            await noblox.addDeveloperProduct(GAME_ID, ("Donate " + (i+25) + "R$"), (25+i)).then(promise => writeData(promise, (i+25)), error => function(error) {
                console.log("There was an error uploading asset! " + error)
            })     
            await new Promise(r => setTimeout(r, 10000));
            i = (i +25)
        }
        if (i>=1000 && i<10000) {
            await noblox.addDeveloperProduct(GAME_ID, ("Donate " + (i+1000) + "R$"), (1000+i)).then(promise => writeData(promise, (i+1000)), error => function(error) {
                console.log("There was an error uploading asset! " + error)
            })     
            await new Promise(r => setTimeout(r, 10000));
            i = (i +1000)
        }
        if (i>=10000 && i<1000000) {
            await noblox.addDeveloperProduct(GAME_ID, ("Donate " + (i+10000) + "R$"), (10000+i)).then(promise => writeData(promise, (i+10000)), error => function(error) {
                console.log("There was an error uploading asset! " + error)
            })     
            await new Promise(r => setTimeout(r, 10000));
            i = (i +10000)
        }
        if (i>=1000000) {
            console.log("Finished")
            break
        }
    }
startApp()