// הרצת החיבור לדאטה בייס
require('../db');

// ייבוא המודל של הגופים
const institutionModel = require('../models/institution');

// יישות גוף -  זמני
const tempInstitution = {
  idNumber: String(Math.random() * 999), //למניעת בעיה של שימוש חוזר באותו ערך יוניקי
  phone: String(Math.random() * 999), //למניעת בעיה של שימוש חוזר באותו ערך יוניקי
  firstName: 'meir',
  lastName: 'cohen',
  address: {
    city: 'Tlv',
    street: 'ravin 3',
    apartment: '12',
    zipCode: '499859',
  },
  email: `${String(Math.random() * 999)}@gmail.com`, //למניעת בעיה של שימוש חוזר באותו ערך יוניקי
  education: [
    {
      name: 'some college',
      years: 3,
      eduType: 'college',
    },
  ],
  maritalStatus: 'Single',
  birthDate: Date.now(),
  sectoralAffiliation: 'something',
  gender: 'male',
  permissions: 'viewer',
  password: '1234',
};

const createOne = async (newInstitution) => {
  const result = await institutionModel.create(newInstitution);
  console.log('new one', result); 
  return result;
};

const readAll = async () => {
  const result = await institutionModel.find(); //בקשה מהדאטה בייס לשלוח את כל התוצאות של המשתמשים
  console.log('the users in the db', result); //  הדפסה לקונסול- לצורך בדיקה בלבד
  return result;
};


const read = async (filter) => {
  const result = await institutionModel.find(filter); //בקשה מהדאטה בייס לשלוח את כל התוצאות של המשתמשים
  console.log('Result: ', result); //  הדפסה לקונסול- לצורך בדיקה בלבד
  return result;
};

const update = async (nUser) => {
  const result = await institutionModel.findByIdAndUpdate(nUser._id,nUser); 
  console.log('result: ', result); 
  return result;
};

const readAll = async (userId) => {
  const result = await institutionModel.findByIdAndDelete(userId);
  console.log('result:', result);
  return result;
};

readAll();
// createOne(tempUser)
