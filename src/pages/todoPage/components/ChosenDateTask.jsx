


export default function ChosenDateTask({ tasks }) {

    return (
        <div className="ChosenDateTask">
            {tasks.length ? (
                tasks.map((task, index) => {
                    return (
                        <div className="handleTask">
                            <p>{task.title}</p>
                            <input type="checkbox" name="taskCompleted" />
                        </div>
                    )
                }
                )
            ) : (
                <h5>no tasks</h5>
            )}
            <div className="removeBox">
                <button>remove</button>
            </div>
        </div>
    )
}