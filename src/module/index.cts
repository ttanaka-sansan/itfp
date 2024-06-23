(async () => {
    const { repeat } = await import('./index2.mjs');

    const message: string = "Hello, world!";

    console.log(repeat(message, 3));
})();
