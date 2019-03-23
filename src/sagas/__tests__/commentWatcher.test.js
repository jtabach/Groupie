import { expectSaga } from 'redux-saga-test-plan';
import { createCommentRequest } from '../commentWatcher';
import { commentApi } from '../api';

describe('CommentWatcher', () => {
  describe('CreateComment', () => {
    let fakePayload;
    let fakeComment;

    beforeEach(() => {
      fakePayload = {
        comment: {
          text: 'this is a comment',
          leagueId: '5c309027db7f2c10483f09ff',
          teamId: '5c309027db7f2c10483fasdd',
          postId: '5c5842c0679c43f34b957bc3'
        }
      };
      fakeComment = {
        comment: {
          date: '2019-03-22T19:01:42.803Z',
          league: '5c309027db7f2c10483f09ff',
          post: '5c5842c0679c43f34b957bc3',
          text: 'this is a comment',
          _id: '5c9531161ab78eb9a5abab5c',
          team: {
            user: {
              firstName: 'John',
              lastName: 'Doe'
            }
          }
        }
      };
    });

    it('successfully creates a comment on a post', () => {
      return expectSaga(createCommentRequest, commentApi)
        .provide({
          call(effect) {
            if (effect.fn === commentApi.createComment) {
              return fakeComment;
            }
          }
        })
        .put({
          type: 'CREATE_COMMENT_COMPLETED',
          payload: { data: fakeComment }
        })
        .dispatch({ type: 'CREATE_COMMENT', payload: fakePayload })
        .run();
    });
  });
});
