import { app } from "./app.js";
import ConnectToDB from "./data/database.js";

const Port = process.env.PORT || 4501;
ConnectToDB();

app.listen(Port, () => console.log(`Server is running on port ${Port}`));
