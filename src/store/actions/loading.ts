export const LOADING_PENDING = "loading/LOADING_PENDING" as const;
export const LOADING_FINISHED = "loading/LOADING_FINISHED" as const;

interface LoadingPending {
    type: typeof LOADING_PENDING;
    payload: boolean
}
interface LoadingFinished {
    type: typeof LOADING_FINISHED;
    payload: boolean
}

export type LoadingReturnType = LoadingPending | LoadingFinished;

const setLoadingStatus = (param: boolean): LoadingReturnType => {
    const type = param ? LOADING_PENDING : LOADING_FINISHED;
    const payload = param;
    return{ type, payload };
}

export default setLoadingStatus;

