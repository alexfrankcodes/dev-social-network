import * as postsResolvers from "./posts.js";
import * as usersResolvers from "./users.js";

export default {
  Query: {
    ...postsResolvers.Query,
  },
};
