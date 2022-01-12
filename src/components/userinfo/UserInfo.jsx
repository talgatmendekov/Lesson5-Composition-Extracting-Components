import Avatar from "../avatar/Avatar"
import './UserInfo.css'

const UserInfo = (props)=>{
    return(
    <div className='UserInfo'>
        <Avatar user={props.author}/>
        <h3 className='UserInfo-name'>{props.author.name}</h3>
    </div>)
}

export default UserInfo