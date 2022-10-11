export const sortableOptions = {
    animation: 200,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    ghostClass: 'ghost',
    group: 'shared',
};

export const metaDataList = ['start time', 'end time', 'device id', 'audit', 'username', 'sim serial', 'subscriber id', 'phone number'];
export const formStyles = [
    {
        label: 'Default',
        value: 'default_single_page'
    },
    {
        label: 'Grid Theme',
        value: 'grid_theme'
    },
    {
        label: 'Grid theme with heading all caps',
        value: 'grid_theme_with_heading_all_caps'
    },
    {
        label: 'Multipages',
        value: 'multipages'
    },
    {
        label: 'Grid Theme + Multipages',
        value: 'multipages_grid_theme'
    },
    {
        label: 'Grid Theme + Multipages + Headings in all caps',
        value: 'multipages_grid_theme_headings_all'
    }

]
export const items = [{
    id: 1,
    content: "item 1",
    parent_id: null,
    type: "Group Question",
    questions: [
        {
            id: 2,
            content: "item 2",
            width: 3,
            type: "text",
            parent_id: 1
        },
        {
            id: 3,
            content: "item 3",
            width: 3,
            type: "Group Question",
            parent_id: 1,
            questions: [
                {
                    id: 8,
                    content: "long long time ago",
                    width: 3,
                    type: "text",
                    parent_id: 3,
                },
                {
                    id: 10,
                    content: "Once upon a time",
                    width: 3,
                    type: "text",
                    parent_id: 3,
                }
            ]
        },
        {
            id: 9,
            content: "item 2",
            width: 3,
            type: "text",
            parent_id: 1
        },
    ]
},
{
    id: 4,
    content: "item 2",
    parent_id: null,
    type: "Group Question",
    questions: [
        {
            id: 5,
            content: "item 5",
            width: 3,
            parent_id: 2,
            type: "Group Question",
            questions: [
                { id: 8, content: "item 8", width: 6, type: "text", parent_id: 5 },
                { id: 9, content: "item 9", width: 6, type: "text", parent_id: 5 }
            ]
        },
        {
            id: 6,
            content: "item 6",
            width: 2,
            type: "text",
            parent_id: 2
        },
        {
            id: 7,
            content: "item 7",
            width: 2,
            type: "text",
            parent_id: 2
        }
    ]
}
];

export const quesItems = [

    {
        "name": "",
        "label": {
            "english": "",
            "bangla": ""
        },
        "id": "g1",
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
        "logicList": [],
        "validationCode": "",
        "errorMsg": "",
        "dataColumnName": "",
        "repeat": false,
        "questions": [
            {
                "name": "NAME",
                "label": {
                    "english": "name",
                    "bangla": "name"
                },
                "id": "q1",
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
                "list_name": "adfrt",
                "calculation": "",
                "requiredMessage": {
                    "english": "",
                    "bangla": ""
                }
            },
            {
                "name": "",
                "label": {
                    "english": "",
                    "bangla": ""
                },
                "hint": "",
                "id": "g2",
                "type": "Group Question",
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
                "questions": [
                    {
                        "name": "age",
                        "label": {
                            "english": "age",
                            "bangla": "age"
                        },
                        "id": "q2",
                        "hint": "",
                        "type": "Number",
                        "mandatory": "no",
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
                        "list_name": "kpop",
                        "calculation": "",
                        "requiredMessage": {
                            "english": "",
                            "bangla": ""
                        }
                    },
                    {
                        "name": "",
                        "label": {
                            "english": "black age",
                            "bangla": "black age"
                        },
                        "id": "g4",
                        "hint": "",
                        "type": "Group Question",
                        "mandatory": "no",
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
                        "questions": [
                            {
                                "name": "",
                                "label": {
                                    "english": "",
                                    "bangla": ""
                                },
                                "hint": "",
                                "id": "g3",
                                "type": "Group Question",
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
                                "questions": [
                                    {
                                        "name": "black age",
                                        "label": {
                                            "english": "black age",
                                            "bangla": "black age"
                                        },
                                        "id": "q7",
                                        "hint": "",
                                        "type": "Number",
                                        "mandatory": "no",
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
                                        "list_name": "kpop",
                                        "calculation": "",
                                        "requiredMessage": {
                                            "english": "",
                                            "bangla": ""
                                        }
                                    },
                                    {
                                        "name": "white point",
                                        "label": {
                                            "english": "white point",
                                            "bangla": "white point"
                                        },
                                        "id": "q6",
                                        "hint": "",
                                        "type": "Point",
                                        "mandatory": "no",
                                        "defaultResponse": "",
                                        "appearance": "list-nolabel",
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
                                        "path": "0,2",
                                        "expanded": false,
                                        "groupAppearance": false,
                                        "list_name": "kopa",
                                        "calculation": "",
                                        "requiredMessage": {
                                            "english": "",
                                            "bangla": ""
                                        }
                                    }
                                ],
                                "path": "",
                                "expanded": false,
                                "groupAppearance": false,
                                "list_name": "",
                                "calculation": "",
                                "requiredMessage": {
                                    "english": "",
                                    "bangla": ""
                                }
                            }
                        ],
                        "path": "1",
                        "expanded": false,
                        "groupAppearance": false,
                        "list_name": "kpop",
                        "calculation": "",
                        "requiredMessage": {
                            "english": "",
                            "bangla": ""
                        }
                    },
                    {
                        "name": "VisitingPoint",
                        "label": {
                            "english": "visiting point",
                            "bangla": "visiting point"
                        },
                        "id": "q3",
                        "hint": "",
                        "type": "Point",
                        "mandatory": "no",
                        "defaultResponse": "",
                        "appearance": "list-nolabel",
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
                        "path": "0,2",
                        "expanded": false,
                        "groupAppearance": false,
                        "list_name": "kopa",
                        "calculation": "",
                        "requiredMessage": {
                            "english": "",
                            "bangla": ""
                        }
                    },
                    {
                        "name": "age",
                        "label": {
                            "english": "age",
                            "bangla": "age"
                        },
                        "id": "q8",
                        "hint": "",
                        "type": "Number",
                        "mandatory": "no",
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
                        "list_name": "kpop",
                        "calculation": "",
                        "requiredMessage": {
                            "english": "",
                            "bangla": ""
                        }
                    },
                ],
                "path": "",
                "expanded": false,
                "groupAppearance": false,
                "list_name": "",
                "calculation": "",
                "requiredMessage": {
                    "english": "",
                    "bangla": ""
                }
            }
        ],
        "path": "0",
        "expanded": true,
        "groupAppearance": false,
        "list_name": "",
        "calculation": "",
        "requiredMessage": {
            "english": "",
            "bangla": ""
        }
    },

    {
        "name": "something_about",
        "label": {
            "english": "something",
            "bangla": "something"
        },
        "hint": "",
        "id": "q4",
        "type": "Note",
        "mandatory": "no",
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
        "path": "2",
        "expanded": false,
        "groupAppearance": false,
        "list_name": "mpower",
        "calculation": "",
        "requiredMessage": {
            "english": "",
            "bangla": ""
        }
    },

    {
        "name": "death date",
        "label": {
            "english": "death_date",
            "bangla": "death_date"
        },
        "id": "q5",
        "hint": "",
        "type": "DateTime",
        "mandatory": "no",
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
        "path": "3",
        "expanded": false,
        "groupAppearance": false,
        "list_name": "klop",
        "calculation": "",
        "requiredMessage": {
            "english": "",
            "bangla": ""
        }
    }
];
