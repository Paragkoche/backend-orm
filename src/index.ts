import app from "./app";
import { db } from "./db";


app.listen(8080, async () => {
    await db.initialize();

    console.log("server start on http://localhost:8080");
})