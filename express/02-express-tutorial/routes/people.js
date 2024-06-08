const express= require('express')
const router= express.Router()
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePeople,
  deletePerson
} = require('../controller/people.js')
let {people}= require('../data')
/* // Route to get people data
router.get('/', getPeople);
  
  // Route to add a person
  router.post('/', createPerson);
  
  
  // Route for adding a person via Postman
  router.post('/postman',createPersonPostman );
  
  router.put('/:id',updatePeople)
  //delete 
  router.delete('/:id',deletePerson) */
  router.route('/').get(getPeople).post(createPerson);
  router.route('/postman').post(createPersonPostman)
  router.route('/:id').put(updatePeople).delete(deletePerson);
  module.exports=router
