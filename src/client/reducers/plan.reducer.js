import {PlanConstants} from '../constants';

const initialState = {
  isCreatePlanOn:false,
  plans:[]
};

const plan = (state = initialState, action) => {

  var updatedPlans;

  switch (action.type){
    case PlanConstants.PLAN_FORM_ON:
      return Object.assign({},state,{
        isCreatePlanOn:true
      });

    case PlanConstants.PLAN_FORM_OFF:
      return Object.assign({},state,{
        isCreatePlanOn:false
      });

    case PlanConstants.RECEIVE_PLAN_SUCCESS:
      return Object.assign({},state,{ plans:action.plans});

    case PlanConstants.RECEIVE_PLAN_FAILURE:
      return state;

    case PlanConstants.CREATE_PLAN_SUCCESS:
      return Object.assign({}, state, {
        plans:[...state.plans,action.plan]
      });

    case PlanConstants.CREATE_PLAN_FAILURE:
      return state;

    case PlanConstants.REMOVE_PLAN_SUCCESS:
      return Object.assign({},state,{
        plans: state.plans.filter(plan => {
          return plan.id != action.id;
        })
      });

    case PlanConstants.REMOVE_PLAN_FAILURE:
      return state;

    case PlanConstants.CHANGE_TITLE_SUCCESS:
      return Object.assign({},state,{
        plans: state.plans.map(plan => {
          if(plan.id === action.plan.id){
            return Object.assign({},plan,{title:action.plan.title});
          }
          return plan;
        })
      });

    case PlanConstants.CHANGE_TITLE_FAILURE:
      return state;

    case PlanConstants.CHANGE_CONTENT_SUCCESS:
      return Object.assign({},state,{
        plans: state.plans.map(plan => {
          if(plan.id === action.plan.id){
            return Object.assign({},plan,{content:action.plan.content});
          }
          return plan;
        })
      });

    case PlanConstants.CHANGE_CONTENT_FAILURE:
      return state;

    case PlanConstants.CHANGE_DATE_SUCCESS:
      return Object.assign({},state,{
        plans: state.plans.map(plan => {
          if(plan.id === action.plan.id){
            return Object.assign({},plan,{date:action.plan.date});
          }
          return plan;
        })
      });

    case PlanConstants.CHANGE_DATE_FAILURE:
      return state;

    case PlanConstants.CHANGE_PRIORITY_SUCCESS:
      return Object.assign({},state,{
        plans: state.plans.map(plan => {
          if(plan.id === action.plan.id){
            return Object.assign({},plan,{priority:action.plan.priority});
          }
          return plan;
        })
      });

    case PlanConstants.CHANGE_PRIORITY_FAILURE:
      return state;

    case PlanConstants.CHANGE_STATUS_SUCCESS:
      return Object.assign({},state,{
        plans: state.plans.map(plan => {
          if(plan.id === action.plan.id){
            return Object.assign({},plan,{status:action.plan.status});
          }
          return plan;
        })
      });

    case PlanConstants.CHANGE_STATUS_FAILURE:
      return state;

    default:
      return state;
  }
}

export default plan;
