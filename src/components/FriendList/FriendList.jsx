import PropTypes from "prop-types"
import { FriendListed, Item, StatysOn, StatysOff, Avatar, FriendName} from "./FriendList.styled"

export const FriendList = ({friends}) => {
    return (
        <div>
            <FriendListed>
            {friends.map(friend => {
                return (
                    <Item key={friend.id}>
                    {friend.isOnline === true
                    ?  <StatysOn></StatysOn>
                    :  <StatysOff></StatysOff>}
                    <Avatar src={friend.avatar} alt="User avatar" width="48" />
                    <FriendName>{friend.name}</FriendName>
                  </Item>
                )
            })}
           </FriendListed>
        </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array
}
