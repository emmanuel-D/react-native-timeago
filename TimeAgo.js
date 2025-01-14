// @flow
import React, { Component } from "react";
import { Text } from "react-native";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default class TimeAgo extends Component {
  props: {
    time: string,
    interval?: number,
    hideAgo?: boolean
  };
  state: { timer: null | number } = { timer: null };

  static defaultProps = {
    hideAgo: false,
    interval: 60000
  };

  componentDidMount() {
    this.createTimer();
  }

  createTimer = () => {
    this.setState({
      timer: setTimeout(() => {
        this.update();
      }, this.props.interval)
    });
  };

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  update = () => {
    this.forceUpdate();
    this.createTimer();
  };

  render() {
    const { time, hideAgo } = this.props;
    return (
      <Text {...this.props}>
        {dayjs(time).fromNow(hideAgo)}
      </Text>
    );
  }
}
