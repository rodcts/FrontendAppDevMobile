import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import {
    requestPermissionsAsync,
    getCurrentPositionAsync,
} from 'expo-location';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLatitude: 0,
            currentLongitude: 0,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
        };
    }

    async componentDidMount() {
        const { granted } = await requestPermissionsAsync();

        if (granted) {
            const { coords } = await getCurrentPositionAsync({
                enableHighAccuracy: true,
            });

            const { latitude, longitude } = coords;

            // const { currentLatitude, currentLongitude } = this.state;

            // currentLatitude = latitude;
            // this.state.currentLongitude = longitude;

            this.setState({
                currentLatitude: latitude,
                currentLongitude: longitude,
            });
        }
    }
    render() {
        return (
            <>
                <MapView
                    style={styles.mapStyle}
                    showsMyLocationButton={true}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    loadingEnabled={true}
                    scrollEnabled={true}
                    showsCompass={true}
                    minZoomLevel={0}
                    maxZoomLevel={20}
                    zoomTapEnabled={true}
                    enableHighAccuracy={true}
                    region={{
                        latitude: this.state.currentLatitude,
                        longitude: this.state.currentLongitude,
                        latitudeDelta: this.state.latitudeDelta,
                        longitudeDelta: this.state.longitudeDelta,
                    }}
                ></MapView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
