import { Radio, Typography } from "antd";
import React from 'react';
import { AlignType } from 'rc-table/lib/interface';
import ContactStyle from "./Style";
import { ColumnType } from "antd/lib/table";



export interface DataType extends ColumnType<DataType> {
    key: string;
    width?: number;
    dataIndex?: string;
    align?: AlignType;
    title?: string;
    subTitle?: string;
    onCell?: (record: any, rowIndex: any) => any;
    render?: (text: any, record: any, index: any) => JSX.Element;
}

export const RadioField = (text: any, record: any, index: any) => (
    <>
        <Radio defaultChecked={false} disabled />
    </>
);


export const HeaderTitle = ({ title, dataIndex, onHeaderChange }: any) => {

    const classes = ContactStyle();
    return (
        <>
            <div className={classes.columns}>
                <input type="text" className={classes.input} value={title} onChange={(e: any) => onHeaderChange(dataIndex, e.target.value)} />
            </div>
        </>
    );
}




// export const columnsDemo: DataType[] = [
//     {
//         width: 100,
//         title: '',
//         dataIndex: '1',
//         key: '1',
//         align: 'center',
//         render: RadioField
//     },
//     {
//         width: 100,
//         title: 'Option',
//         subTitle: 'automatic',
//         dataIndex: '2',
//         key: '2',
//         align: 'center',
//         render: RadioField
//     },
//     {
//         width: 100,
//         title: 'Option',
//         subTitle: 'automatic',
//         dataIndex: '3',
//         key: '3',
//         align: 'center',
//         render: RadioField
//     },
// ]


// export const dataSourceDemo = [
//     {
//         key: '1',
//         title: 'Option',
//         subTitle: 'automatic',
//     },
// ];