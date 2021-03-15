const { Payload } = require('dialogflow-fulfillment');

const listMsg = (listItems) => {
    let listPayload = [];
    if (listItems.length > 1) {
        listItems.forEach((item, i) => {
            listPayload = [...listPayload, {
                type: "list",
                title: item.title,
                subtitle: item.subtitle,
                event: {
                    name: item.event,
                    languageCode: "",
                    parameters: {}
                }
            }
            ]
        });
    } else {
        listPayload = [{
            type: "list",
            title: listItems[0].title,
            subtitle: listItems[0].subtitle,
            event: {
                name: listItems[0].event,
                languageCode: "",
                parameters: {}
            }
        }]
    }
    return new Payload(
        'PLATFORM_UNSPECIFIED',
        {
            richContent: [
                listPayload
            ]
        },
        { sendAsMessage: true, rawPayload: true },
    );
}

module.exports = { listMsg }

