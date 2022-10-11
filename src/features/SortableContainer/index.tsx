import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';
import styled from 'styled-components';
import QuestionItem from '../FormDesigner/Questions/QuestionItem';
import { sortableOptions } from './constant';
import { rearrange } from '../../redux/QuestionSlice';
import _ from 'lodash';
import GroupComponent from '../FormDesigner/GroupQuestion';
import InitialQuestion from '../FormDesigner/Questions/InitialQuestion';
import Header from './Header';

const StyledBlockWrapper = styled.div`
  border: 1px solid #e8e8e8;
  margin-bottom: 10px;
  cursor: move;
`;

const SortableContainer: FC = (props) => {

	const dispatch = useDispatch();
	let questions = useSelector((state: any) => state.question.questions);
	questions = _.cloneDeep(questions);

	const setQuestions = (list: any) => dispatch(rearrange(list));

	return (
		<div style={{ padding: '6%' }}>
			<Header />
			<br />
			{questions.length > 0 ? null : <InitialQuestion />}
			<ReactSortable list={questions} setList={setQuestions} {...sortableOptions}>
				{questions.map((block: any, blockIndex: any) => (
					<BlockWrapper key={block.id} block={block} blockIndex={[blockIndex]} setBlocks={setQuestions} />
				))}
			</ReactSortable>
		</div>
	);
};

function Container({ block, blockIndex, setBlocks }: any) {
	const questions = useSelector((state: any) => state.question.questions);

	const setList = (currentList: any) => {
		console.log('container questions: ', questions);
		const tempList = _.cloneDeep(questions);
		if (tempList && tempList.length > 0) {
			const _blockIndex = [...blockIndex];
			const lastIndex = _blockIndex.pop();
			const lastArr = _blockIndex.reduce((arr, i) => {
				console.log({ i });
				return arr[i]['questions'];
			}, tempList);
			lastArr[lastIndex]['questions'] = currentList;
			setBlocks(tempList);
		}
	}
	return (
		<ReactSortable
			key={block.id}
			list={block.questions}
			setList={setList}
			{...sortableOptions}
		>
			{block.questions &&
				block.questions.map((childBlock: any, index: any) => {
					return (
						<BlockWrapper
							key={childBlock.id}
							block={childBlock}
							blockIndex={[...blockIndex, index]}
							setBlocks={setBlocks}
						/>
					);
				})}
		</ReactSortable>
	);
}

function BlockWrapper({ block, blockIndex, setBlocks }: any) {
	if (!block) return null;
	if (block.type === 'Group Question' && block.questions.length > -1) {
		return (
			<GroupComponent value={{ ...block, path: blockIndex.join(',') }}>
				<Container block={block} setBlocks={setBlocks} blockIndex={blockIndex} />
			</GroupComponent>
		);
	} else {
		return (
			<StyledBlockWrapper>
				<QuestionItem value={{ ...block, path: blockIndex.join(',') }} />
			</StyledBlockWrapper>
		);
	}
}
export default SortableContainer;
