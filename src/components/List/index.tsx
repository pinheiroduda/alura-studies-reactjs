import Item from './Item'
import style from './style.module.scss'

export function List() {
  const tasks = [
    {
      task: 'React',
      time: '02:00:00'
    },
    {
      task: 'JavaScript',
      time: '01:00:00'
    }
  ]

  return (
    <div className={style.listaTarefas}>
      <h2>
        <ul>
          {tasks.map((item, index) => (
            <Item {...item} key={index} />
          ))}
        </ul>
      </h2>
    </div>
  )
}
