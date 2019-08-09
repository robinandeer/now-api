import { NowRequest, NowResponse } from "@now/node";

import { User } from "../../lib/types";

const USERS: User[] = require("../../data/users.json");

export default (_req: NowRequest, res: NowResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");

  res.json({ users: USERS });
};
