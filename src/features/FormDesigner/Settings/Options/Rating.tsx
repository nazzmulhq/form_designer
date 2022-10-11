import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Box } from '@material-ui/core';
import { Table } from 'antd';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { HeaderTitle, RadioField } from '../../constants';
import ContactStyle from '../../Style';
import { AlignType } from 'rc-table/lib/interface';
import { v4 as uuid4 } from 'uuid'

export default function Rating({ question, onSettingsChange }: any) {

    const classes = ContactStyle();

    // header
    const onHeaderTitleChange = (dataIndex: any, value: any) => {
        console.log(value);
        const cloneColumns = _.cloneDeep(question.ratings.columns);
        cloneColumns.map((item: any) => {
            if (item.id === dataIndex) {
                item.title = value;
            }
        });

        onSettingsChange({ ...question, ratings: { ...question.ratings, columns: cloneColumns } });
    }

    const onHeaderSubTitleChange = (dataIndex: any, value: any) => {
        console.log(dataIndex, value);
        const cloneColumns = _.cloneDeep(question.ratings.columns);
        cloneColumns.map((item: any) => {
            if (item.id === dataIndex) {
                item.subTitle = value;
            }
        });
        onSettingsChange({ ...question, ratings: { ...question.ratings, columns: cloneColumns } });
    }

    const onClickAddColumn = () => {
        const copyColumns = _.cloneDeep(question.ratings.columns);

        const newColumn = {
            width: 100,
            title: 'Option',
            subTitle: 'automatic',
            dataIndex: `${uuid4()}`,
            id: '',
            align: 'center' as AlignType,
            render: RadioField
        };
        newColumn.id = newColumn.dataIndex;
        copyColumns.push(newColumn);
        onSettingsChange({ ...question, ratings: { ...question.ratings, columns: copyColumns } });

    }

    const onClickDeleteColumn = (item: any) => {
        if (question.ratings.columns.length > 3) {
            const copyColumns = _.cloneDeep(question.ratings.columns);
            const index = copyColumns.findIndex((column: any) => column.id === item.key);
            copyColumns.splice(index, 1);
            console.log(copyColumns);
            onSettingsChange({ ...question, ratings: { ...question.ratings, columns: copyColumns } });
        }

    }

    // rows

    const onRowTitleChange = (dataIndex: any, value: any) => {
        console.log(dataIndex, value);
        const cloneRow = _.cloneDeep(question.ratings.rows);
        cloneRow.map((item: any) => {
            if (item.id === dataIndex) {
                item.title = value;
            }
        });

        onSettingsChange({ ...question, ratings: { ...question.ratings, rows: cloneRow } });
    }

    const onRowSubTitleChange = (dataIndex: any, value: any) => {
        console.log(dataIndex, value);
        const cloneRow = _.cloneDeep(question.ratings.rows);
        cloneRow.map((item: any) => {
            if (item.id === dataIndex) {
                item.subTitle = value;
            }
        });
        onSettingsChange({ ...question, ratings: { ...question.ratings, rows: cloneRow } });
    }

    const onClickAddRow = () => {
        const copyRows = _.cloneDeep(question.ratings.rows);
        const newColumn = {
            id: `${uuid4()}`,
            title: 'Option',
            subTitle: 'automatic',
        };
        copyRows.push(newColumn);
        onSettingsChange({ ...question, ratings: { ...question.ratings, rows: copyRows } });

    }

    const onClickDeleteRow = (item: any) => {
        console.log(item);
        if (question.ratings.rows.length > 1) {
            const copyRows = _.cloneDeep(question.ratings.rows);
            const index = copyRows.findIndex((row: any) => row.id === item.id);
            copyRows.splice(index, 1);
            onSettingsChange({ ...question, ratings: { ...question.ratings, rows: copyRows } });
        }

    }

    const TitleField = (text: any, record: any, index: any) => (
        <>
            <div>
                <HeaderTitle dataIndex={record?.key} title={record?.title} onHeaderChange={onRowTitleChange} />
                <HeaderTitle dataIndex={record?.key} title={record?.subTitle} onHeaderChange={onRowSubTitleChange} />
            </div>

            <Box className={classes.deleteIconPosition} id="popover-anchor1" onClick={() => onClickDeleteRow(record)}>
                <DeleteOutlined className={classes.deleteIcon} />
            </Box>

        </>
    );

    const formattingColumns = (columns: any[]) => {
        const cloneColumns = _.cloneDeep(columns);
        cloneColumns.map((item) => {
            if (item.id !== question.ratings.columns[0].id) {
                item.width = 100;
                item.align = 'center' as AlignType;
                item.dataIndex = item.id;
                item.key = item.id;
                item.render = RadioField;
                item.title = (
                    <div>
                        <div style={{ width: '80%' }}>
                            <HeaderTitle dataIndex={item?.dataIndex} title={item?.title} onHeaderChange={onHeaderTitleChange} />
                            <HeaderTitle dataIndex={item?.dataIndex} title={item?.subTitle} onHeaderChange={onHeaderSubTitleChange} />
                        </div>

                        <Box className={classes.deleteIconPosition} id="popover-anchor" onClick={() => onClickDeleteColumn(item)}>
                            <DeleteOutlined className={classes.deleteIcon} />
                        </Box>
                    </div>);
            } else {
                item.render = TitleField;
                item.width = 100;
                item.align = 'center' as AlignType;
                item.dataIndex = item.id;
                item.key = item.id;
            }
        });
        return cloneColumns;
    }

    const formattingDataSource = (dataSource: any[]) => {
        const cloneDataSource = _.cloneDeep(dataSource);
        cloneDataSource.map((item) => {
            item.key = item.id;
        });
        return cloneDataSource;
    }


    return (
        <div>
            <div style={{ width: '100%', padding: 20 }}>
                <div style={{ paddingRight: 25, position: 'relative', }}>
                    <Table pagination={false} dataSource={formattingDataSource(question.ratings?.rows)} columns={formattingColumns(question.ratings?.columns)} className={classes.table} />
                    <Box className={classes.addIconPosition} id="popover-anchor" onClick={onClickAddColumn}>
                        <PlusOutlined />
                    </Box>
                    <Box className={classes.addRowIconPosition} id="popover-anchor" onClick={onClickAddRow}>
                        <PlusOutlined /> Add Row
                    </Box>
                </div>

            </div>

        </div>

    )
}







