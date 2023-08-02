import Button from '../Button'
import { Clock } from './Clock'
import style from './Stopwatch.module.scss'

export function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escoha um card e inicie o cronômetro</p>

      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  )
}
