import { Router } from 'express'
import * as issuesCtrl from '../controllers/issues.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/issues - GET
router.get('/', issuesCtrl.index)

// localhost:3000/issues/:id - GET
router.get('/:id', issuesCtrl.show)

// localhost:3000/issues/:id/edit
router.get('/:id/edit', isLoggedIn, issuesCtrl.edit)

// localhost:3000/issues - POST
router.post('/', isLoggedIn, issuesCtrl.create)

// localhost:3000/issues/:id/flip-print
router.patch('/:id/flip-print', isLoggedIn, issuesCtrl.flipPrint)


export {
  router
}
