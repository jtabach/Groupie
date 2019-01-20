import moment from 'moment';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const YEAR = WEEK * 52;

const uiHelper = {
  formatPostDate: function(date) {
    const time = new Date(date).getTime();

    let formattedDate;

    if (time + DAY > Date.now()) {
      formattedDate = moment(date).fromNow();
    } else if (time + YEAR > Date.now()){
      formattedDate = moment(date).format('MMMM Do, h:mma');
    } else {
      formattedDate = moment(date).format('MMMM Do YYYY, h:mma');
    }

    return formattedDate;
  },

  formatCommentDate: function(date) {
    return moment(date).fromNow();
  },

  replaceHTMLCharRef: function (str) {
    return str.replace(/&apos;/g, '\'');
  }
};

export default uiHelper;