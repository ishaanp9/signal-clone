import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

const CustomListItem = ({id, chatName, enterChat}) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: 'https://media-exp1.licdn.com/dms/image/C5603AQHmHWneqsT_UQ/profile-displayphoto-shrink_200_200/0/1620619068445?e=1627516800&v=beta&t=qBIoD5iXMPG-SwXPMJjU78DQ5tPtl0TtpkKos7ROn9M',
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: '800' }}>
          Family Chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Whats Gucci my guy, how are u today? Lol Lmao yessir
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
