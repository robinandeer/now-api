import { NowRequest, NowResponse } from "@now/node";

import { User } from "../../lib/types";

const USERS: User[] = require("../../data/users.json");

export default (req: NowRequest, res: NowResponse) => {
  const userId = req.query.id;
  const user = USERS.find(user => user.id === userId);

  if (!user) {
    res.status(404).end("Not found");
    return;
  }

  res.json(user);
};
