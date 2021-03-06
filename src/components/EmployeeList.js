import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import EmployeeListItem from './EmployeeListItem'; 
import { fetchEmployees } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.fetchEmployees();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
     
        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return (
            <EmployeeListItem employee={employee} />
        );
    }

    render() {
        console.log(`Rendering list with props ${this.props}`);

        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    console.log('EmployeeList map state to props state =', state);
    const employees = _.map(state.employee.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
