import { PlanConstants } from '../constants';
import { PlanService } from '../services/PlanService';

export const PlanActions = {
  setFormStatus,
  show,
  create,
  destroy,
  modifyTitle,
  modifyContent,
  modifyPriority,
  modifyStatus,
  modifyDate
};

function setFormStatus(flag){
  return flag ? {type: PlanConstants.PLAN_FORM_ON} : {type: PlanConstants.PLAN_FORM_OFF}
}

function show(){
  return dispatch => {
    PlanService.show()
      .then(
        (plans) => {
          dispatch(success(plans));
        }
      )
      .catch(
        (err) => {
          dispatch(failure(err.toString()));
        }
      )
  };
  function success(plans) {return {type: PlanConstants.RECEIVE_PLAN_SUCCESS, plans}};
  function failure(err) {return {type: PlanConstants.RECEIVE_PLAN_FAILURE, err}};
}

function create(title,content){
  return dispatch => {
    PlanService.create(title,content)
      .then(
        (plan) => {
          dispatch(success(plan));
        }
      )
      .catch(
        (err) => {
          dispatch(failure(err.toString()));
        }
      )
  };
  function success(plan) {return {type: PlanConstants.CREATE_PLAN_SUCCESS, plan}};
  function failure(err) {return {type: PlanConstants.CREATE_PLAN_FAILURE, err}};
}

function destroy(id){
  return dispatch => {
    PlanService.destroy(id)
      .then(
        () => {
          dispatch(success(id));
        }
      )
      .catch(
        (err) => {
          dispatch(failure(err.toString()));
        }
      )
  };
  function success(id) {return {type: PlanConstants.REMOVE_PLAN_SUCCESS, id}};
  function failure(err) {return {type: PlanConstants.REMOVE_PLAN_FAILURE, err}};
}

function modifyTitle(id,title){
  return dispatch => {
    PlanService.modifyTitle(id,title)
      .then(
        (plan) => {
          dispatch(success(plan));
        }
      )
      .catch(
        (err) => {
          dispatch()
        }
      )
  };
  function success(plan) {return {type: PlanConstants.CHANGE_TITLE_SUCCESS, plan}};
  function failure(err) {return {type: PlanConstants.CHANGE_TITLE_FAILURE, err}};
}

function modifyContent(id,content){
  return dispatch => {
    PlanService.modifyContent(id,content)
      .then(
        (plan) => {
          dispatch(success(plan));
        }
      )
      .catch(
        (err) => {
          dispatch()
        }
      )
  };
  function success(plan) {return {type: PlanConstants.CHANGE_CONTENT_SUCCESS, plan}};
  function failure(err) {return {type: PlanConstants.CHANGE_CONTENT_FAILURE, err}};
}

function modifyPriority(id,content){
  return dispatch => {
    PlanService.modifyPriority(id,content)
      .then(
        (plan) => {
          dispatch(success(plan));
        }
      )
      .catch(
        (err) => {
          dispatch()
        }
      )
  };
  function success(plan) {return {type: PlanConstants.CHANGE_CONTENT_SUCCESS, plan}};
  function failure(err) {return {type: PlanConstants.CHANGE_CONTENT_FAILURE, err}};
}

function modifyStatus(id,status){
  return dispatch => {
    PlanService.modifyStatus(id,status)
      .then(
        (plan) => {
          dispatch(success(plan));
        }
      )
      .catch(
        (err) => {
          dispatch()
        }
      )
  };
  function success(plan) {return {type: PlanConstants.CHANGE_STATUS_SUCCESS, plan}};
  function failure(err) {return {type: PlanConstants.CHANGE_STATUS_FAILURE, err}};
}

function modifyDate(id,date){
  return dispatch => {
    PlanService.modifyDate(id,date)
      .then(
        (plan) => {
          dispatch(success(plan));
        }
      )
      .catch(
        (err) => {
          dispatch()
        }
      )
  };
  function success(plan) {return {type: PlanConstants.CHANGE_DATE_SUCCESS, plan}};
  function failure(err) {return {type: PlanConstants.CHANGE_DATE_FAILURE, err}};
}
