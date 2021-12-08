import axios from 'axios'

const baseCurrenyList = [
    'BTC',
    'ETH',
    'XRP',
    'SOL',
    // 'ADA', ADA BURADA MEVCUT DEĞİL
    // 'DOT', DOT BURADA MEVCUT DEĞİL
    'DOGE',
    'SHIB',
    'UNI',
    // 'XLM', XLM BURADA MEVCUT DEĞİL,
    'AXS',
    'GALA',
    'MATIC',
    'MKR',
    'LTC',
    'MANA',
    'TRX',
    // 'EOS', EOS BURADA MEVCUT DEĞİL,
    'AAVE'
]

//eşleşen tüm coin listesini getir
const FTXGetAll = async () => {
    try {
        let ftxArray= [] //temp dizi
        let list = await axios.get('https://ftx.com/api/markets')
        list.data.result.map(coin => {
            if((baseCurrenyList.some(arrayItemSymbol => coin.baseCurrency === arrayItemSymbol)) && coin.quoteCurrency == 'USD'){
                ftxArray.push({
                   "price":coin.price,
                   "baseCurrency": coin.baseCurrency,
                   "quoteCurrency": coin.quoteCurrency
                });
            }
        });
        return ftxArray;
    } catch (error) {
        console.log(error);
    }

}

//usd cinsinden istenilen coini getir
const FTXGetUSD = async (baseCurrency_) => {
    try {
        let ftxObj = {baseCurrency: '', price: '', quoteCurrency: ''}
        let coin = await axios.get('https://ftx.com/api/markets/' + baseCurrency_ + '/USD')
        ftxObj = {
            baseCurrency: coin.data.result.baseCurrency,
            price: coin.data.result.price,
            quoteCurrency: coin.data.result.quoteCurrency
        }
        return ftxObj
    } catch (error) {
        console.log(error);
    }
}

export default {FTXGetAll, FTXGetUSD}
