import {Sequelize} from 'sequelize'
import {config} from 'dotenv'
import { readFile } from 'fs/promises';

const json = JSON.parse(await readFile(new URL('./config.json', import.meta.url)));

config()



const dbhost = process.env.DB_HOST
const dbuser = process.env.DB_USER
const dbpass = process.env.DB_PASS
const database = process.env.DATABASE

const db = new Sequelize(database, dbuser, dbpass, {
  dialect: 'sqlite',
  storage: `./${dbhost}`
})

export default db