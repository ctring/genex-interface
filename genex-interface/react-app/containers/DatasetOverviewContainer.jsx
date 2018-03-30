
import React from 'react';
import PropTypes from 'prop-types'
import { List, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import DatasetStatistics from '../components/DatasetStatistics.jsx'
import GroupDensity from '../components/GroupDensity.jsx'


class DatasetOverviewContainer extends React.Component {
	render() {
		return (
			<Grid.Row columns={2}>
				<Grid.Column width={4}>
					<DatasetStatistics 
						dataset={this.props.dataset}
						distance={this.props.distance}
						st={this.props.st}
						count={this.props.dataset.count}
						groups={this.props.groups}
						length={this.props.dataset.length}
						subseq={this.props.dataset.subseq}/>
				</Grid.Column>
				<Grid.Column width={12}>
					<GroupDensity />
				</Grid.Column>
			</Grid.Row>
		)
	}
}

DatasetOverviewContainer.propTypes = {
	dataset: PropTypes.object.isRequired,
	distance: PropTypes.string.isRequired,
	st: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
	dataset: state.params.dataset,
	distance: state.params.distance,
	st: state.params.st,
	groups: state.params.groups
});

export default connect(mapStateToProps)(DatasetOverviewContainer);
