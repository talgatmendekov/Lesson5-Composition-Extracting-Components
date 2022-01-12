import './App.css'
import Comment from './components/comment/Comment'

const commentData = {
	date: new Date(),
	text: 'Learn React is awesome!',
	author: {
		name: 'Kitty',
		avatarUrl: 'https://placekitten.com/g/64/64',
	},
}

function App() {
	return (
		<div className="App">
			<Comment text = {commentData.text} author={commentData.author} date={commentData.date} />
		</div>
	)
}

export default App
