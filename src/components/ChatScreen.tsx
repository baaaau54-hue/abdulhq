import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chat Screen</Text>
            {/* Add your chat UI components here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Dark background
        padding: 20,
        direction: 'rtl', // RTL support
    },
    text: {
        color: '#ffffff', // White text for dark theme
        fontSize: 20,
    },
});

export default ChatScreen;