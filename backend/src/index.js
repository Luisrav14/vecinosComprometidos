import app from "./app";

const main = () => {
  app.listen(app.get("port"));
  console.log(`[express] Server on port ${app.get("port")}`);
};

main();
