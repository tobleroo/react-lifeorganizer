


export default function demoTodoCalendar(){


    // return list of year with month and date with tasks
    return [
        {
            year: 2020,
            month: 1,
            date: 1,
            tasks: [
                {
                    id: 1,
                    title: "task 1",
                    description: "task 1 description",
                    status: "done"
                },
                {
                    id: 2,
                    title: "task 2",
                    description: "task 2 description",
                    status: "done"
                },
            ]
        },
        {
            year: 2020,
            month: 1,
            date: 2,
            tasks: [
                {
                    id: 3,
                    title: "task 3",
                    description: "task 3 description",
                    status: "done"
                },
                {
                    id: 4,
                    title: "task 4",
                    description: "task 4 description",
                    status: "done"
                },
            ]
        }
    ]

}