const Wallet = require('ethereumjs-wallet').default;
const fs = require('fs');

function generateAddresses() {
    const output = [];

    for (let i = 0; i < 100; i++) {
        const wallet = Wallet.generate();
        const privateKey = wallet.getPrivateKeyString();
        const address = wallet.getAddressString();
        output.push(`${privateKey}: ${address}\n`);
    }

    fs.writeFileSync('output.txt', output.join(''), 'utf-8');
    console.log('Keys and addresses have been written to output.txt');
}

module.exports = generateAddresses;
