import { createUser, showUsers, updateUser, getUserById } from "../repositories/user.repository";

export const create = async (req, res) => {
  try {
    const user = await createUser(req.body)
    res.status(200).json({data: user})
  } catch (e) {
    res.status(400).send(e)
  }
}

export const showAllUsers = async (req, res) => {
  try {
    const getUsers = await showUsers()
    res.status(200).json([getUsers])
  } catch (error) {
    res.status(400).json({
      error: true,
      msg: error
    })
  }
}

export const update = async (req, res) => {
  try {
    const userUpdate = await updateUser(Number(req.params.id),req.body)
    res.status(200).json({data: userUpdate, msg: "usuario alterado!"})
  } catch (error) {
    res.status(400).send(error)
  }
}

export const getUserById = async (req, res) => {
  try {
    const getUser = await getUserById(Number(req.params.id))
    console.log(getUser);
    res.status(200).json(getUser)
  } catch (error) {
    res.status(400).json(error)
  }
}