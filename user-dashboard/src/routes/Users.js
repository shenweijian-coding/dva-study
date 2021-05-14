import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersUI from '../components/Users/Users'
import MainLayout from '../components/MainLayout/MainLayout';
function Users({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <UsersUI></UsersUI>
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Users);
