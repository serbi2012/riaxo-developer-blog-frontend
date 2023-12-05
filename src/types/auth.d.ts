export interface IAuth {
    accessToken: string;
    refreshToken: string;
    userData: any;
    role: "admin" | "error" | "guest";
}
