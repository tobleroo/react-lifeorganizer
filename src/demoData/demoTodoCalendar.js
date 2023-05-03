


export default function demoTodoCalendar(){


    // return list of year with month and date with tasks
    const calendar = [
        {
          "year": "2021",
          "months": [
            {
              "name": "January",
              "days": [
                {
                  "date": "2021-01-01",
                  "dayOfWeek": "Friday",
                  "tasks": [
                    {
                      "title": "New Year's Day",
                      "completed": true,
                      "timeToComplete": 60
                    },
                    {
                      "title": "Submit expense report",
                      "completed": false,
                      "timeToComplete": 30
                    }
                  ]
                },
                {
                  "date": "2021-01-02",
                  "dayOfWeek": "Saturday",
                  "tasks": [
                    {
                      "title": "Buy groceries",
                      "completed": false,
                      "timeToComplete": 30
                    }
                  ]
                },
              ]
            },
            {
              "name": "February",
              "days": [
                {
                  "date": "2021-02-01",
                  "dayOfWeek": "Monday",
                  "tasks": [
                    {
                      "title": "Meeting with client A",
                      "completed": true,
                      "timeToComplete": 120
                    },
                    {
                      "title": "Submit expense report",
                      "completed": false,
                      "timeToComplete": 60
                    }
                  ]
                },
                {
                  "date": "2021-02-02",
                  "dayOfWeek": "Tuesday",
                  "tasks": [
                    {
                      "title": "Prepare presentation for meeting",
                      "completed": true,
                      "timeToComplete": 90
                    }
                  ]
                },
              ]
            },
          ]
        },
        {
          "year": "2022",
          "months": [
            {
              "name": "January",
              "days": [
                {
                  "date": "2022-01-01",
                  "dayOfWeek": "Saturday",
                  "tasks": [
                    {
                      "title": "New Year's Day",
                      "completed": true,
                      "timeToComplete": 60
                    }
                  ]
                },
                {
                  "date": "2022-01-02",
                  "dayOfWeek": "Sunday",
                  "tasks": [
                    {
                      "title": "Attend friend's birthday party",
                      "completed": false,
                      "timeToComplete": 180
                    }
                  ]
                },
              ]
            },
            {
              "name": "February",
              "days": [
                {
                  "date": "2022-02-01",
                  "dayOfWeek": "Tuesday",
                  "tasks": [
                    {
                      "title": "Meeting with client B",
                      "completed": true,
                      "timeToComplete": 90
                    },
                    {
                      "title": "Follow up with supplier",
                      "completed": false,
                      "timeToComplete": 60
                    }
                  ]
                },
                {
                  "date": "2022-02-02",
                  "dayOfWeek": "Wednesday",
                  "tasks": [
                    {
                      "title": "Create budget plan for Q2",
                      "completed": false,
                      "timeToComplete": 120
                    }
                  ]
                },
              ]
            }
          ]
        }
      ];

    return calendar;
}