import PropTypes from "prop-types"
import {TableTit,Thead,TheadTh,TheadTd} from "./TransationHistory.styled"

export const TransactionHistory = ({items}) => {
 return (
    <TableTit>
  <Thead>
    <tr>
      <TheadTh>Type</TheadTh>
      <TheadTh>Amount</TheadTh>
      <TheadTh>Currency</TheadTh>
    </tr>
  </Thead>

  <tbody>
    {items.map(item => {
        return (
    <tr key={item.id}>
      <TheadTd>{item.type}</TheadTd>
      <TheadTd>{item.amount}</TheadTd>
      <TheadTd>{item.currency}</TheadTd>
    </tr>
        )
    })}
    
  </tbody>
</TableTit>
 )
}

TransactionHistory.propTypes = {
    friends: PropTypes.array
}

