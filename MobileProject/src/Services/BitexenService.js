import axios from 'axios'

const baseCurrenyList = [
    'BTCUSDT',
    'ETHUSDT',
    'XRPUSDT',
    // 'SOL', USDT YOK
    'ADAUSDT',
    // 'DOT', DOT BURADA MEVCUT DEĞİL
    // 'DOGE' DODGE BURADA MEVCUT DEĞİL,
    // 'SHIB' SHIB BURADA MEVCUT DEĞİL,
    // 'UNI' UNI BURADA MEVCUT DEĞİL,
    'XLMUSDT', 
    // 'AXS' AXS BURADA MEVCUT DEĞİL,
    // 'GALA' GALA BURADA MEVCUT DEĞİL,
    // 'MATIC' MATIC BURADA MEVCUT DEĞİL,
    // 'MKR' MKR BURADA MEVCUT DEĞİŞ,
    'LTCUSDT',
    // 'MANA',
    // 'TRX',
    // 'EOS', EOS BURADA MEVCUT DEĞİL,
    // 'AAVE', AAVE BURADA MEVCUT DEĞİL
]

//eşleşen tüm coin listesini getir
const BitexenGetAll = async () => {
    try {
        let bitexenArray= []
        let list = await axios.get('https://www.bitexen.com/api/v1/ticker/')
            bitexenArray.push(
                {
                    'price': list.data.data.ticker.BTCUSDT.last_price,
                    'baseCurrency': list.data.data.ticker.BTCUSDT.market.base_currency_code,
                    'quoteCurrency': list.data.data.ticker.BTCUSDT.market.counter_currency_code,
                },
                {
                    'price': list.data.data.ticker.ETHUSDT.last_price,
                    'baseCurrency': list.data.data.ticker.ETHUSDT.market.base_currency_code,
                    'quoteCurrency': list.data.data.ticker.ETHUSDT.market.counter_currency_code,
                },
                {
                    'price': list.data.data.ticker.XRPUSDT.last_price,
                    'baseCurrency': list.data.data.ticker.XRPUSDT.market.base_currency_code,
                    'quoteCurrency': list.data.data.ticker.XRPUSDT.market.counter_currency_code,
                },
                {
                    'price': list.data.data.ticker.ADAUSDT.last_price,
                    'baseCurrency': list.data.data.ticker.ADAUSDT.market.base_currency_code,
                    'quoteCurrency': list.data.data.ticker.ADAUSDT.market.counter_currency_code,
                },
                {
                    'price': list.data.data.ticker.XLMUSDT.last_price,
                    'baseCurrency': list.data.data.ticker.XLMUSDT.market.base_currency_code,
                    'quoteCurrency': list.data.data.ticker.XLMUSDT.market.counter_currency_code,
                },
                {
                    'price': list.data.data.ticker.LTCUSDT.last_price,
                    'baseCurrency': list.data.data.ticker.LTCUSDT.market.base_currency_code,
                    'quoteCurrency': list.data.data.ticker.LTCUSDT.market.counter_currency_code,
                }              
            )
        return bitexenArray
    } catch (error) {
        console.log(error);
    }

}

//usdt cinsinden istenilen coini getir
const BitexenGetUSDT = async (baseQuoteCurrency_) => {
    try {
        let bitexenObj = {baseCurrency: '', price: '', quoteCurrency: ''}
        let coin = await axios.get('https://www.bitexen.com/api/v1/ticker/' + baseQuoteCurrency_ + '/')
        bitexenObj = {
            baseCurrency: coin.data.data.ticker.market.base_currency_code,
            price: coin.data.data.ticker.last_price,
            quoteCurrency: coin.data.data.ticker.market.counter_currency_code
        }
        return bitexenObj
    } catch (error) {
        console.log(error);
    }
}

export default {BitexenGetAll, BitexenGetUSDT}
