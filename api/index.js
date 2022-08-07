import axios from "axios";

export default async (req, res) => {
	const { message, event, project } = req.body;

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

	await axios.post(
		"https://discord.com/api/webhooks/1005757261681020969/uOX4wYf8_Wb2_o3cyD4Ck8hXAR0kXYRfnd7OIrTCCZO0O-KsADl4zLbSTKr77xBu7c0o",
		data
	);
	return res.json({ message: "Success" });
};
