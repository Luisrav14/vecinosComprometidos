import app from "./app";

const main = () => {
  app.listen(app.get("port"));
  console.log(`[express] Server corriendo en el puerto ${app.get("port")}`);
};

main();
