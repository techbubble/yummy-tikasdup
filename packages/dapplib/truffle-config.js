require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture struggle cruise pulse common good process army genuine'; 
let testAccounts = [
"0x4eae9ead635c5dade496de987e34d2c345e7a217dd187ff113cebfca48bd941b",
"0xbae45f032226da3588356a43c54017e8ff5e431f83c81e1ec790502ff6c5fc6e",
"0xa1c781c38fdaaa5a9d24fb64855fd3c915e10f65ad2afe094cc380d83a7d52c6",
"0x84263a28220b6f169e282a675ed1b8a7600c3aa2363f81d513d5af29a934223c",
"0xe388a37e685f23d4f7d3d213da6819207a941dc5742baee8e31464fa5046a8fa",
"0x53d402aac78014659e3341a9e2b64873e4e5f200ff5f5bd602bd1390617ef155",
"0x915f5a38563c79b7060bf51d91c6a512e2a13aed356fd53a2686110b454e25ad",
"0x955d3c1241f91019baa90a7014b450411b2238c93b5e927bd84b5a343bb079c6",
"0xce175e553160773e97e524a8b961caa9b029811329e7abb71b6d7bbcac532f3b",
"0x1c2d24cd373e7dbaf61b5e84514b48a8fa5fc58560b8b43bd42233ababa8a19e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
