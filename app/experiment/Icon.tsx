import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';

export default () => {
return (
  <>
    <View
      style={{
        alignItems: 'center',
        paddingVertical: 5,
        flexGrow: 1,
      }}
    >
      <Icon
        name='rowing' />

      <Icon
        name='g-translate'
        color='#00aced' />

      <Icon
        name='sc-telegram'
        type='evilicon'
        color='#517fa4'
      />

      <Icon
        reverse
        name='american-football'
        type='ionicon'
        color='#517fa4'
      />

      <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} />
    </View>
  </>
);
};