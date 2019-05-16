import {PlanConstants} from '../constants';

const initialState = [];

const plan = (state = initialState, action) => {

  switch (action.type){
    case PlanConstants.RECEIVE_PLAN_SUCCESS:
      return Object.assign({},{ action.plans;});

    case PlanConstants.RECEIVE_PLAN_FAILURE:
      return state;

    case PlanConstants.CREATE_PLAN_SUCCESS:
      return Object.assign({}, state, {
        action.plan;
      });

    case PlanConstants.CREATE_PLAN_FAILURE:
      return state;

    case PlanConstants.REMOVE_PLAN_SUCCESS:
      const updatedPlans = state.filter(plan => {
        return plan.id != action.id;
      });
      return updatedPlans;

    case PlanConstants.REMOVE_PLAN_FAILURE:
      return state;

    case PlanConstants.CHANGE_TITLE_SUCCESS:
    const updatedPlans = state.map(plan => {
      if(plan.id === action.plan.id){
        return { ...plan, ...action.plan.title };
      }
      return plan;
    });
    return updatedPlans;

    case PlanConstants.CHANGE_TITLE_FAILURE:
      return state;

    case PlanConstants.CHANGE_CONTENT_SUCCESS:
    const updatedPlans = state.map(plan => {
      if(plan.id === action.plan.id){
        return { ...plan, ...action.plan.content };
      }
      return plan;
    });
    return updatedPlans;

    case PlanConstants.CHANGE_CONTENT_FAILURE:
      return state;

    case PlanConstants.CHANGE_DATE_SUCCESS:
    const updatedPlans = state.map(plan => {
      if(plan.id === action.plan.id){
        return { ...plan, ...action.plan.date };
      }
      return plan;
    });
    return updatedPlans;

    case PlanConstants.CHANGE_DATE_FAILURE:
      return state;

    case PlanConstants.CHANGE_PRIORITY_SUCCESS:
      const updatedPlans = state.map(plan => {
        if(plan.id === action.plan.id){
          return { ...plan, ...action.plan.priority };
        }
        return plan;
      });
      return updatedPlans;

    case PlanConstants.CHANGE_PRIORITY_FAILURE:
      return state;

    case PlanConstants.CHANGE_STATUS_SUCCESS:
      const updatedPlans = state.map(plan => {
        if(plan.id === action.plan.id){
          return { ...plan, ...action.plan.status };
        }
        return plan;
      });
      return updatedPlans;

    case PlanConstants.CHANGE_STATUS_FAILURE:
      return state;
  }
}

export default plan;
