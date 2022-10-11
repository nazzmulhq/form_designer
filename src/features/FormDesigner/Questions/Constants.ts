import { AlignType } from 'rc-table/lib/interface';
export interface Question {
   name: string;
   hint: string;
   type: string;
   mandatory: string,
   defaultResponse: string;
   appearance: string;
   index?: number;
   seed?: string;
   tag: string;
   tagDescription: string;
   parameters: boolean;
   options?: any;
   logicList: any[];
   ratings: {
      columns: {
         id: string | number;
         title?: string;
         subTitle?: string;
      }[];
      rows: {
         id: string;
         title: string;
         subTitle: string;
      }[];
   }
   validationCode: string;
   errorMsg: string;
   dataColumnName: string;
   repeat: boolean;
   questions?: any[];
   path: string;
   expanded?: boolean;
   groupAppearance: boolean,
   label: any;
   requiredMessage: any;
   list_name: string;
   calculation: string;
   validation: any;
   acceptedFile: string;
   koboScoreChoices: string;
}

export const questionDefaultValue: Question = {
   name: '',
   label: {
      english: '',
      bangla: '',
   },
   hint: '',
   type: '',
   mandatory: '',
   defaultResponse: '',
   appearance: '',
   index: -1,
   seed: '',
   tag: '',
   tagDescription: '',
   parameters: false,
   acceptedFile: '',
   koboScoreChoices: '',
   ratings: {
      columns: [
         {
            title: '',
            subTitle: '',
            id: '1',

         },
         {
            title: 'Option',
            subTitle: 'automatic',
            id: '2',
         },
         {
            title: 'Option',
            subTitle: 'automatic',
            id: '3',
         },
      ],
      rows: [
         {
            id: '1',
            title: 'Option',
            subTitle: 'automatic',
         }
      ]
   },
   logicList: [],
   validationCode: '',
   errorMsg: '',
   dataColumnName: '',
   repeat: false,
   questions: [],
   path: '',
   expanded: false,
   groupAppearance: false,
   list_name: '',
   calculation: '',
   requiredMessage: {
      english: '',
      bangla: '',
   },
   validation: {
      condition: '',
      value: '',
      errorMsg: '',
   }
};


export const sampleQuestionTree2 = [
   {
      "name": " jkdfj kd",
      "label": {
         "english": "dfjkha kjdhf",

      },
      "hint": "",
      "type": "Text",
      "mandatory": "",
      "defaultResponse": "",
      "appearance": "",
      "index": -1,
      "seed": "",
      "tag": "",
      "tagDescription": "",
      "parameters": false,
      "logicList": [],
      "validationCode": "",
      "errorMsg": "",
      "dataColumnName": "",
      "repeat": false,
      "questions": [],
      "path": "0",
      "expanded": false,
      "groupAppearance": false,
      "requiredMessage": {
         "english": "",
         "bangla": ""
      }
   },
   {
      "name": "kaj",
      "label": {
         "english": "gender"
      },
      "hint": "",
      "type": "select_one",
      "mandatory": "",
      "defaultResponse": "",
      "appearance": "",
      "index": -1,
      "seed": "",
      "tag": "",
      "tagDescription": "",
      "parameters": false,
      "logicList": [],
      "validationCode": "",
      "errorMsg": "",
      "dataColumnName": "",
      "repeat": false,
      "questions": [],
      "path": "1",
      "expanded": false,
      "groupAppearance": false,
      "requiredMessage": {
         "english": "",
         "bangla": ""
      },
      "options": [
         {
            "option": "male",
            "value": "m"
         },
         {
            "option": "female",
            "value": "f"
         }
      ]
   },
   {
      "name": "",
      "label": {
         "english": "",
         "bangla": ""
      },
      "hint": "",
      "type": "Text",
      "mandatory": "",
      "defaultResponse": "",
      "appearance": "",
      "index": -1,
      "seed": "",
      "tag": "",
      "tagDescription": "",
      "parameters": false,
      "logicList": [],
      "validationCode": "",
      "errorMsg": "",
      "dataColumnName": "",
      "repeat": false,
      "questions": [],
      "path": "1",
      "expanded": false,
      "groupAppearance": false,
      "requiredMessage": {
         "english": "",
         "bangla": ""
      }
   }
]

