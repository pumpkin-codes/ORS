/**
 * navigators/index.js
 *
 * @format
 * @flow strict-local
 */

"use strict";
import React from "react";

/* navigators */
import AuthedRoutes from "../routes/authedRoutes";
import UnauthedRoutes from "../routes/unauthedRoutes";
import AppLoadingRoute from "../routes/appLoadingRoute";
/* navigators */

/* store */
import { connect } from "react-redux";
const mapStateToProps = (state) => ({ auth: state.auth });
/* store */

const AppNavigator = (props) => {
  const {
    auth: { appLoading, token },
  } = props;
  const isLoggedIn = token ? true : false;

  return appLoading ? (
    <AppLoadingRoute {...props} />
  ) : isLoggedIn ? (
    <AuthedRoutes {...props} />
  ) : (
    <UnauthedRoutes />
  );
};

export default connect(mapStateToProps)(AppNavigator);
