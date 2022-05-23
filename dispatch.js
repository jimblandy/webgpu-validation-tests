import validation from './validation.js';
import valid_to_use from './valid-to-use.js';

document.addEventListener("DOMContentLoaded", async () => {
    switch (document.location.hash) {
    case '#validation': validation(); break;
    case '#valid-to-use': valid_to_use(); break;
    default: 
        {
            if (document.location.hash != '') {
                push_message(`Unrecognized fragment: ${document.location.hash}`);
            }
            push_message(`Specify a fragment to pick a test. See 'dispatch.js' for options.`);
        }
    }
})

function push_message(text) {
    const message = document.createElement('div');
    message.textContent = text;
    const canvas = document.getElementById('c');
    canvas.parentNode.insertBefore(message, canvas);
}
