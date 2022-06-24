import { Config } from '@/Config/Config'

export const BASE_URL = Config.API_URL;

export const GOOGLE = {
  //dev
  CLIENT_ID:
    '855212184503-24u4ihapl00nojlr1rai6cvg51id8rf3.apps.googleusercontent.com',
  // '855212184503-24u4ihapl00nojlr1rai6cvg51id8rf3.apps.googleusercontent.com'
  //855212184503-r0i59ahlkqh9stkfpcd9fq0thtqrvecn.apps.googleusercontent.com
};
export const STUDENT = {
  FORGOT_PASSWORD: 'user/forgot_password',
  RESET_PASSWORD: 'user/reset_password',
  RESEND_OTP: 'user/resend_otp',
  VERIFY_OTP: 'user/verify_otp',
};