export const PLAN = "Plan";
export const TODO = "Todo";
export const DONE = "Done";

export interface IJettlo {
    readonly id:string;
    title:string;
    description:string;
    status:string;
}
