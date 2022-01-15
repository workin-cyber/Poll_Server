// הרצת החיבור לדאטה בייס
require('../db');

// ייבוא המודל של המשתמשים
const pollModel = require('../models/poll');

// משתמש זמני
const tempUser = {
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

// פונקציית יצירת משתמש יחיד
const createOne = async (newUser) => {
  const result = await pollModel.create(newUser); // יצירה
  console.log('new one', result); //  הדפסה לקונסול- לצורך בדיקה בלבד
  return result;
};

// קריאת כל המשתמשים
const readAll = async () => {
  const result = await pollModel.find(); //בקשה מהדאטה בייס לשלוח את כל התוצאות של המשתמשים
  console.log('the users in the db', result); //  הדפסה לקונסול- לצורך בדיקה בלבד
  return result;
};

// קריאת משתמשים עפ"י פילטור
const read = async (filter) => {
  const result = await pollModel.find(filter); //בקשה מהדאטה בייס לשלוח את כל התוצאות של המשתמשים
  console.log('Result: ', result); //  הדפסה לקונסול- לצורך בדיקה בלבד
  return result;
};

// עדכון משתמש מסוים
const update = async (nUser) => {
  const result = await pollModel.findByIdAndUpdate(nUser._id,nUser); 
  console.log('result: ', result); 
  return result;
};

// מחיקת משתמש
const readAll = async (userId) => {
  const result = await pollModel.findByIdAndDelete(userId);
  console.log('result:', result);
  return result;
};

readAll();
// createOne(tempUser)
