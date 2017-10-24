import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

// The following 2 lines are required for LayoutAnimation to work on Android.
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;
    return (
      <TouchableNativeFeedback
        onPress={() => this.props.selectLibrary(id)}
        useForeground
      >
        <View>
          <CardSection>
            <Text style={styles.title}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
};

const mapStateToProps = (state, props) => {
  const expanded = state.selectedLibraryId === props.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
