import PropTypes from "prop-types"
import css from "./Statistics.module.css"
import {getRandomHexColor} from "./randomBgColor.js"


export const Statistics = ({title, stats}) => {
   return ( <section className={css.statistics}>
    {title.length > 0 && <h2 className={css.title}>{title}</h2>}
  
    <ul className={css.stat_list}>
    {stats.map(stat => {
        
        return (
        <li key={stat.id} className={css.item} style={{
            backgroundColor:getRandomHexColor(),
        }}>
        <span className="label">{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}%</span>
      </li>
    )}
        )}
  </ul>
</section>
)}

Statistics.propTypes = {
    stats:  PropTypes.array
    }