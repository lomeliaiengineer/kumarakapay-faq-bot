const { Payload } = require('dialogflow-fulfillment');

const infoMsg = (infoItems) => {
    let infoPayload = [];
    if (infoItems.length > 1) {
        infoItems.forEach(item => {
            infoPayload = [...infoPayload, {
                type: "info",
                title: item.title,
                subtitle: item.subtitle,
                image: {
                    src: {
                        rawUrl: item.img
                    }
                },
                actionLink: item.link
            }]
        });
    } else {
        infoPayload = [{
            type: "info",
            title: infoItems[0].title,
            subtitle: infoItems[0].subtitle,
            image: {
                src: {
                    rawUrl: infoItems[0].img
                }
            },
            actionLink: infoItems[0].link
        }]
    }
    return new Payload(
        'PLATFORM_UNSPECIFIED',
        {
            richContent: [
                infoPayload
            ]
        },
        { sendAsMessage: true, rawPayload: true },
    );
}

module.exports = { infoMsg }

// const info = [{title:'info', subtitle:'info', img:'https://okdiario.com/img/2019/05/29/receta-de-cachapa-venezolana-1.jpg', link: ''}]