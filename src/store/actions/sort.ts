export const SORT_INIT = "sort/SORT_INIT" as const;

export const sort = (data: string) => ({
    type: typeof SORT_INIT, 
    payload: data
})