const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.

const currencyTemplate = (coin) => {
  const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(coin.name)
    .setDescription(`${coin.symbol}/usdt`)
    .setThumbnail(coin.image)
    .addFields(
      { name: 'Current price', value: `${coin.current_price} $`, inline: true },
      { name: 'Market cap ranking', value: `${coin.market_cap_rank}`, inline: true },
      { name: 'Market cap', value: `${coin.market_cap}$`, inline: true },
      { name: 'All time high', value: `${coin.ath}$`, inline: true },
      { name: 'Last 24h high', value: `${coin.high_24h}$`, inline: true },
      { name: 'Last 24h low', value: `${coin.low_24h}$`, inline: true },
    )
    .setTimestamp()
    .setFooter({ text: 'API coingecko', iconURL: 'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png' });

  return embed;
};

module.exports = currencyTemplate;