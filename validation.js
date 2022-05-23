export default async function validation() {
    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter.requestDevice();

    device.pushErrorScope("validation");

    const encoder = device.createRenderBundleEncoder({
      colorFormats: ["r8unorm"]
    })
    encoder.draw(0, 0, 0, 0, 0);
    encoder.finish({})
    
    const error = await device.popErrorScope();
    if (error) {
        console.log(`error: ${error.message}`);
    } else {
        console.log("no errors");
    }
}
