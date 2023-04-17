import PropTypes from "prop-types"
import {StatisticsStule,StatList,Title,Item,StatLabel,Percentage} from "./Statistics.styled"



export const Statistics = ({title, stats}) => {
   return ( <StatisticsStule>
    {title.length > 0 && <Title>{title}</Title>}
  
    <StatList>
    {stats.map(stat => {
        
        return (
        <Item key={stat.id}>
        <StatLabel >{stat.label}</StatLabel>
        <Percentage>{stat.percentage}%</Percentage>
      </Item>
    )}
        )}
  </StatList>
</StatisticsStule>
)}

Statistics.propTypes = {
    stats:  PropTypes.array
    }