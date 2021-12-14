import axios from 'axios'

const baseCurrenyList = [
    'BTC',
    'ETH',
    'XRP',
    'SOL',
    'ADA',
    'DOT',
    'DOGE',
    'SHIB',
    'UNI',
    'XLM',
    'AXS',
    'GALA',
    'MATIC',
    'MKR',
    'LTC',
    'MANA',
    'TRX',
    'EOS',
    'AAVE'
]

//eşleşen tüm coin listesini getir
const BtcTurkGetAll = async () => {
    try {
        let btcTurkArray= [] //temp dizi
        let list = await axios.get('https://api.btcturk.com/api/v2/ticker')
        list.data.data.map(coin => {
            if((baseCurrenyList.some(arrayItemSymbol => coin.numeratorSymbol === arrayItemSymbol)) && coin.denominatorSymbol == 'USDT'){
                btcTurkArray.push({
                   "stockMarketName": "BTCTurk",
                   "price":coin.last,
                   "baseCurrency": coin.numeratorSymbol,
                   "quoteCurrency": coin.denominatorSymbol
                });
            }
        });
        return btcTurkArray;
    } catch (error) {
        console.log(error);
    }

}

//usdt cinsinden istenilen coini getir
const BtcTurkGetUSDT = async (baseCurrency_) => {
    try {
        let btcTurkObj = {baseCurrency: '', price: '', quoteCurrency: ''}
        let coin = await axios.get('https://api.btcturk.com/api/v2/ticker?pairSymbol=' + baseCurrency_)
        btcTurkObj = {
            baseCurrency: coin.data.data[0].numeratorSymbol,
            price: coin.data.data[0].last,
            quoteCurrency: coin.data.data[0].denominatorSymbol
        }
        return btcTurkObj
    } catch (error) {
        console.log(error);
    }
}

export default {BtcTurkGetAll, BtcTurkGetUSDT}