import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
// doubt1 how to create date format i spend 6 hours
// doubt2 initialClassName background random color purpose i spend 6 hours
// doubt3 near toggle like button i spend 24 hours

class Comments extends Component {
  state = {
    listOfComments: [],
    nameInput: '',
    commentInput: '',
    count: 0,
  }

  addComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const initialBackgroundClassNames = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuid(),
      nameInput,
      commentInput,
      isLiked: false,
      date: new Date(),
      initailClassName: initialBackgroundClassNames,
    }

    this.setState(prevState => ({
      listOfComments: [...prevState.listOfComments, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onClickAddBtn = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      listOfComments: prevState.listOfComments.map(eachComment => {
        if (id === eachComment.id) {
          // i did a mistake here
          // i wrote like this
          // return{...eachComment, isLiked: !prevState.isLiked}
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteFunction = id => {
    const {listOfComments} = this.state
    const updatedList = listOfComments.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({
      listOfComments: updatedList,
    })

    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  render() {
    const {nameInput, commentInput, listOfComments, count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Comments</h1>
          <div className="top-card">
            <form className="form-control" onSubmit={this.addComment}>
              <p>Say something about 4.0 Technologies</p>
              <input
                type="text"
                value={nameInput}
                className="name-input"
                placeholder="Your Name"
                onChange={this.onChangeNameInput}
              />

              <textarea
                type="text-area"
                value={commentInput}
                className="comment-input"
                placeholder="Your Comment"
                cols="8"
                rows="6"
                onChange={this.onChangeCommentInput}
              ></textarea>

              <button
                onClick={this.onClickAddBtn}
                className="add-comment-btn"
                type="submit"
              >
                Add Comment
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comments-app-image"
              alt="comments"
            />
          </div>

          <hr />
          <p>
            <span className="no-comments">{count}</span> Comments
          </p>
          <ul className="list-container">
            {listOfComments.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                toggleIsLiked={this.toggleIsLiked}
                deleteFunction={this.deleteFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
