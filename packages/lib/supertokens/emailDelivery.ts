import { sendEmail, EmailSendEventType } from "../email";
import { TypeInput } from "supertokens-node/recipe/thirdpartyemailpassword/types";
import moment from "moment";
import { sign } from "jsonwebtoken";

const websiteDomain = process.env.CLIENT_DOMAIN;

export const emailDelivery: TypeInput["emailDelivery"] = {
  override: (originalImplementation) => {
    return {
      ...originalImplementation,
      sendEmail: async function (input) {
        try {
          const {
            type,
            userContext,
            user: { email },
            passwordResetLink,
          } = input;
          const cookies = parseCookie(
            userContext._default.request.request.get("Cookie"),
          );
          const { forward } = cookies;
          const refererUrl =
            userContext._default.request.request.get("Referer");
          if (type !== "PASSWORD_RESET")
            return originalImplementation.sendEmail(input);
          const relativePath = passwordResetLink
            .replace(websiteDomain, "")
            .replace("auth/reset-password", "password-reset");
          const replacedResetLink = new URL(relativePath, refererUrl).href;
          const resetLink = forward
            ? `${replacedResetLink}&forward=${forward}`
            : `${replacedResetLink}&exp=${sign(
                moment().add(1, "hour").format(),
                process.env.API_SECRET,
              )}`;
          await sendEmail({
            mailType: EmailSendEventType.resetPassword2,
            email,
            link: resetLink,
            subject: "비밀번호 재설정 등록 안내",
            name: "",
            message: "",
          });
        } catch (e) {
          console.log(e);
        }
        return void 0;
      },
    };
  },
};

const parseCookie = (cookie: string) => {
  const result = Object.fromEntries(
    cookie.split(/; */).map((c) => {
      const [key, ...v] = c.split("=");
      return [key, decodeURIComponent(v.join("="))];
    }),
  );
  return result;
};
