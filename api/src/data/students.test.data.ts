import students from '../utils/students';

const insertStudent = {
  RA: students.generateRA(),
  name: 'John Doe',
  email: 'jonhdoe@null.net',
  CPF: '123.456.789-00',
  status: 'active',
}

const updateStudent = {
  name: 'Jonny Doe',
  email: 'jonnydoe@null.net'
}

export { insertStudent, updateStudent };
