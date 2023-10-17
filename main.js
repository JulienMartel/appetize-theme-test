init();

async function init() {
  const client = await window.appetize.getClient("#appetize");

  const orientationEl = document.querySelector("#orientation");
  const themeEl = document.querySelector("#theme");

  client.on("session", (session) => {
    orientationEl.addEventListener("click", () => session.rotate("left"));

    themeEl.addEventListener("click", async () => {
      await client.setConfig({ device: "iphone11pro" }); // this ends the sessison, and applies properly
      await client.setConfig({ appearance: "light" }); // this does not end the session, and does not apply properly
    });
  });

  await client.startSession();
}
