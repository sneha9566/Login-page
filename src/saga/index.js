import { put, takeLatest, all } from 'redux-saga/effects';
import { IS_LOGIN, USER_NAME, USER_PASSWORD,LOADING,USER_SUCCESS,USER_ERROR, ALERT_SUCCESS,ALERT_ERROR,ALERT_CLOSE} from "../actions/action-type";
import { pageLoading, alertError, alertSuccess } from "../actions/alert-actions";
import { userNameChange ,userPasswordChange,userLogin,userClear,userLoginSubmit,userLogout } from "../actions/user-actions";
// import User from "../tools/user-service";
function* actionWatcher() {
     yield takeLatest([IS_LOGIN, LOADING,USER_NAME,USER_PASSWORD,USER_SUCCESS,USER_ERROR,ALERT_SUCCESS,ALERT_ERROR,ALERT_CLOSE],userNameChange ,userPasswordChange,userLogin,userClear,userLoginSubmit,userLogout,alertSuccess);

}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}