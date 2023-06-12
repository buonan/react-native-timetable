import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './Event.styles';

const Event = ({ event, onPress, style, customStyle }) => {
  event.extra_descriptions = event.extra_descriptions || [];
  return (
    <TouchableOpacity
      onPress={() => onPress(event)}
      style={[styles.item, style, {
        backgroundColor: event.color,
      }]}
    >
      <Text style={[styles.title, { color: customStyle.color }]}>{event.title}</Text>
      <Text style={[styles.location, { color: customStyle.color }]}>{event.location}</Text>
      {event.extra_descriptions.map((description, idx) => (
        <Text key={idx} style={[styles.description, { color: customStyle.color }]}>{description}</Text>
      ))}
    </TouchableOpacity>
  );
};

const eventPropTypes = PropTypes.shape({
  color: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  extra_descriptions: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  startTime: PropTypes.instanceOf(Date).isRequired,
  endTime: PropTypes.instanceOf(Date).isRequired,
});

Event.propTypes = {
  event: eventPropTypes.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

export default Event;
