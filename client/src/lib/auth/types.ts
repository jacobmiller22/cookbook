export type TLogin = {
  method: string;
  emailOrUsername: string;
  password: string;
};

export interface IUserfrontUser {
  email: string;
  name: string;
  image: string;
  data: any;
  username: string;
  confirmedAt: string;
  isConfirmed: boolean;
  createdAt: string;
  updatedAt: string;
  model: string;
  tenantId: string;
  userId: string;
  userUuid: string;
  hasRole: (role: string, options?) => boolean;
}
