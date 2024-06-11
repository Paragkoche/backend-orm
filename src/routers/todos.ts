import { Router } from "express"
import { getTodo, getTodoById } from "../controller/todos"
const route = Router();

route.get("/", getTodo);
route.post("/crate");
route.put("/update");
route.delete("/delete");
route.get("/:id", getTodoById)

export default route



//
// export default slkslfjs

// export const fun_name =()=>{}