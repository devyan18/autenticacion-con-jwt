import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import { environments } from './src/config/environments.js'
import { startDb } from './src/config/database.js'
import { userRouter } from './src/routes/users.routes.js'
import { authRouter } from './src/routes/auth.routes.js'

import './src/models/User.js'

const app = express()

app.use(express.json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST']
}))
app.use(morgan('dev'))
app.use(helmet())

app.use('/api/users', userRouter)

app.use('/auth', authRouter)

app.listen(environments.PORT, async () => {
  console.log(`server on port ${environments.PORT}`)
  startDb()
})
