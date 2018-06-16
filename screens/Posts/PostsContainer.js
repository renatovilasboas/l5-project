import React, { Component } from 'react';
import { View } from 'react-native';
import requestUrl from '../../utils/request';
import PostsScreen from './PostsScreen';

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

type Props = {};
export default class PostsContainer extends Component<Props> {
  constructor() {
    super();
    this.state = {
      postsToView: [],
    };
  }

  async componentDidMount() {
    const posts = await requestUrl('https://jsonplaceholder.typicode.com/posts');
    const users = await requestUrl('https://jsonplaceholder.typicode.com/users');
    const postsToView = this.generatePostsToView(posts, users);
    this.setState({
      postsToView,
    });
  }

  generatePostsToView(posts, users) {
    const postsToView = [];

    posts.forEach((post) => {
      const user = users.find((x) => x.id === post.userId);
      const photoUser = photos.find((x) => x.id === post.userId);

      postsToView.push({
        id: post.id,
        name: user.name,
        photo: photoUser.photo,
        title: post.title,
        body: post.body,
      });
    });

    return postsToView;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PostsScreen
          {...this.props}
          posts={this.state.postsToView}
          keyNameId="id"
        />
      </View>
    );
  }
}
