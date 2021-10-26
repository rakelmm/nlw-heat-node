import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { Get3LastMessagesControlller } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/message", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new Get3LastMessagesControlller().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router };