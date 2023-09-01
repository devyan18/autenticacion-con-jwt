import { createUser, getAllUsers } from '../models/User.js'

export const ctrlGetAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers()

    if (!users) {
      return res.sendStatus(404)
    }

    res.status(200).json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json('Unexpected error')
  }
}

export const ctrlCreateUser = async (req, res) => {
  try {
    const user = await createUser(req.body)
    res.status(201).json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json('Unexpected error')
  }
}
