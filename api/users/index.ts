import { NowRequest, NowResponse } from "@now/node";

import { User } from "../../lib/types";

const USERS: User[] = require("../../data/users.json");

export default (_req: NowRequest, res: NowResponse) => {
  res.json({ users: USERS });
};
