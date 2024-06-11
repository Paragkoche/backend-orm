import { Todo } from "../model/todo";
import { DataSource } from "typeorm";

export const db = new DataSource({
    type: "better-sqlite3",
    database: "./database.db",
    synchronize: true,
    // logger: "simple-console",
    // logging: true,
    entities: [Todo]
})