/*eslint-disable */
import { expect } from 'chai';
import reducer from '../screens/Posts/reducer';
import { requestPostsSuccess } from '../screens/Posts/actions';

describe('Posts reducer', () => {
  it(`GIVEN a action to save the posts returned
      WHEN i send the action to reducer 
      THEN the system get new state correct`, () => {
    //Arrange
    const initialState = {
      posts: [],
    };

    const posts = [
      {
        id: 1,
        name: 'test1',
        photo: 'htytp://',
        title: 'titulo',
        body: 'nononnono',
      },
      {
        id: 2,
        name: 'test1',
        photo: 'htytp://',
        title: 'titulo',
        body: 'nononnono',
      },
    ];
    const action = requestPostsSuccess(posts);

    //Act
    const newState = reducer(initialState, action);

    //Assert

    expect(newState.posts.length).to.be.equal(2);
    expect(newState.posts[0].id).to.be.equal(1);
    expect(newState.posts[1].id).to.be.equal(2);
  });
});
