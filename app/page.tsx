'use client';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { fetchtodoLists } from '@/app/lib/data';
import { deleteTask } from '@/app/actions'
import { Button } from './ui/button';

export default async function Page() {
  const todoLists = await fetchtodoLists();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex w-full flex-col md:col-span-4">
        <div
          className={clsx(
            'flex flex-row items-center justify-between py-4'
          )}
        >
          <h2 className={` mb-10 text-xl md:text-2xl`}>
            To Do Lists
          </h2>
          <a
            href={"/create"}
            className="text-black flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="hidden md:block">Create</p>
          </a>
        </div>
        <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
          {/* NOTE: comment in this code when you get to this point in the course */}

          <div className="bg-white px-6">
            {todoLists.map((todolist, i) => {
              return (
                <div
                  key={todolist.id}
                  className={clsx(
                    'flex flex-row items-center justify-between py-4',
                    {
                      'border-t': i !== 0,
                    },
                  )}
                >
                  <div className="flex items-center">

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold md:text-base text-black">
                        {todolist.taskname}
                      </p>
                      <p className="hidden text-sm text-gray-500 sm:block text-black">
                        {new Date(todolist.taskdate).toISOString().split('T')[0]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">

                    <p
                      className={` truncate text-sm font-medium md:text-base text-black mr-10`}
                    >
                      {todolist.tasktime}
                    </p>
                    <a
                      href={"/update?id="+todolist.id+"&data="+btoa(JSON.stringify(todolist))}
                      className="text-black flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                      <p className="hidden md:block">Update</p>
                    </a>

                    <form action={deleteTask}>
                      <input type="hidden" name="id" value={todolist.id}/>
                      <Button type="submit">Delete</Button>
                    </form>

                  </div>

                </div>
              );
            })}
          </div>
          <div className="flex items-center pb-2 pt-6">
            <ArrowPathIcon className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

