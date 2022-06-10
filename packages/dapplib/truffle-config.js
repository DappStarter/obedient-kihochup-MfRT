require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember honey half kitchen sure turtle'; 
let testAccounts = [
"0xb49bd976c37c964ddd0222b3ed8c671656752f8373562878b28d300dc1e0616c",
"0x11334868509caf4e27970ea1baa38d9c45df438a5c5b1d0df68ae15a96931386",
"0xbbef3ac7ad48fe4ad56a01aba72b7fb68a674560b848e1f117b9cfa0c72b61cf",
"0xd8084752a95ed996a5bf57b98cd5022a273f6887916f52dc7facd23fbd6a51fb",
"0xd3c1b9b7924a9686907c59bc1b11b0830f132e047039b8c23384b7affbcd3e96",
"0x7e4c0d7c4324d4d39bd97cfaea38112cdbc757a404a5c8fea42656c3be845fad",
"0x328d3cf88695349f148f6541b7797dfbad5fd2bdb405c2f915895b95e574ef8b",
"0x82226d2e9be8db2ce8463667016b86a8324d8a85b2e6762e3d29a79dc79ef6d0",
"0xf30b70705921500b7bd5b2c6892af6719c0e0c9fe3d4a92cefeca35516a07e0f",
"0x4e5fbe1717ba0cf067e20d872c0bb27cb61313cf437a0c6427ff04f1c01cc242"
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
            version: '^0.8.0'
        }
    }
};

