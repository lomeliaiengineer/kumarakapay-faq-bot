const { Payload } = require('dialogflow-fulfillment');

const chipMsg = (chipItems) => {
    let chipPayload = [];
    if (chipItems.length > 1) {
        chipItems.forEach(item => {
            chipPayload = [...chipPayload, {
                text: item.text,
                image: {
                    src: {
                        rawUrl: item.logo
                    }
                },
                link: item.link
            }
            ]
        });
    } else {
        chipPayload = [{
            text: chipItems[0].text,
            image: {
                src: {
                    rawUrl: chipItems[0].logo
                }
            },
            link: chipItems[0].link
        }]
    }
    return new Payload(
        'PLATFORM_UNSPECIFIED',
        {
            richContent: [
                [
                    {
                        type: "chips",
                        options: chipPayload
                    }
                ]
            ]
        },
        { sendAsMessage: true, rawPayload: true },
    );
}

module.exports = { chipMsg }

