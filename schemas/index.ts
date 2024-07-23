import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "이메일 주소를 입력해주세요.",
    })
    .email({
      message: "이메일 주소를 확인해주세요.",
    }),
  password: z.string().min(1, {
    message: "패스워드를 입력해주세요.",
  }),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "이메일 주소를 입력해주세요.",
    })
    .email({
      message: "이메일 주소를 확인해주세요.",
    }),
  password: z.string().min(1, {
    message: "패스워드를 입력해주세요.",
  }),
  name: z.string().min(1, {
    message: "이름을 입력해주세요.",
  }),
});
