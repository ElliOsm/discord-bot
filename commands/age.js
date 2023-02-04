const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('When did I join?'),
	async execute(interaction) {
		await interaction.reply(`${interaction.user.username} joined the server on ${interaction.member.joinedAt}.`);
	},
};