export const config = {
    discordServer: 'https://discord.gg/AbGxtdzDeJ',
    discordLink:
        process.env.REACT_APP_DISCORD_LINK ||
        `https://discord.com/api/oauth2/authorize?client_id=936013380580429824&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fconnect&response_type=code&scope=identify`,
};
