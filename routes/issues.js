import { Router } from 'express'
import * as issuesCtrl from '../controllers/issues.js'

const router = Router()

router.get('/', issuesCtrl.index)

export {
  router
}
