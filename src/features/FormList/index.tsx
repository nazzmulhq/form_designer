import React, { useEffect, useState } from 'react'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Link } from "react-router-dom";

import { useTable } from 'react-table';
import { projectTableColumns } from './Columns'
import { Button, Card, Grid } from '@material-ui/core'
import FormDialog from './FormDialog';
import axios from 'axios'
import { ADD_FORM, LIST_FORM, PUBLISH_FORM } from '../../configs/ServerUrl'
import { TablePagination } from '@material-ui/core/';
import Toast from '../../components/ToastMsg';
import { CopyOutlined, PlusOutlined } from '@ant-design/icons'

function FormTable({ columns, data, projectDialog }: any) {

    const { getTableProps, headerGroups, rows, prepareRow }: any = useTable<any>({
        columns,
        data,
    });

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '.5%' }}>
                <div style={{ paddingLeft: '1%' }}><h2>Forms</h2></div>
                <Button
                    style={{ margin: '2%' }}
                    variant="outlined"
                    color="primary"
                    onClick={(e) => projectDialog(true)}
                    startIcon={<PlusOutlined />} >
                    Add Form
                </Button>
            </div>
            <MaUTable {...getTableProps()}>
                <TableHead>
                    {headerGroups.map((headerGroup: any, i: any) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()} key={i}>
                            {headerGroup.headers.map((column: any, i: any) => (
                                <TableCell {...column.getHeaderProps()} key={i}>
                                    {column.render('Header')}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {rows.map((row: any, index: any) => {
                        prepareRow(row)
                        return (
                            <TableRow {...row.getRowProps()} key={index}>
                                {row.cells.map((cell: any, i: any) => {
                                    return (
                                        <TableCell {...cell.getCellProps()} key={i}>
                                            {cell.render('Cell')}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </MaUTable>
        </>
    )
}

function FormList(props: any) {

    const [forms, setForms] = useState<any[]>([]);
    const [projectDialog, setProjectDialog] = useState<boolean>(false);
    const [msg, setMsg] = useState<any>({});
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalRecords, setTotalRecords] = useState<number>(0);
    const createProject = async (values: any) => {
        console.log('------------ create form ------------');
        const url = ADD_FORM.replace('__username__', new URLSearchParams(props.location.search).get('username') || '');
        const response = await axios.post(url, values);
        if (response.data.status == 200) {
            setProjectDialog(false);
            init();
        }
    }

    const handleChangePage = (event: any, newPage: number) => {
        console.log(newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const showMsg = (severity: string, txt: string) => {
        setMsg({ severity, show: true, txt, });
        setTimeout(() => {
            setMsg({ ...msg, show: false, txt: '' });
        }, 3000);
    }

    const init = async () => {
        const url = LIST_FORM.replace('__username__', new URLSearchParams(props.location.search).get('username') || '');
        const response = await axios.post(url, { page_number: page + 1, page_length: rowsPerPage });
        console.log(response);
        if (response.data.status === 200) {
            setForms(response.data.forms);
            setRowsPerPage(response.data.page_length);
            setPage(response.data.page_number - 1);
            setTotalRecords(response.data.tnt_cnt);
        }
    }

    const publish = async (form_id: any) => {
        const url = PUBLISH_FORM.replace('__username__', new URLSearchParams(props.location.search).get('username') || '');
        try {
            const response = await axios.post(url, { form_id });
            console.log(response);
            if (response.data.status === 200) {
                console.log('forms: ', forms);
                const newForms = forms.map((f, i) => {
                    if (form_id == f.id) return { ...f, status: 1 };
                    else return f;
                });
                setForms(newForms);
                showMsg('success', response.data.msg);
            }
        } catch (ex: any) {
            showMsg('error', 'Server error');
        }
    }


    const publishColoumn = (): any => {

        const username = new URLSearchParams(props.location.search).get('username') || '';
        return [{
            Header: 'ID',
            accessor: 'form_id_string',
        },
        {
            Header: 'Create Date',
            accessor: 'created_at',
            Cell: ({ cell: { value } }: any) => String(value).substring(0, 10)
        },
        {
            Header: 'Form',
            accessor: 'form_title',
            // eslint-disable-next-line react/display-name
            Cell: (data: any) => <Link to={{
                pathname: "/form-designer",
                state: { form: data.row.original, username }

            }}> {data.row.values.form_title} </Link>
        }, {
            Header: 'Publish Status',
            accessor: 'publish_status',
            // eslint-disable-next-line react/display-name
            Cell: (data: any) => (
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => publish(data.row.original.form_id)}
                    startIcon={<CopyOutlined />}
                >
                    Publish
                </Button>
            )
        }]
    }

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        init();
    }, [page, rowsPerPage]);

    return (

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card>
                    <FormTable columns={[...projectTableColumns, ...publishColoumn()]} data={forms} projectDialog={() => setProjectDialog(true)} />
                    <TablePagination
                        // component="div"
                        count={totalRecords}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onChangeRowsPerPage={handleChangeRowsPerPage} />
                </Card>
            </Grid>
            <FormDialog open={projectDialog} create={createProject} handleClose={() => setProjectDialog(false)} />
            <Toast show={msg.show} msg={msg.txt} severity={msg.severity} />
        </Grid>
    )
}

export default FormList;

