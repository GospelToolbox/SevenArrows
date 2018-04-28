import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, Image, ListView } from 'react-native';

import Swiper from 'react-native-swiper';


export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Arial': require('./assets/fonts/arial.ttf')
    });
    this.setState({fontLoaded: true});
  }

  render() {
    if (!this.state.fontLoaded) { return null; }
    return (
      <Swiper showsButtons={true} loop={false}>
        <View style={styles.container}>
          <Header>What does this passage say?</Header>
          <Image source={require('./assets/images/1.png')} />
          <Questions data={[
            'What words or themes does the author repeat?',
            'What kinds of comparisons does the author make?',
            'Does the author use figures of speech?',
            'Who is doing what?',
            'How do the clauses and phrases fit together?',
            'What is going on in conversations?',
            'What does the author place in lists?',
            'What is the emotional tone?'
          ]}></Questions>
        </View>
        <View style={styles.container}>
          <Header>What did this passage mean to its original audience?</Header>
          <Image source={require('./assets/images/2.png')} />
          <Questions data={[
            'What cross references does the author use?',
            'What themes tie the passages together?'
          ]}></Questions>
        </View>
        <View style={styles.container}>
          <Header>What does this passage tell us about God?</Header>
          <Image source={require('./assets/images/3.png')} />
          <Questions data={[
            'What does the passage say about the character of God?',
            'What does the passage reveal about the trinity?'
          ]}></Questions>
        </View>
        <View style={styles.container}>
          <Header>What does this passage tell us about man?</Header>
          <Image source={require('./assets/images/4.png')} />
          <Questions data={[
            'How does this passage demonstrate people are made in God\'s image?',
            'What does this passage say about sin?',
            'How does this passage give you freedom and confidence to serve Christ?'
          ]}></Questions>
        </View>
        <View style={styles.container}>
          <Header>What does this passage demand of me?</Header>
          <Image source={require('./assets/images/5.png')} />
          <Questions data={[
            'How does this passage change the way you think about God?',
            'How does this passage reveal Gods want to change your heart?',
            'What does this passage say God wants you to do?'
          ]}></Questions>
        </View>
        <View style={styles.container}>
          <Header>How does this passage change the way I relate to people?</Header>
          <Image source={require('./assets/images/6.png')} />
          <Questions data={[
            'How does this passage affect those closest to you?',
            'What does this passage say about your interactions with people in your church?',
            'How does this passage inform the way you interact with those outside the church?',
            'How does the passage affect the way you relate to the marginalized'
          ]}></Questions>
        </View>
        <View style={styles.container}>
          <Header>What does this passage prompt me to pray to God?</Header>
          <Image source={require('./assets/images/7.png')} />
          <Questions data={[
            'How does this passage affect the content of your prayer?',
            'How does the passage inform the diversity of your prayer?',
            'Hode does this passage give you confidence to pray?'
          ]}></Questions>
        </View>
      </Swiper>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <Text style={styles.header}>{this.props.children}</Text>
    )
  }
}

class Questions extends React.Component {

  state = {};

  constructor(props) {
    super(props);
    
    this.state.data = props.data || [];
    this.state.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }).cloneWithRows(this.state.data);
  }

  componentWillReceiveProps({ data }) {
    const { data: oldData } = this.props;

    if (data !== oldData) {
      const dataSource = this.state.dataSource.cloneWithRows(data || []);
      this.setState({ dataSource });
    }
  }

  renderRow(data) {
    console.log(data);
    return (
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text>{'\u2022'}</Text>
        <Text style={styles.question}>{data}</Text>
      </View>
      /*
        
        <Text>test</Text>
      */
    );
  }

  render() {
    return (
      <ListView
        style={{ margin: 40 }}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    padding: 20
  },
  question: {
    paddingLeft: 5,
    fontSize: 18
  }
});
