import UserInfo from "../userinfo/UserInfo"
import './Comment.css'

function Comment(props) {
	return (
		<div className='Comment'>
			<UserInfo author={props.author}/>
			<div className='Comment-text'>{props.text}</div>
			<div className='Comment-date'>{props.date.toLocaleString()} </div>
		</div>
	)
}

export default Comment
