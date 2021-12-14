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
const KucoinGetAll = async () => {
    try {
        let kucoinArray= [] 
        let list = await axios.get('https://api.kucoin.com/api/v1/market/allTickers')
        list.data.data.ticker.map(coin => {
            if((baseCurrenyList.some(arrayItemSymbol => coin.symbol.split('-')[0] === arrayItemSymbol)) && coin.symbol.split('-')[1] === 'USDT'){
                kucoinArray.push({
                   "stockMarketName": "KuCoin",
                   "price":coin.last,
                   "baseCurrency": coin.symbol.split('-')[0],
                   "quoteCurrency": coin.symbol.split('-')[1]
                });
            }
        });
        return kucoinArray;
    } catch (error) {
        console.log(error);
    }

}

//usdt cinsinden istenilen coini getir
const KucoinGetUSDT = async (baseQuoteCurrency_) => {
    try {
        let kucoinObj = {baseCurrency: '', price: '', quoteCurrency: ''}
        let coin = await axios.get('https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=' + baseQuoteCurrency_)
        kucoinObj = {
            baseCurrency: baseQuoteCurrency_.split('-')[0],
            price: coin.data.data.price,
            quoteCurrency: baseQuoteCurrency_.split('-')[1],
        }
        return kucoinObj
    } catch (error) {
        console.log(error);
    }
}

export default {KucoinGetAll, KucoinGetUSDT}