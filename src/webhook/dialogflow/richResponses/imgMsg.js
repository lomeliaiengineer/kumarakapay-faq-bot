const { Payload } = require('dialogflow-fulfillment');

const imgMsg = (imgs) => {
    let imgsPayload = [];
    if (imgs.length > 1) {
        imgs.forEach(img => {
            imgsPayload = [...imgsPayload, {
                type: "image",
                rawUrl: img.img,
                accessibilityText: img.text
            }]
        });
    } else {
        imgsPayload = [{
            type: "image",
            rawUrl: imgs[0].img,
            accessibilityText: imgs[0].text
        }];
    }
    return new Payload(
        'PLATFORM_UNSPECIFIED',
        {
            richContent: [
                imgsPayload
            ]
        },
        { sendAsMessage: true, rawPayload: true },
    );
}

module.exports = { imgMsg }

