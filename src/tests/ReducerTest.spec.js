import reducer from '../redux/Reducer';
import {initialState} from '../redux/Reducer';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot()
  })

  it('should handle TODO_REQUEST', () => {
    expect(
      reducer(initialState,
      {
        type: 'TODO_REQUEST'
      })
    ).toMatchSnapshot()
  })
})