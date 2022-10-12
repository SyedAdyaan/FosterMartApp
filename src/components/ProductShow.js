import React, {useEffect} from 'react';
import {View, FlatList, Text, Image, TouchableHighlight} from 'react-native';
// import SelectedStar from '../../assets/SelectedStar.svg'

export default function ProductShowComponent({data}) {
   
//   const renderStars = (ratings) => {
//     let stars = [];
//     for (let i = 0; i < ratings ; i++) {
//       stars.push(<SelectedStar height={12} width={12} />);
//     }

//     return stars;
//   };
  return (
    <View style={{marginTop: 20}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              borderColor: 'gray',
              borderWidth: 0.4,
              marginHorizontal: 15,
              borderRadius: 20,
              width: 250,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderTopEndRadius: 20,
                borderTopLeftRadius: 20,
              }}>
              <Image
                source={{uri: item.imageUrl}}
                style={{width: '100%', height: 100}}
                resizeMode={'contain'}
              />
            </View>

            <View
              style={{borderBottomLeftRadius: 20, borderBottomEndRadius: 20}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  alignSelf: 'center',
                  paddingVertical: 5,
                }}>
                {item.name.toUpperCase()}
              </Text>
              <View style={{height: 0.5, backgroundColor: 'gray'}}></View>
              <View style={{padding: 10}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                  }}>{`PKR ${item.price}`}</Text>
                <View>
                  {/* <View
                    style={{
                      flexDirection: 'row',
                      width: '25%',
                      paddingTop: 5,
                      justifyContent: 'space-between',
                    }}>
                        {renderStars(item.ratings)}
                    </View> */}
                </View>
              </View>

              <TouchableHighlight style={{}} underlayColor={'rgb(178,34,34)'}>
                <View
                  style={{
                    backgroundColor: '#FFD700',
                    height: 40,
                    justifyContent: 'center',
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                  }}>
                  <Text style={{alignSelf: 'center', color: '#C9670A',fontWeight:'bold'}}>
                    {'VIEW PRODUCT'}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        )}
        keyExtractor={product => product.id}
      />
    </View>
  );
}