import { createSelector } from 'reselect';

const photos = [
  {
    id: 1,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 2,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/g03.png',
  },
  {
    id: 3,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/g03.png',
  },
  {
    id: 4,
    photo:
      'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18350.png',
  },
  {
    id: 5,
    photo:
      'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18341.png',
  },
  {
    id: 6,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 7,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 8,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 9,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 10,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
];

const generatePostsToView = (posts, users) => {
  const postsToView = [];

  posts.forEach((post) => {
    const user = users.find((x) => x.id === post.userId);
    const photoUser = photos.find((x) => x.id === post.userId);

    postsToView.push({
      userId: user.id,
      id: post.id,
      name: user.name,
      photo: photoUser.photo,
      title: post.title,
      body: post.body,
    });
  });

  return postsToView;
};

const postsContainerDomain = (state) => state.postsContainer;

const todosContainerSelector = createSelector(
  postsContainerDomain,
  (postsContainer) =>
    generatePostsToView(postsContainer.posts, postsContainer.users)
);

export default todosContainerSelector;
