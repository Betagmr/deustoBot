const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.
const chooseWinner = (coin1, coin2) =>{
    return coin1.price_change_percentage_24h > coin2.price_change_percentage_24h 
        ? coin1.image : coin2.image;
}
const currencyCompareTemplate = (coin1, coin2) =>{
    const embed = new MessageEmbed()
    .setColor('#0099ff')
	.setTitle(`${coin1.name} vs ${coin2.name}`)
    .setDescription(`${coin1.symbol}/usdt \n ${coin2.symbol}/usdt`)
	.addFields(
    { name: 'Ranking compare', value: `${coin1.market_cap_rank} vs ${coin2.market_cap_rank} `},
    { name: 'Current price compare', value: `${coin1.current_price}$ vs ${coin2.current_price}$`},
	{ name: 'Market cap compare', value: `${coin1.market_cap}$ vs ${coin2.market_cap}$`},
    { name: 'Current volume compare', value: `${coin1.total_volume}$ vs ${coin2.total_volume}$`},
    { name: 'Change percentage compare', value: `${coin1.price_change_percentage_24h}% vs ${coin2.price_change_percentage_24h}%`},
    { name: 'Winner of the day:', value: '\u200b'}
	)
	.setTimestamp()
	.setFooter({ text: 'API coingecko', iconURL: 'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png' })
    .setImage(chooseWinner(coin1, coin2))
    
    return embed
}

module.exports = currencyCompareTemplate