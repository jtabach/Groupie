import _ from 'lodash';

export function createAction(type, payload) {
  const error = payload instanceof Error;

  return {
    type,
    payload: error
      ? {
          stack: payload.stack,
          message: payload.message
        }
      : payload,
    error
  };
}

export function createAsyncAction(startType, completeType, asyncFn) {
  return dispatch => {
    dispatch(createAction(startType));

    const actionCompleted = _.curry(createAction)(completeType);
    return asyncFn(dispatch)
      .then(data => {
        dispatch(actionCompleted(data));
        return data;
      })
      .catch(error => {
        dispatch(actionCompleted(error));
        throw _.isError(error) ? error : new Error(error);
      });
  };
}
