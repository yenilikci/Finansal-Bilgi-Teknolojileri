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
const BinanceGetAll = async () => {
    try {
        let binanceArray = [] 
        let list = await axios.get('https://api.binance.com/api/v3/ticker/price')
        list.data.map(coin => {
            if(coin.symbol.substr(coin.symbol.length-4, coin.symbol.length) === 'USDT'){
                if(baseCurrenyList.some(el => el === coin.symbol.substr(0, coin.symbol.length-4))){
                    binanceArray.push({
                        'price': coin.price,
                        "baseCurrency": coin.symbol.substr(0, coin.symbol.length-4),
                        "quoteCurrency": coin.symbol.substr(coin.symbol.length-4, coin.symbol.length)
                    })
                }
            }
        });
        return binanceArray;
    } catch (error) {
        console.log(error);
    }

}

//usdt cinsinden istenilen coini getir
const BinanceGetUSDT = async (baseQuoteCurrency_) => {
    try {
        let binanceObj = {baseCurrency: '', price: '', quoteCurrency: ''}
        let coin = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=' + baseQuoteCurrency_ )
        binanceObj = {
            baseCurrency: coin.data.symbol.substr(0, coin.data.symbol.length-4),
            price: coin.data.price,
            quoteCurrency: coin.data.symbol.substr(coin.data.symbol.length-4, coin.data.symbol.length)
        }
        return binanceObj
    } catch (error) {
        console.log(error);
    }
}

export default {BinanceGetAll, BinanceGetUSDT}
