const { Payload } = require('dialogflow-fulfillment');

const suggestionsT = (suggestions, text) => {
	let keyboard = [];
	if (suggestions.length > 1) {
		suggestions.forEach((el) => {
			keyboard = [
				...keyboard,
				[
					{
						text: el,
						request_write_access: true,
					},
				],
			];
		});
	} else {
		keyboard = [
			[
				{
					text: suggestions[0],
					request_write_access: true,
				},
			],
		];
	}
	return new Payload(
		'TELEGRAM',
		{
			text: text,
			reply_markup: {
				one_time_keyboard: true,
				resize_keyboard: true,
				keyboard: keyboard,
			},
		},
		{ sendAsMessage: true },
	);
};

module.exports = { suggestionsT }