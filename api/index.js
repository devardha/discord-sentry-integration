import axios from "axios";

export default async (req, res) => {
	const { api_key } = req.query;
	const { message, event, project } = req.body;

	if (api_key !== process.env.API_KEY) {
		return res.status(401).send("Invalid API key");
	}

	const browser = event.tags[0][1];
	const os = event.tags[2][1];

	const data = {
		username: "Sentry",
		avatar_url:
			"https://pbs.twimg.com/profile_images/1182715338808385537/TJKJyg8V.jpg",
		embeds: [
			{
				title: `**Error ${event.request.method} ${event.request.url}**`,
				description: message,
				color: 15548997,
				timestamp: new Date(event.timestamp * 1000),
				fields: [
					{
						name: "\u200b",
						value:
							"```" + `Browser: ${browser} | OS: ${os}` + "```",
					},
				],
				footer: {
					text: `${project}`,
				},
			},
		],
	};

	await axios.post(process.env.DISCORD_WEBHOOK, data);
	return res.json({ message: "Success" });
};
