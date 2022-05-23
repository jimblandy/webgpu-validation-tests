import * as utils from '../utils.js';

export default async function valid_to_use() {
    const adapter = await navigator.gpu.requestAdapter();
    const device1 = await adapter.requestDevice();
    const device2 = await adapter.requestDevice();

    device1.pushErrorScope("validation");
    device2.pushErrorScope("validation");

    const index_buffer1 = device1.createBuffer({
        size: 4,
        usage: GPUBufferUsage.INDEX
    });
    
    const encoder2 = device2.createRenderBundleEncoder({
      colorFormats: ["r8unorm"]
    })
    encoder2.setIndexBuffer(index_buffer1, "uint32");
    encoder2.finish({})

    await utils.pop_scopes(device1, device2);

    console.log("valid-to-use done");
}
