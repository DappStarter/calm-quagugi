require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot blanket radar oven provide hard light army gaze'; 
let testAccounts = [
"0xd63ea2b23581c7c84d17be97498f28479557493c0c8177351e7f8e2eae114746",
"0x155a64acea5a3f56fdc3dc9f599338c375d0c328941e89315ec047bf2ac86aa2",
"0x26f349e4290c003a698af5f84e5bafe0853cb50a9103116d1f42dd57c35bbf43",
"0x3a9b98fdc3548c8df6c3a455839918b21a8fe0e79b809bf7d822cb61516bf6dd",
"0xd2aaa3aa933a2e4dd733a401f8b0cf5f9aaf9e60762d7b45dfc4ff2c58da881a",
"0xbc41a3631516aac0a0f6486b889e319d257bb01bd1001f7301fb4cd8b1a1dc9f",
"0xad1f3c649ad7c9c01074d1e09534fb9e77dcb95f4910dfee2ee1aa939873a1c1",
"0xe51d1652e4afa0ac711f7f2806cb29ae64e7655b042bde01e756332c18b9776e",
"0xc331c0819d62495a7890093c0f33cb57f6426cf362abb4e3d4b29e5b00956161",
"0xa8246fb7977c112c6d2006486e74063f9e4eab80f4dd2fc3811651572fd06873"
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
