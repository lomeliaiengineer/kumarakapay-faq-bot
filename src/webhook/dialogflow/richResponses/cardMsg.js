const { Payload } = require('dialogflow-fulfillment');

const cardMsg = (cardItems) => {
    let cardPayload = [];
    if (cardItems.length > 1) {
        cardItems.forEach(item => {
            cardPayload = [...cardPayload, 
                {
                    type: "image",
                    rawUrl: item.img,
                    accessibilityText: item.imgText,
                },
                {
                    type: "info",
                    title: item.title,
                    subtitle: item.subtitle,
                    actionLink: item.link
                }
            ]
        });
    } else {
        cardPayload = [{
            type: "image",
            rawUrl: cardItems[0].img,
            accessibilityText: cardItems[0].imgText,
        },
        {
            type: "info",
            title: cardItems[0].title,
            subtitle: cardItems[0].subtitle,
            actionLink: cardItems[0].link
        }]
    }
    return new Payload(
        'PLATFORM_UNSPECIFIED',
        {
            richContent: [
                cardPayload
            ]
        },
        { sendAsMessage: true, rawPayload: true },
    );
}

module.exports = { cardMsg }

