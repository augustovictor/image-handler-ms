import express from 'express'
import bodyParser from 'body-parser'

import routesV1 from './routes/v1'

const app = express()

app.use(bodyParser.json())

app.use('/api/v1', routesV1)

export default app