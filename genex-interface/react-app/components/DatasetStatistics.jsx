import React from 'react'
import { List, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'

let statisticsItem = (name, value) => (
	<List.Item>
		<List.Content floated='right'>{value}</List.Content>
		<List.Header>{name}</List.Header>
	</List.Item>
);

export default function DatasetStatistics(props) {
	let dataset = props.dataset;
	return (
		<div>
			<Header as='h4' icon='dashboard' dividing content='Dataset Statistics' />
			<List divided size='large'>
				{statisticsItem('Dataset name', dataset.name)}
				{statisticsItem('Distance', props.distance)}
				{statisticsItem('Similarity Threshold', props.st)}
				{statisticsItem('Count', dataset.count)}
				{statisticsItem('Length', dataset.length)}
				{statisticsItem('Subsequences', dataset.subseq)}
			</List>
		</div>
	)
}

DatasetStatistics.propTypes = {
	dataset: PropTypes.object,
	distance: PropTypes.string,
	st: PropTypes.number,
};
