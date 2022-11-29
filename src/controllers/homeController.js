import db from '../models/index';
import CRUDService from '../services/CRUDService';

const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();

    return res.render('homePage.ejs', {data: JSON.stringify(data)});
  } catch (error) {
    console.log(error);
  }
}

const getCRUD = (req, res) => {
  return res.render('crud.ejs');
}

const postCRUD = async (req, res) => {
  await CRUDService.createNewUser(req.body);

  return res.redirect('/crud');
}

module.exports = {
  getHomePage,
  getCRUD,
  postCRUD
}