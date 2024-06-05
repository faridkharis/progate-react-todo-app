import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => {
  return <p>{todo.title}</p>
}

TodoItem.propTypes = {
  todo: PropTypes.object
};

export default TodoItem;