import { Router } from 'express'

import controller from '../../controllers/images'

const router = Router()

router.post('/info', controller.info.bind(controller))
router.post('/transform', controller.transform.bind(controller))

export default router