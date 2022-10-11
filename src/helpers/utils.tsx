/** Interface for an object that is allowed to have any property */
export interface FlexObject {
    [key: string]: any;
}

export const deepClone = (ob: any) => {
    if(Object.keys(ob).length > 0) {
        return JSON.parse(JSON.stringify(ob));
    }else return {};
}
