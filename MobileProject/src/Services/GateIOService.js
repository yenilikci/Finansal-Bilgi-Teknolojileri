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
const GateioGetAll = async () => {
    try {
        let gateioArray = [] 
        let list = await axios.get('https://api.gateio.ws/api/v4/futures/usdt/contracts')
        list.data.map(coin => {
            if(baseCurrenyList.some(el => coin.name.split('_')[0] === el) && coin.name.split('_')[1] === 'USDT'){
                gateioArray.push({
                        "stockMarketName": "GateIO",
                        'price': coin.last_price,
                        "baseCurrency": coin.name.split('_')[0],
                        "quoteCurrency": coin.name.split('_')[1]
                    })
            }
        });
        return gateioArray;
    } catch (error) {
        console.log(error);
    }

}

//usdt cinsinden istenilen coini getir
const GateioGetUSDT = async (baseQuoteCurrency_) => {
    try {
        let gateioObj = {baseCurrency: '', price: '', quoteCurrency: ''}
        let coin = await axios.get('https://api.gateio.ws/api/v4/futures/usdt/contracts/' + baseQuoteCurrency_ )
        gateioObj = {
            'price': coin.data.last_price,
            "baseCurrency": coin.data.name.split('_')[0],
            "quoteCurrency": coin.data.name.split('_')[1]
        }
        return gateioObj
    } catch (error) {
        console.log(error);
    }
}

export default {GateioGetAll, GateioGetUSDT}