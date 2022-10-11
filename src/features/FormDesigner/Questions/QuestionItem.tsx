import React, { SyntheticEvent, useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Style, { getImageByType } from './Style';
import { Box, Tooltip, Typography } from '@material-ui/core';
import QuestionAddTool from '../../../components/Poper';
import { useDispatch, useSelector } from 'react-redux';
import { addToMultiSelection, selectQuestion, deleteQuestion, closeSettingsTab } from '../../../redux/QuestionSlice';
import QuestionConfig from '../Settings';
import { activeStyle, inActiveStyle } from './Constants';
import { DeleteOutlined, FormOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';


export default function QuestionItem(props: any) {
	const classes = Style();
	const [anchorVisibility, setAnchorVisibility] = useState<boolean>(false);
	const [anchor, setAnchor] = useState<any>(null);
	const [iconHover, setIconHover] = useState({ bg: 'white', text: '' });
	const dispatch = useDispatch();
	const toggleAnchor = () => setAnchorVisibility(false);
	const selectedQuestion = useSelector((state: any) => state.question.selectedQuestion);
	const multiselection = useSelector((state: any) => state.question.multiselection);

	const openAnchor = (event: SyntheticEvent) => {
		setAnchor(event.currentTarget);
		setAnchorVisibility(true);
	};

	const setSelectedQuestion = (e: any) => {
		if (e.ctrlKey) {
			dispatch(addToMultiSelection(props.value.path));
		} else {
			dispatch(selectQuestion(props.value));
		}
	};

	const isActive = () => {
		if (multiselection.onGoing) {
			return multiselection.pathList.includes(props.value.path);
		}
		return selectedQuestion.id === props.value.id;
	};

	const onDelete = (e: SyntheticEvent) => {
		e.stopPropagation();
		const yes = confirm(`Are you sure you want to delete ? \n ${props.value.name}`);
		if (yes) {
			dispatch(deleteQuestion(props.value));
			dispatch(closeSettingsTab({}));
		}
	};

	return (
		<Box className={classes.cardStyle}>
			<Box sx={{ position: 'relative' }}>
				<Box className={classes.addBoxIconPosition} id="popover-anchor" onClick={openAnchor}>
					<PlusOutlined className={classes.addBoxIcon} />
				</Box>
				<CardContent
					className={classes.questionBox}
					onClick={setSelectedQuestion}
					style={isActive() ? activeStyle(iconHover) : inActiveStyle(iconHover)}
				>
					<div className={classes.nameSection}>
						{props.children}
						{props.value.type === '' ? (
							<p>
								This form is currently empty. You can add questions, notes, prompts, or other fields by clicking on the
								+ sign below.
							</p>
						) : (
							<Box className={classes.iconBorderRight}>
								<img src={getImageByType(props.value.type)} height="35" width="40" />
							</Box>
						)}
						<div className={classes.question}>
							<p className={classes.questionName}>{props.value.label.english}</p>
							<p className={classes.questionHint}> {props.value.name}</p>
						</div>
					</div>
					<Typography variant="h5" style={{ color: 'gray', fontWeight: 700 }}>
						{iconHover.text}
					</Typography>
					<div className={classes.iconSection}>
						{props.value.type !== '' && (
							<>
								{/* <Tooltip title="Copy Question" placement="right" arrow>
										<FileCopyOutlinedIcon className={classes.copyIcon} />
									</Tooltip> 
								*/}
								<Tooltip title="Settings" placement="right" arrow>
									<span
										onMouseEnter={() => setIconHover({ bg: '#BDBDBD99', text: 'Settings' })}
										onMouseLeave={() => setIconHover({ bg: 'white', text: '' })}
									>
										<SettingOutlined className={classes.settingsIcon} />
									</span>
								</Tooltip>

								<Tooltip title="Delete" placement="right" arrow>
									<span
										onMouseEnter={() => setIconHover({ bg: '#EF535099', text: 'Delete Question' })}
										onMouseLeave={() => setIconHover({ bg: 'white', text: '' })}
									>
										<DeleteOutlined className={classes.deleteIcon} onClick={onDelete} />
									</span>
								</Tooltip>

								<Tooltip title="Edit" placement="right" arrow>
									<span
										onMouseEnter={() => setIconHover({ bg: '#4CAF5099', text: 'Edit Question' })}
										onMouseLeave={() => setIconHover({ bg: 'white', text: '' })}
									>
										<FormOutlined className={classes.editIcon} />
									</span>
								</Tooltip>
							</>
						)}
					</div>
				</CardContent>
			</Box>

			<QuestionAddTool
				open={anchorVisibility}
				anchorEL={anchor}
				toggleAnchor={toggleAnchor}
				currentQustion={props.value}
			/>
			{isActive() ? <QuestionConfig /> : null}
		</Box>
	);
}
