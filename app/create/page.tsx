'use client';
import Link from 'next/link';
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createTask } from '@/app/actions'

export default function Page() {

    return (
        <form action={createTask}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {/* Invoice Amount */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Task Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="task_name"
                                placeholder="Enter task name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex">
                    {/* Invoice Status */}
                    <div className="mb-4">
                        <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                            Task Date
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="date"
                                    name="task_date"
                                    type='date'
                                    placeholder="Enter task date"
                                    className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 ml-10">
                        <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                            Task Time
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="time"
                                    name="task_time"
                                    type='time'
                                    placeholder="Enter task name"
                                    className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Button type="submit">Create</Button>
            </div>
        </form>
    );
}
