'use server'
import { create_todolist, update_todolist, delete_todolist } from '@/app/lib/data';
import {redirect} from 'next/navigation'
 
export async function createTask(formData: FormData) {

  const rawFormData = {
      task_name: formData.get('task_name'),
      task_date: formData.get('task_date'),
      task_time: formData.get('task_time'),
  }

  await create_todolist(rawFormData)

  console.log("create_done");

  redirect("/")

}

export async function updateTask(id, formData: FormData) {

  const rawFormData = {
      task_name: formData.get('task_name'),
      task_date: formData.get('task_date'),
      task_time: formData.get('task_time'),
      id: id
  }

  console.log("rawFormData");
  console.log(rawFormData);

  await update_todolist(rawFormData)

  redirect("/")

}

export async function deleteTask(formData: FormData) {

  await delete_todolist(formData.get("id"))

  redirect("/")

}