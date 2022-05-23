document.addEventListener("DOMContentLoaded", async () => {
    const hash = document.location.hash.replace(/[^-_a-zA-Z0-9]/g, "");
    if (hash == "") {
        push_message(`Unrecognized fragment: ${document.location.hash}`);
        help();
        return;
    }

    const path = `./tests/${hash}.js`;
    try {
        const mod = await import(path);
    } catch (e) {
        push_message(`Error importing ${path} (check console, too)`);
        push_message(e.toString());
        help();
    }
})

function push_message(text) {
    const message = document.createElement('div');
    message.textContent = text;
    const canvas = document.getElementById('c');
    canvas.parentNode.insertBefore(message, canvas);
}

function help() {
    push_message(`Specify a fragment to pick a test. See 'dispatch.js' for options.`);
}
