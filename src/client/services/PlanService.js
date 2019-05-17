import axois from 'axios';

export const PlanService = {
  show,
  create,
  destroy,
  modifyTitle,
  modifyContent,
  modifyPriority,
  modifyStatus,
  modifyDate
};

function show(){
  return axios.get('/api/plans')
    .then(res => {
      const plans = res.data.plans;
      return plans;
    })
    .catch(err => {
      return err;
    });
};

function create(title,content){
  return axios.post('/api/plans',{
    title: title,
    content: content
  })
  .then(res => {
    const plan = {
      id: res.data.id,
      title: res.data.title,
      content: res.data.content
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
};

function destroy(id){
  return axios.destory('/api/plans',{
    params: {
      id: id
    }
  })
  .then(res => {
    return;
  })
  .catch(err => {
    return err;
  });
};

function modifyTitle(id,title){
  return axios.patch('/api/plans/title',{
    params: {
      id: id,
      title: title
    }
  })
  .then(res => {
    const plan = {
      id: res.data.id,
      title: res.data.title
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
};

function modifyContent(id,content){
  return axios.patch('/api/plans/content',{
    params: {
      id: id,
      content: content
    }
  })
  .then(res => {
    const plan = {
      id: res.data.id,
      content: res.data.content
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
}

function modifyPriority(id,priority){
  return axios.patch('/api/plans/priority',{
    params: {
      id: id,
      priority: priority
    }
  })
  .then(res => {
    const plan = {
      id: res.data.id,
      priority: res.data.priority
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
}

function modifyStatus(id,status){
  return axios.patch('/api/plans/status',{
    params: {
      id: id,
      status: status
    }
  })
  .then(res => {
    const plan = {
      id: res.data.id,
      status: res.data.status
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
}

function modifyDate(id,date){
  return axios.patch('/api/plans/content',{
    params: {
      id: id,
      date: date
    }
  })
  .then(res => {
    const plan = {
      id: res.data.id,
      date: res.data.date
    }
    return plan;
  })
  .catch(err => {
    return err;
  });
}
