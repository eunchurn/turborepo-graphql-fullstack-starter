import { nonNull, mutationField, stringArg } from "nexus";
import { updateEmailOrPassword } from "supertokens-node/recipe/emailpassword";
import { getUser } from "supertokens-node";

export const changePassword = mutationField("changePassword", {
  type: "Boolean",
  description: "Change password",
  args: { newPassword: nonNull(stringArg()) },
  async resolve(_root, { newPassword }, { session }) {
    if (!session) throw new Error("Unauthenticated");

    const userId = session.getUserId();
    const userInfo = await getUser(userId);
    if (!userInfo) throw new Error("User not found");

    const result = await updateEmailOrPassword({
      recipeUserId: session.getRecipeUserId(),
      password: newPassword,
    });
    if (result.status !== "OK") throw new Error("Password change failed");

    return true;
  },
});
