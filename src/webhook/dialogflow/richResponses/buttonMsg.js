const { Payload } = require('dialogflow-fulfillment');

const buttonMsg = (buttons) => {
    let buttonsPayload = [];
    if(buttons.length > 1){
        buttons.forEach(button => {
            buttonsPayload = [...buttonsPayload, {
                type: "button",
                icon: {
                  type: button.icon,
                  color: button.color
                },
                text: button.text,
                link: button.link,
                event: {
                  name: button.event,
                  languageCode: "",
                  parameters: {}
                }
              }]
        });
    }else{
        buttonsPayload = [{
            type: "button",
            icon: {
              type: buttons[0].icon,
              color: buttons[0].color
            },
            text: buttons[0].text,
            link: buttons[0].link,
            event: {
              name: buttons[0].event,
              languageCode: "",
              parameters: {}
            }
          }];
    }
    return new Payload(
        'PLATFORM_UNSPECIFIED',
        {
            richContent: [
                buttonsPayload
            ]
        },
        { sendAsMessage: true, rawPayload: true },
    );
}

module.exports = { buttonMsg }

