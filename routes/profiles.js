import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// localhost:3000/profile - GET
router.get('/', isLoggedIn, profilesCtrl.index)

// localhost:3000/profiles - GET
router.get('/:id', isLoggedIn, profilesCtrl.show)

// localhost:3000/profiles/:id/dreamIssues - POST (DreamIssue)
router.post('/:id/dreamIssues', isLoggedIn, profilesCtrl.createDreamIssue)

export {
  router
}