export async function pop_scopes(...devices) {
    let any = false;
    for (let device of devices) {
        const error = await device.popErrorScope();
        if (error) {
            console.log(`error: ${error.message}`);
            any = true;
        }
    }

    if (!any) {
        console.log("no errors");
    }    
}
