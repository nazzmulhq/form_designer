/**
 *  Form Reducers
 */
const setForm = (state: any, action: any) => {
    const key = Object.keys(action.payload)[0];
    state[key] = action.payload[key];
};

const setLayoutSettings = (state: any, action: any) => {
    Object.keys(action.payload).forEach((key: string) => {
        state[key] = action.payload[key];
    });
}

export default { setForm, setLayoutSettings };
