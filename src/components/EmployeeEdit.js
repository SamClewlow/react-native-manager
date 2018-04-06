import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
//import { employeeCreate } from '../actions';

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button title="Save Changes" />
        </CardSection>
      </Card>
    );
  }
}

export default connect()(EmployeeEdit);
