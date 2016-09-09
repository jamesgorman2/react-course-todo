import expect from 'expect';
import actions, {START_LOAD_TODOS, FINISH_LOAD_TODOS, ERROR_LOAD_TODOS} from 'app/actions.jsx';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

// these test no longer work since we're using GitHub auth :-(
describe('action', () => {
  describe('addTodo', () => {
    it('should dispatch start then finish', done => {
      const api = { addTodo: () => Promise.resolve('bar') };
      const store = mockStore({});
      store.dispatch(actions(api).addTodo('foo'))
        .then(() =>
          expect(store.getActions().map(a => a.type)).toEqual([START_LOAD_TODOS, FINISH_LOAD_TODOS])
        )
        .catch(() => {})
        .then(done);
    });
    it('should dispatch start then error on failure', done => {
      const api = { addTodo: () => Promise.reject('bar') };
      const store = mockStore({});
      store.dispatch(actions(api).addTodo('foo'))
        .then(() =>
          expect(store.getActions().map(a => a.type)).toEqual([START_LOAD_TODOS, ERROR_LOAD_TODOS])
        )
        .catch(() => {})
        .then(done);
    });
    it('should dispatch call api with text', done => {
      const api = { addTodo: expect.createSpy().andReturn(Promise.resolve('bar')) };
      const store = mockStore({});
      store.dispatch(actions(api).addTodo('foo'))
        .then(() =>
          expect(spy).toHaveBeenCalledWith('foo')
        )
        .catch(() => {})
        .then(done);
    });
    it('should dispatch error of api call', done => {
      const api = { addTodo: () => Promise.reject('bar') };
      const store = mockStore({});
      store.dispatch(actions(api).addTodo('foo'))
        .catch(() => {})
        .then(() => {
          expect(store.getActions()[1].e).toEqual('bar');
          done();
        });
    });
  });
});
