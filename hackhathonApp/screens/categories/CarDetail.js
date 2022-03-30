import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from '../../styles/styling';

const CarDetail = ({navigation, route}) => {
  const [Data, setData] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const obj = route.params;
    setProduct(obj);
  }, [route.params]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://192.168.192.97:5000/api/product/:${id}`)
        .then(res => {
          setData(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  console.log(product + 'catdata');
  return (
    <>
      <View style={[styles.card, styles.m3]}>
        <Text style={[styles.fs2, styles.txtprime, styles.m1]}>
          {product.title}
        </Text>
        <Image
          style={{width: 200, height: 200}}
          source={{uri: product.image}}
        />
        <Text style={[styles.fs3, styles.txtprime, styles.m1]}>
          {product.description}
        </Text>
        <Text style={[styles.fs3, styles.txtprime, styles.m1]}>
          $ {product.price}
        </Text>
        <Text style={[styles.fs3, styles.txtprime, styles.m1]}>
          {product.category}
        </Text>
        {/* <Text style={styles.fs2}>{product.rating.rate}</Text> */}
      </View>
    </>
  );
};

export default CarDetail;
