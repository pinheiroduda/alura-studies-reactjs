export function List() {
  const tasks = [
    {
      task: 'React',
      time: '02:00:00'
    }, {
      task: 'JavaScript',
      time: '01:00:00'
    }
  ]

  return(
    <div>
      <h2>
        <ul>
          {tasks.map((task, index) => (
            <li>
              <h3>{task.task}</h3>
              <span>{task.time}</span>
            </li>
          ))}
        </ul>
      </h2>
    </div>
  )
}