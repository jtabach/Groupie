import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { fetchLeagueRequest } from '../leagueWatcher';
import { leagueApi } from '../api';

describe('LeagueWatcher', () => {
  describe('FetchLeague', () => {
    let fakePayload;
    let fakeLeague;

    beforeEach(() => {
      fakePayload = 'somehash';
      fakeLeague = {
        league: {
          teams: [],
          posts: [],
          _id: 'somehash',
          admin: 'someuserhash',
          fantasyLeagueId: '1234'
        }
      };
    });

    it('successfully fetches a league', () => {
      return expectSaga(fetchLeagueRequest, leagueApi)
        .provide({
          call(effect) {
            if (effect.fn === leagueApi.fetchLeague) {
              return fakeLeague;
            }
          }
        })
        .put({
          type: 'FETCH_LEAGUE_COMPLETED',
          payload: { data: fakeLeague }
        })
        .dispatch({ type: 'FETCH_LEAGUE', payload: fakePayload })
        .run();
    });

    it('handles errors', () => {
      const error = new Error('Failed to fetch leauge');

      return expectSaga(fetchLeagueRequest, leagueApi)
        .provide([[matchers.call.fn(leagueApi.fetchLeague), throwError(error)]])
        .put({ type: 'FETCH_LEAGUE_FAILED', error })
        .dispatch({ type: 'FETCH_LEAGUE', payload: fakePayload })
        .run();
    });
  });
});
