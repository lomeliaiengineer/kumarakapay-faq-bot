$(document).ready(function () {

    window.addEventListener('dfMessengerLoaded', function (event) {
        $r1 = document.querySelector("df-messenger");
        $r2 = $r1.shadowRoot.querySelector("df-messenger-chat");

        //don't show df image
        $r6 = $r1.shadowRoot.querySelector('button#widgetIcon');
        $r6.style.opacity = '0';

        //change size of the chat window
        const style = document.createElement('style');

        style.textContent = `div.chat-wrapper.chat-min[opened="true"] {
            height: auto;
            right: 110px;
            bottom: 11px;
          }
          
          div.chat-wrapper[opened="true"] {
            height: 480px; 
            width: 336px; 
          }
          div.chat-wrapper{
            right: 99px;
            bottom: 53px;
            border-radius: 10px;
          }
          
          @media(max-width: 465px){
            div.chat-wrapper[opened="true"]{
                height: 100vh;
                width: 100%;
            }
            div.chat-wrapper{
                right: 0px;
                bottom: 0;
                border-radius: 0;
            }
          }
        `;

        $r2.shadowRoot.appendChild(style);

        //styles for all messages
        $r3 = $r2.shadowRoot.querySelector('df-message-list');
        const childNodes = Array.from($r3.shadowRoot.childNodes);

        childNodes.forEach(childNode => {
            if (childNode.nodeName === 'STYLE') {
                childNode.textContent = `
                .message-list-wrapper.minimized {
                    flex-direction: row;
                  }
                  
                  .message-list-wrapper.minimized #messageList {
                    overflow-y: hidden;
                  }
                  
                  .message-list-wrapper.minimized #messageList .message {
                    cursor: pointer;
                        margin: 0;
                  }
                  
                  .minimized #messageList > :not(:first-child) {
                    display: none;
                  }
                  
                  .message-list-wrapper #dismissIcon {
                    display: none;
                  }
                  
                  .message-list-wrapper.minimized #dismissIcon {
                    align-self: flex-start;
                        cursor: pointer;
                        display: initial;
                        fill: rgba(0,0,0,0.87);
                        fill: var(--df-messenger-minimized-chat-close-icon-color);
                        flex: 0 0 auto;
                        padding: 10px;
                  }
                  
                  .message-list-wrapper {
                    display: flex;
                    flex-direction: column;
                    flex: 1 1 auto;
                    min-height: 0;
                  }
                  
                  #messageList {
                    display: flex;
                    flex-direction: column;
                    flex: 1 1;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    padding: 10px;
                  }
                  
                  #messageList #typing {
                    font-size: 14px;
                  }
                  
                  #messageList .message {
                    background: white;
                    flex: 0 0 auto;
                    margin-top: 10px;
                    max-width: calc(100% - 28px);
                    word-break: break-word;
                    word-wrap: break-word;
                    border: none;
                    font-family: Montserrat, sans-serif;
                    box-shadow: rgb(0 0 0 / 16%) 0px 1px 3px 0px;
                    color: black;
                    font-size: 13px;
                    padding: 9px 12px;
                    border-radius: 4px;
                  }
                  
                  #messageList .bot-animation {
                    animation: present-yourself 0.3s ease 0.1s forwards;
                        opacity: 0;
                  }
                  
                  #messageList .user-animation {
                    animation: present-yourself 0.3s ease 0.1s forwards;
                        opacity: 0;
                  }
                  
                  #messageList > :first-child {
                    margin-top: auto !important;
                  }
                  
                  #messageList .message.bot-message {
                    align-self: flex-start;
                        background-color: #E1F5FE;
                        background-color: var(--df-messenger-bot-message);
                        margin-right: 75px;
                        line-height: 1.4;
                        
                  }
                  
                  #messageList .message.user-message {
                    align-self: flex-end;
                        background-color: #eeeeee;
                        background-color: var(--df-messenger-user-message);
                        margin-left: 75px;
                        color: white !important;
                  }
                  
                  #typing:after {
                    content: ".";
                        animation: fade_pulse 1s linear infinite;
                  }
                  
                  .minimized .error {
                    display: none;
                  }
                  
                  .error {
                    align-items: center;
                        align-self: center;
                        background-color: black;
                        box-shadow: 1px 4px 15px 0 rgba(0, 0, 0, 0.24);
                        color: white;
                        display: flex;
                        font-family: 'Roboto', sans-serif;
                        font-size: 12px;
                        justify-content: center;
                        margin-top: 0;
                        opacity: 0;
                        padding: 10px;
                        position: absolute;
                        transition: transform 0.2s, opacity 0.2s;
                        transform: translateY(-100%);
                        width: 95%;
                        z-index: 1;
                  }
                  
                  .error.show {
                    opacity: 0.8;
                        transform: translateY(0);
                  }
                  
                  df-card {
                    background-color: white;
                        border: none;
                        border-radius: 4px;
                        box-shadow: rgb(0 0 0 / 16%) 0px 1px 3px 0px;
                        margin-top: 10px;
                  }
                  
                  @keyframes fade_pulse {
                  0% {
                    opacity: 1;
                  }
                  
                  50% {
                    opacity: 0.4;
                  }
                  
                  100% {
                    opacity: 1;
                  }
                  
                  }
                  
                  @keyframes present-yourself {
                  to {
                    opacity: 1;
                  }
                  
                  }`;
            }
        })


        //styles for user messages
        $r4 = $r2.shadowRoot.querySelector('df-messenger-user-input');
        const style2 = document.createElement('style');
        style2.textContent = `.input-container input {
                font-size: 13px !important;
            }
            .input-box-wrapper{
                font-family: 'Montserrat', sans-serif !important;
            }`;
        $r4.shadowRoot.appendChild(style2);

        //styles for title bar
        $r5 = $r2.shadowRoot.querySelector('df-messenger-titlebar');
        const style3 = document.createElement('style');
        style3.textContent = `.title-wrapper {
            font-family: 'Montserrat', sans-serif !important;
            font-size: 17px !important;
        }`;
        $r5.shadowRoot.appendChild(style3);
        
    });
})

