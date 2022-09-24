export const SELECT_BOX_OPEN = "selectbox/SELECT_BOX_OPEN" as const;

export const open = (data: string) => ({
    type: typeof SELECT_BOX_OPEN, 
    payload: data
});