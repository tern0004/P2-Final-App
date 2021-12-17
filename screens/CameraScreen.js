import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from "expo-image-picker";


export default function CameraScreen( { route, navigation } ) {
    const [ready, setReady] = useState(false);
    let camera = useRef();
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        (async () => {
        const {
            status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert("Fine. Then you can't use my app.");
        }
        })();
    }, []);
    

    const takePic = () => {
        //take a picture
        const options = {
            quality: 0.8,
            exif: true,
            base64: true,
        };
        camera
            .takePictureAsync(options)
            .then(({ uri, width, height, exif, base64 }) => {
                route.params.setCameraImage(uri)
                navigation.navigate('CreateExpense',)
            });
    };

    const useImageGallery = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            route.params.setCameraImage(result.uri);
            navigation.navigate('CreateExpense')
          }
    }


    

    if (hasPermission === null) {
        return <View style={styles.container} />;
        //empty view until we have permission
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text>No access to camera</Text>;
            </View>
        );
        //message about permission being denied by user
    }

    return (
        <View style={styles.container}>
            <Text>Camera Demo</Text>
            <Camera
                style={styles.camera}
                type={type}
                ref={(r) => {
                    camera = r;
                }}
            >
                <View style={styles.buttonContainer}>
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}
                    >
                        <Text style={styles.text}> Flip </Text>
                    </Pressable>
                </View>
            </Camera>

            <Button title="Existing Image" style={styles.buttonTake} onPress={ () => { useImageGallery() } } />
            <Button title="Take Picture" style={styles.buttonTake} onPress={ () =>{ takePic() } } />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        width: 300,
        height: 400,
        margin: 10,
    },
    buttonContainer: {},
    text: {
        color: 'white',
        fontSize: 24,
    },
    buttonTake: {},
});