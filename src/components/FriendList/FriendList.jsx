import css from "./FriendList.module.css"


export const FriendList = ({friends}) => {
    return (
        <div>
            <ul className={css.friend_list}>
            {friends.map(friend => {
                return (
                    <li key={friend.id} className={css.item}>
                    {friend.isOnline === true
                    ?  <span className={css.status_online}></span>
                    :  <span className={css.status_ofline}></span>}
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>
                  </li>
                )
            })}
           
</ul>
        </div>
    )
}

