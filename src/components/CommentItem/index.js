// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

// if i click the like button blue color like button has to come
// why i am not getting

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteFunction} = props
  const {id, nameInput, commentInput, isLiked, date, initailClassName} =
    commentDetails

  const likeTextStatus = isLiked ? 'active' : 'inActive'
  const likeButtonStatus = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickDeleteBtn = () => {
    deleteFunction(id)
  }

  const onClickLikeBtn = () => {
    toggleIsLiked(id)
  }

  return (
    <li className="list-card">
      <div className="card5">
        <div className={`first-letter-and-color ${initailClassName}`}>
          <p>{nameInput[0].toUpperCase()}</p>
        </div>
        <div>
          <div className="card6">
            <h1 className="name">{nameInput}</h1>
            <p className="time">{formatDistanceToNow(date)}</p>
          </div>
          <p className="comment">{commentInput}</p>
        </div>
      </div>
      <div className="like-delete-button-card">
        <button
          onClick={onClickLikeBtn}
          className={` like-btn ${likeTextStatus}`}
          type="button"
        >
          <img src={likeButtonStatus} className="like-img" alt="like" />
          Like
        </button>
        <button
          onClick={onClickDeleteBtn}
          data-testid="delete"
          className="delete-btn"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-img"
            alt="delete img"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
