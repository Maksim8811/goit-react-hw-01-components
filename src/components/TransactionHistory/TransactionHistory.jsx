import PropTypes from "prop-types"
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({items}) => {
 return (
    <table className={css.transaction_history}>
  <thead>
    <tr className={css.thead}>
      <th className={css.thead_th}>Type</th>
      <th className={css.thead_th}>Amount</th>
      <th className={css.thead_th}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => {
        return (
    <tr key={item.id}>
      <td className={css.thead_th}>{item.type}</td>
      <td className={css.thead_th}>{item.amount}</td>
      <td className={css.thead_th}>{item.currency}</td>
    </tr>
        )
    })}
    
  </tbody>
</table>
 )
}

TransactionHistory.propTypes = {
    friends: PropTypes.array
}