export const sampleQuestionTree = [
   {
      "name": "grp_0",
      "label": {
         "english": "Complete the sentences below with the given expressions dealing with cause",
         "bangla": ""
      },
      "hint": "",
      "type": "Group Question",
      "mandatory": "",
      "defaultResponse": "",
      "appearance": "",
      "index": -1,
      "seed": "",
      "tag": "",
      "tagDescription": "",
      "parameters": false,
      "expanded": true,
      "logicList": [],
      "validationCode": "",

      "dataColumnName": "",
      "repeat": false,
      "required_message": {
         "english": "",
         "bangla": ""
      },
      "questions": [
         {
            "name": "grp_0_g_0",
            "label": {
               "english": "Rewrite the following sentences choosing the best option from the provid",
               "bangla": ""
            },
            "hint": "",
            "type": "Group Question",
            "mandatory": "",
            "defaultResponse": "",
            "appearance": "",
            "index": 0,
            "seed": "",
            "tag": "",
            "tagDescription": "",
            "parameters": false,
            "expanded": true,
            "logicList": [],
            "validationCode": "",

            "dataColumnName": "",
            "repeat": false,
            "required_message": {
               "english": "",
               "bangla": ""
            },
            "questions": [
               {
                  "name": "grp_0_0_q_1",
                  "label": {
                     "english": "Answer the following questions as instructed",
                     "bangla": ""
                  },
                  "hint": "it will help to make the report",
                  "type": "select_one",
                  "mandatory": "no",
                  "defaultResponse": "2",
                  "appearance": "",
                  "index": 0,
                  "seed": "",
                  "tag": "",
                  "tagDescription": "",
                  "parameters": false,
                  "expanded": false,
                  "options": [
                     {
                        "option": "option 1",
                        "value": 1
                     },
                     {
                        "option": "option 2",
                        "value": 2
                     }
                  ],
                  "logicList": [],
                  "validationCode": "",

                  "dataColumnName": "",
                  "repeat": false,
                  "questions": [],
                  "path": "0,0,0",
                  "required_message": {
                     "english": "",
                     "bangla": ""
                  }
               },
               {
                  "name": "grp_0_0_q_2",
                  "label": {
                     "english": "Choose the correct word for the following expressions.",
                     "bangla": ""
                  },
                  "hint": "",
                  "type": "Multiple Select",
                  "mandatory": "no",
                  "defaultResponse": "",
                  "appearance": "minimal",
                  "index": 1,
                  "seed": "",
                  "tag": "",
                  "tagDescription": "",
                  "parameters": false,
                  "expanded": false,
                  "options": [
                     {
                        "option": "option 1",
                        "value": 1
                     },
                     {
                        "option": "option 2",
                        "value": 2
                     }
                  ],
                  "logicList": [
                     {
                        "questionName": "Answer the following questions as instructed",
                        "questionId": 1634451321193,
                        "value": "",
                        "condition": {
                           "label": "Was Answered",
                           "value": "was_answered"
                        }
                     }
                  ],
                  "validationCode": "",

                  "dataColumnName": "",
                  "repeat": false,
                  "questions": [],
                  "path": "0,0,1",
                  "required_message": {
                     "english": "please select a correct word",
                     "bangla": ""
                  }
               }
            ],
            "path": "0,0"
         },
         {
            "name": "grp_0_0_q_3",
            "label": {
               "english": "As a sales representative of an electronics company write a product information of ",
               "bangla": ""
            },
            "hint": "",
            "type": "Range",
            "mandatory": "",
            "defaultResponse": "",
            "appearance": "",
            "index": 3,
            "seed": "",
            "tag": "",
            "tagDescription": "",
            "parameters": false,
            "expanded": false,
            "options": [
               {
                  "option": "option 1",
                  "value": 1
               },
               {
                  "option": "option 2",
                  "value": 2
               }
            ],
            "logicList": [],
            "validationCode": "",

            "dataColumnName": "",
            "repeat": false,
            "questions": [],
            "path": "",
            "required_message": {
               "english": "",
               "bangla": ""
            }
         },
         {
            "name": "grp_0_0_q_4",
            "label": {
               "english": "Write a memo with your advice to someone planning to travel to Nepal for business",
               "bangla": ""
            },
            "hint": "video to have a proof",
            "type": "Video",
            "mandatory": "no",
            "defaultResponse": "not provided",
            "appearance": "compact",
            "index": 2,
            "seed": "",
            "tag": "",
            "tagDescription": "",
            "parameters": false,
            "expanded": false,
            "logicList": [],
            "validationCode": "",

            "dataColumnName": "",
            "repeat": false,
            "questions": [],
            "path": "0,2",
            "required_message": {
               "english": "",
               "bangla": ""
            }
         },
         {
            "name": "grp_0_q_5",
            "label": {
               "english": "Write instruction to recharge the mobile phone",
               "bangla": ""
            },
            "hint": "",
            "type": "Barcode",
            "mandatory": "",
            "defaultResponse": "",
            "appearance": "",
            "index": 5,
            "seed": "",
            "tag": "",
            "tagDescription": "",
            "parameters": false,
            "expanded": false,
            "logicList": [],
            "validationCode": "",

            "dataColumnName": "",
            "repeat": false,
            "questions": [],
            "path": "",
            "required_message": {
               "english": "",
               "bangla": ""
            }
         }
      ],
      "path": "0"
   },
   {
      "name": "grp_0_g_2",
      "label": {
         "english": "Prepare a brochure design for a travel agency serving in Nepal for four decades",
         "bangla": ""
      },
      "hint": "",
      "type": "Group Question",
      "mandatory": "",
      "defaultResponse": "",
      "appearance": "",
      "index": -1,
      "seed": "",
      "tag": "",
      "tagDescription": "",
      "parameters": false,
      "expanded": true,
      "logicList": [
         {
            "questionName": "grp_0_0_q_2",
            "questionId": 1634451321193,
            "value": "",
            "condition": {
               "label": "Was Answered",
               "value": "was_answered"
            }
         }
      ],
      "required_message": {
         "english": "",
         "bangla": ""
      },
      "validationCode": "",

      "dataColumnName": "",
      "repeat": false,
      "questions": [
         {
            "name": "grp_0_g_2_q1",
            "label": {
               "english": "Reading prepares you to respond critically to the ideas of other",
               "bangla": ""
            },
            "hint": "",
            "type": "select_one",
            "mandatory": "yes",
            "defaultResponse": "2",
            "appearance": "label",
            "index": 0,
            "seed": "",
            "tag": "",
            "tagDescription": "",
            "parameters": false,
            "expanded": false,
            "required_message": {
               "english": "",
               "bangla": ""
            },
            "options": [
               {
                  "option": "option 1",
                  "value": 1
               },
               {
                  "option": "option 2",
                  "value": 2
               }
            ],
            "logicList": [],
            "validationCode": "",

            "dataColumnName": "",
            "repeat": false,
            "questions": [],
            "path": "1,0"
         },
         {
            "name": "grp_0_g_2_q1",
            "label": {
               "english": "ou recognize the verbal signals? Enumerate each of them with the examples.",
               "bangla": ""
            },
            "hint": "",
            "type": "Multiple Select",
            "mandatory": "no",
            "defaultResponse": "1",
            "appearance": "",
            "index": 1,
            "seed": "",
            "tag": "",
            "tagDescription": "",
            "parameters": false,
            "expanded": false,
            "required_message": {
               "english": "please select verbal signals",
               "bangla": ""
            },
            "options": [
               {
                  "option": "option 1",
                  "value": 1
               },
               {
                  "option": "option 2",
                  "value": 2
               }
            ],
            "logicList": [],
            "validationCode": "",
            "dataColumnName": "",
            "repeat": false,
            "questions": [],
            "path": "1,1"
         }
      ],
      "path": "1"
   },
   {
      "name": "grp_0_g_2_q1",
      "label": {
         "english": "Read the following paragraph and answer the question asked below.",
         "bangla": ""
      },
      "hint": "",
      "type": "Number",
      "mandatory": "no",
      "required_message": {
         "english": "you didn't connect enter the correct number",
         "bangla": ""
      },
      "defaultResponse": "",
      "appearance": "",
      "index": 2,
      "seed": "",
      "tag": "",
      "tagDescription": "",
      "parameters": false,
      "expanded": false,
      "logicList": [
         {
            "questionName": "Answer the following questions as instructed",
            "questionId": 1634451321193,
            "value": "",
            "condition": {
               "label": "Was Answered",
               "value": "was_answered"
            }
         }
      ],
      "validationCode": "",
      "dataColumnName": "",
      "repeat": false,
      "questions": [],
      "path": "2"
   }
]

export const activeStyle = (iconHover: any) => ({
   border: '1px solid #2196f3',
   width: '100%',
   boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
   backgroundColor: iconHover.bg ? iconHover.bg : 'rgb(251, 394, 521)',
});

export const inActiveStyle = (iconHover: any) => ({
   border: '1px solid lightgray',
   width: '100%',
   height: '100%',
   backgroundColor: iconHover.bg,
});