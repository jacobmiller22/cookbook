export interface Member {
  name: string;
  username: string;
  image: string;
  createdAt: string;
}

export interface PrismaProfile {
  bio: string;
  recipes: any[];
  recipeCount: number;
}

export interface Profile extends Omit<Member, "createdAt">, PrismaProfile {
  joinedAt: Date;
}
