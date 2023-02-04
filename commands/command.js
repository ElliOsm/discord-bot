const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('command')
		.setDescription('This is the bots description!'),
	async execute(interaction) {
		await interaction.reply('This is the bots response!');
	},
};