import CostItem from './CostItem.js'
import './CostList.css'

const CostList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className='cost-list__fallback'>
        <p>В Этом Году Расходов Нет</p>
    </h2>
  }

  return <ul className='cost-list'>
    {props.costs.map((cost) => (
        <CostItem key={cost.id} date={cost.date} description={cost.description} amount={cost.amount}/>))}
  </ul>
}

export default CostList
