const axios = require('axios');
const config = require('../settings/config');

const base_url_reminder = `${config.BASE_URL}/api/reminder`;
const base_url_checklist = `${config.BASE_URL}/api/checklist`;

const postReminder = async (reminder) => {
  try {
    const res = await axios({
      method: 'POST',
      url: base_url_reminder,
      data: reminder

    });
  } catch(error) {
    console.log(error);
  }
};

const getReminders = async (userId) => {
  const res = await axios({
    method: 'GET',
    url: base_url_reminder
  });
  return res.data.filter(el => el.userId.includes(userId));
};

const getUpcomingReminders = async () => {
  const res = await axios({
    method: 'GET',
    url: base_url_reminder
  });
  const date = new Date();
  const dd = date.getDate();
  const mm = date.getMonth()+1;
  const yy = date.getFullYear();

  const f = (a) => a > 9 ? a : '0' + a;
  return res.data.filter(el => el.date.includes(`${f(dd)}/${f(mm)}/${yy}`));
};

const postChecklist = async (checklist) => {
  try {
    const res = await axios({
      method: 'POST',
      url: base_url_checklist,
      data: checklist

    });
  } catch(error) {
    console.log(error);
  }
};

const getChecklist = async (name) => {
  const res = await axios({
    method: 'GET',
    url: base_url_checklist
  });
  return res.data.filter(e => e.listName === name);
};

const putChecklist = async (id, checklistElement) => {
  const res = await axios({
    method: 'PUT',
    url: `${base_url_checklist}/${id}`,
    data: checklistElement
  });
  return res;
};

const deleteChecklist = async (id) => {
  try{
    await axios({
      method: 'DELETE',
      url: `${base_url_checklist}/${id}`,
    });
  }catch(e){
    console.log(e);
  }
};


module.exports = {
  postReminder,
  getReminders,
  getUpcomingReminders,
  postChecklist,
  getChecklist,
  putChecklist,
  deleteChecklist
};