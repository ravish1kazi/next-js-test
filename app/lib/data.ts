import { sql } from '@vercel/postgres';
import {
  Todolist
} from './definitions';
import { formatCurrency } from './utils';

import { unstable_noStore as noStore } from 'next/cache';

export async function fetchtodoLists() {
  noStore();
  try {
    const data = await sql<Todolist>`
      SELECT *
      FROM todolists`;

    console.log("todolist_rows");
    console.log(data.rows);

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch.');
  }
}

export async function fetchsingletodoLists(id) {
  noStore();
  try {
    const data = await sql<Todolist>`
      SELECT *
      FROM todolists
      WHERE id=${id}`;

    console.log("todolist_rows");
    console.log(data.rows);

    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch single task.');
  }
}

export async function create_todolist(data_req : any) {
  try {
    const data = await sql<Todolist>`
    INSERT INTO todolists (taskName, taskDate, taskTime)
    VALUES (${data_req.task_name},${data_req.task_date},${data_req.task_time});`;

    return true;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create.');
  }
}

export async function update_todolist(data_req : any) {
  try {
    const data = await sql<Todolist>`
    UPDATE todolists
    SET
      taskName = ${data_req.task_name},
      taskDate = ${data_req.task_date},
      taskTime = ${data_req.task_time}
    WHERE
      id = ${data_req.id}`;


    return true;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update.');
  }
}

export async function delete_todolist(id : number) {
  try {
    const data = await sql<Todolist>`
    DELETE FROM todolists
    WHERE
      id = ${id}`;

    return true;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete.');
  }
}
