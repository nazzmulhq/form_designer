import { questionDefaultValue } from "../Questions/Constants";
import { MULTIPLE_SELECT, SELECT_ONE } from "./Constants";

export const getDefaultValueByQuestionType=(type: any)=>{

    switch(type) {

        case MULTIPLE_SELECT:
            return {...questionDefaultValue, options: [{ option: 'option 1', value: 1 }, { option: 'option 2', value: 2 }]}
        
        case SELECT_ONE:
            return {...questionDefaultValue, options: [{ option: 'option 1', value: 1 }, { option: 'option 2', value: 2 }]}
        
        default:
            return questionDefaultValue;
    }
}