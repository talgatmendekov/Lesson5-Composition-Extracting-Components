import './Avatar.css'

const Avatar =(props)=>{
    return(
    <img
        className='avatar'
        src={props.user.avatarUrl}
        alt=''
    />
    )
}

export default Avatar