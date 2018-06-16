import { BottomNavigation } from 'react-native-paper';
import PostContainer from '../Posts/PostsContainer';
import Screen2 from '../screen2';
import Screen3 from '../screen3';

export const routes = [
  { key: 'music', title: 'Music', icon: 'queue-music' },
  { key: 'albums', title: 'Albums', icon: 'album' },
  { key: 'recents', title: 'Recents', icon: 'history' },
];

export const renderScene = BottomNavigation.SceneMap({
  music: PostContainer,
  albums: Screen2,
  recents: Screen3,
});
