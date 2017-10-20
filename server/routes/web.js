const express = require('express')

const router = express.Router()

const pagesController = require('../controllers/pagesController')
const projectsController = require('../controllers/projectsController')
const blogController = require('../controllers/blogController')


/* =============================================================================
  pages
==============================================================================*/

router.get('/', pagesController.homePage)

router.get('/about', pagesController.about)

router.get('/contact', pagesController.contact)

/* =============================================================================
  Projects
==============================================================================*/

router.get('/projects', projectsController.index)

router.get('/projects/create', projectsController.create)

router.post('/projects', projectsController.store)

router.get('/projects/:id', projectsController.show)

router.get('/projects/:id/edit', projectsController.edit)

router.put('/projects/:id', projectsController.update)

router.delete('/projects/:id', projectsController.destroy)


/* =============================================================================
  Blog
==============================================================================*/

router.get('/blog', blogController.index)

module.exports = router
