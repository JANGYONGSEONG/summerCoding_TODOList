const MyApp = requier('../app');
const app = MyApp.app;

const port = 8080;

app.listen(port, () => console.log("Listening on port 8080!"));
