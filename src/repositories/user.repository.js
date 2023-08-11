import { prisma } from "../services/prisma";

export const createUser = async(data) => {
  const user = await prisma.user.create({
    data,
  });

  return user
}

export const showUsers = async() => {
  const allUsers = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      Post: true,
    }
  });

  return allUsers
}

export const updateUser = async(id,data) => {
  const update = await prisma.user.update({
    where: {
      id
    },
    data
  });

  return update
}

export const getUserById = async(id) => {
  const userById = await prisma.user.findUnique({
    where: {
      id
    },
  })

  return userById
}