/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import requestUrl from './utils/request';
import Posts from './screens/Posts';
import Screen2 from './screens/screen2';
import Screen3 from './screens/screen3';

const Cabecalho = styled.View`
  background-color: #3498db;
  flex: 0.6;
`;

const Body = styled.View`
  flex: 7;
`;

const Rodape = styled.View`
  flex: 1;
  background-color: #3498db;
  flex-direction: row;
`;

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
    photo:
      'http://www.iconarchive.com/download/i47461/hopstarter/face-avatars/Male-Face-E1.ico',
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
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      index: 0,
      postsToView: [],
      routes: [
        { key: 'music', title: 'Music', icon: 'queue-music' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
      ],
    };
  }

  async componentDidMount() {
    const posts = await requestUrl('https://jsonplaceholder.typicode.com/posts');
    const users = await requestUrl('https://jsonplaceholder.typicode.com/users');
    this.setState({
      postsToView: this.generatePostsToView(posts, users),
    });
  }

  getPostsScreen() {
    return <Posts posts={[]} />;
  }

  handleIndexChange = (index) => this.setState({ index });

  generatePostsToView(posts, users) {
    const postsToView = [];

    posts.forEach((post) => {
      const user = users.find((x) => x.id === post.userId);
      const photoUser = photos.find((x) => x.id === post.userId);
      user.photo = photoUser.photo;
      postsToView.push({
        ...post,
        ...user,
      });
    });

    return postsToView;
  }

  renderScene = BottomNavigation.SceneMap({
    music: Screen2,
    albums: Screen2,
    recents: Screen3,
  });

  render() {
    return (
      <View style={styles.container}>
        <Cabecalho style={{ backgroundColor: '#3498db', flex: 0.6 }}>
          <Text>TITULO</Text>
        </Cabecalho>

        <Body />

        <Rodape>
          <BottomNavigation
            navigationState={this.state}
            onIndexChange={this.handleIndexChange}
            renderScene={this.renderScene}
          />
        </Rodape>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    color: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
