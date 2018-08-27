import { connect } from 'react-redux';
import Component from './CoreLayout';

export default connect(({ loading }) => ({ loading }))(Component);