export const getAuthHeader = (): { Authorization: string } => {
  return { Authorization: "Bearer " + process.env.UF_API_KEY };
};

export const verifyWebhookAuth = (bearer: string) => {
  return bearer === process.env.UF_WH_API_KEY;
};

export enum WebhookAction {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
}
