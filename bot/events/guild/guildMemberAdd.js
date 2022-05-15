module.exports = async (member) => {
  const guild = member.guilds.cache.get('958110264014807090');
  const role = guild.roles.cache.find(r => r.name === 'user');
  const mem = await guild.members.cache.map(e => e);
  const newUser = await guild.members.fetch(mem[1].user.id);
  newUser.roles.add(role);

  guild.channels.cache.get('958110264014807093').send(`Nuevo miembro ${newUser} asginado con el rol ${role}`);
};