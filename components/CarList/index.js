import React from 'react'
import { FlatList, View, Dimensions } from 'react-native'
import CarContainer from '../CarContainer'
import cars from './cars'

export default function CarList() {
  return (
    <View>
        <FlatList
        data={cars}
        renderItem={({item}) => <CarContainer car={item}/>}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicators={false}
        />
    </View>
  )
}
