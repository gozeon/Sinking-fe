import * as faker from 'faker'

faker.setLocale('zh_CN')

const createArray = (func: () => void, len = 5) => {
  return Array.from({ length: len }, func)
}

export const createProject = (len = 5) =>
  createArray(
    () => ({
      id: faker.datatype.uuid(),
      name: faker.finance.accountName(),
      description: faker.lorem.words(20),
    }),
    len
  )

export const createTags = (len = 5) =>
  createArray(
    () => ({
      id: faker.datatype.uuid(),
      name: faker.lorem.word(),
      select: false,
    }),
    len
  )

export const createAuths = (len = 6) =>
  createArray(
    () => ({
      id: faker.datatype.uuid(),
      name: faker.finance.accountName(),
      role: 'admin',
    }),
    len
  )

export const createPages = (len = 6) =>
  createArray(
    () => ({
      id: faker.datatype.uuid(),
      name: faker.lorem.word(),
      desc: faker.lorem.words(10),
      creatUser: faker.finance.accountName(),
      creatTime: faker.date.past(),
    }),
    len
  )
