import PropTypes from 'prop-types';

const teamInLeague = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
});

const teamInUser = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  league: PropTypes.object.isRequired
});

const postInLeague = PropTypes.shape({
  date: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  team: PropTypes.object.isRequired
});

// TODO: duplicate of teamInComment and teamInLike
const teamInPost = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  league: PropTypes.string.isRequired
});

const teamInComment = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  league: PropTypes.string.isRequired
});

const teamInLike = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  league: PropTypes.string.isRequired
});

// TODO: duplicate of comment
const commentInPost = PropTypes.shape({
  text: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  team: teamInComment.isRequired
});

// TODO: duplicate of like
const likeInPost = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  team: teamInLike.isRequired
});

const league = PropTypes.shape({
  admin: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(postInLeague).isRequired,
  teams: PropTypes.arrayOf(teamInLeague).isRequired
});

const user = PropTypes.shape({
  email: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  teams: PropTypes.arrayOf(teamInUser).isRequired
});

const team = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
});

const post = PropTypes.shape({
  text: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  team: teamInPost.isRequired,
  comments: PropTypes.arrayOf(commentInPost).isRequired,
  likes: PropTypes.arrayOf(likeInPost).isRequired
});

const comment = PropTypes.shape({
  text: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  team: teamInComment.isRequired
});

const like = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  team: teamInLike.isRequired
});

export default {
  league,
  user,
  team,
  post,
  comment,
  like
};
