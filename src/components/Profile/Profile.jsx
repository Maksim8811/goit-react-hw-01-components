import PropTypes from "prop-types"
import {ProfileStyle,Description,UserName,Stats,Avatar,Quantity,StatsList} from "./Profile.styled"
export const Profile = ({username,tag,location,avatar,stats}) => {
    
    return (<ProfileStyle>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
        <UserName>@{tag}</UserName>
    <UserName>{location}</UserName>
  </Description>

  <Stats>
    <StatsList >
      <span>Followers</span>
      <Quantity>{stats.followers}</Quantity>
    </StatsList>
    <StatsList >
      <span>Views</span>
      <Quantity>{stats.views}</Quantity>
    </StatsList>
    <StatsList >
      <span>Likes</span>
      <Quantity>{stats.likes}</Quantity>
    </StatsList>
  </Stats>
</ProfileStyle>
)}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
}