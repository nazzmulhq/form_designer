import { CloseOutlined, EyeOutlined } from '@ant-design/icons';
import { Box, IconButton } from '@material-ui/core';
import Icons from '../../Icons';
import subHeaderStyle from './Style';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGroup } from '../../redux/QuestionSlice';
import { setForm } from '../../redux/FormSlice';
import { SaveOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';

import LayoutSettings from './LayoutSettings';

export default function Header() {
	const [open, setOpen] = useState(false);
	const classes = subHeaderStyle();
	const dispatch = useDispatch();
	const multiselection = useSelector((state: any) => state.question.multiselection);
	const form = useSelector((state: any) => state.form);
	const _createGroup = () => {
		dispatch(createGroup(''));
	}

	const onChange = (key: any, value: any) => {
		dispatch(setForm({ [key]: value }));
	}

	return (
		<>
			<Box className={classes.formHeader}>
				<Box>

					<Box className={classes.formName}>
						<input className={classes.formTextEditable} placeholder="Form Name" type='text' value={form.formName} onChange={(e: any) => onChange('formName', e.target.value)} />
					</Box>
					<Box className={classes.formTitle}>
						<input className={classes.formTextEditable} placeholder="Form Title" type='text' value={form.formTitle} onChange={(e: any) => onChange('formTitle', e.target.value)} />

					</Box>
				</Box>
				<Box className={classes.formAction}>
					<Button icon={<SaveOutlined />} type="primary">
						Save
					</Button>
					<IconButton>
						<CloseOutlined />
					</IconButton>
				</Box>
			</Box>
			<Box className={classes.action}>
				<Box>
					<IconButton>
						<EyeOutlined />
					</IconButton>
					<IconButton>
						<Icons.FormatLineSpacing width={22} height={22} />
					</IconButton>
					<IconButton
						onClick={_createGroup}
						disabled={!multiselection.onGoing}
						style={{ backgroundColor: !multiselection.onGoing ? 'transparent' : 'lightblue' }}>
						<Icons.Copy width={22} height={22} />
					</IconButton>
					<IconButton>
						<Icons.SchemaFill width={22} height={22} />
					</IconButton>
				</Box>
				<Box className={classes.layoutSettings}>
					<Icons.Line />
					<IconButton onClick={() => setOpen(true)}>
						<Icons.TuneFill width={22} height={22} />
					</IconButton>
					<Box className={classes.formTitle}>Layout & settings</Box>
				</Box>
			</Box>
			<Modal
				title="Layout & Settings"
				centered
				open={open}
				onOk={() => setOpen(false)}
				onCancel={() => setOpen(false)}
				width={1000}
				footer={null}
			>
				<LayoutSettings close={()=> setOpen(false)}/>
			</Modal>

		</>
	);
}

