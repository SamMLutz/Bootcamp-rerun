var fs = require("fs");

var trans = process.argv[2];

var num = process.argv[3];


// console.log(trans)
// console.log(num)

const sum = arr => {
    let total = 0;
    arr.forEach(item => {
        total += item;
    })
    return total;
}

switch (trans) {
    case 'total':
        fs.readFile("bank.txt", "utf8", function (err, data) {
            if (err) {
                console.log(err)
            }
            const newList = data.split(",")
            console.log(newList);
            let total = 0
            newList.forEach(item => {
                // console.log(parseFloat(item))
                total += parseFloat(item)
            })
            console.log("total: ", total)
        });
        break;
    case 'deposit':
        fs.appendFile("bank.txt", " " + num, function (err) {
            if (err) {
                return console.log(err)
            }
            console.log("Bank.txt was updated!")
        })
        break;
    case 'withdraw':
        fs.appendFile("bank.txt", " " + -num, function (err) {
            if (err) {
                return console.log(err)
            }
            console.log("Bank.txt was updated!")
        })
        break;
    case "lotto":
        let randomNumber = Math.floor(Math.random() * 10)
        console.log(randomNumber)

        if (randomNumber === 5) {
            fs.appendFile("bank.txt", " 100", function (err) {
                if (err) {
                    return console.log(err)
                }
                console.log("You won! Bank.txt was updated!")
            })
        } else {
            fs.appendFile("bank.txt", " -10", function (err) {
                if (err) {
                    return console.log(err)
                }
                console.log("You lost! Bank.txt was updated!")
            })
        }
}