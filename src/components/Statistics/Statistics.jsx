import PropTypes from "prop-types"

export const Statistics = ({title, stats}) => {
   return ( <section className="statistics">
    {title.length > 0 && <h2 className="title">{title}</h2>}
  
    <ul className="stat-list">
    {stats.map(stat => {
        console.log(stat.id)
        return (
        <li key={stat.id} className="item">
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}</span>
      </li>
    )}
        )}
  </ul>
</section>
)}

Statistics.propTypes = {
    stats:  PropTypes.array
    }