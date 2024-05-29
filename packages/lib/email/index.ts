export enum EmailSendEventType {
  resetPassword2 = "resetPassword2",
  registerProject = "registerProject",
  joinProject = "joinProject",
  verifyEmail = "verifyEmail",
}
export interface EmailSendEvent {
  mailType: EmailSendEventType;
  email: string;
  name: string;
  link?: string;
  code?: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailSendEvent): Promise<boolean> {
  // TODO: add email client
  console.log("email send");
  console.log(data)
  return true;
}
