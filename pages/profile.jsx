import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function ProfileScreen({ user, setUser }) {
  const navigation = useNavigation();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(user?.profileImage || null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Please grant permission to access your photo library.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    setUser({ ...user, name, email, profileImage });
    Alert.alert('Profile Updated', 'Your profile info has been updated.');
    // Here you can also call backend API to update info
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive', 
          onPress: () => {
            // Clear user state and redirect to signup
            setUser(null);
            navigation.replace('Signup'); // navigate to Signup page
          } 
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={pickImage} style={styles.profilePicContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profilePic} />
          ) : (
            <View style={styles.profilePicPlaceholder}>
              <Ionicons name="person" size={50} color="#ddd" />
            </View>
          )}
          <View style={styles.editOverlay}>
            <Ionicons name="camera-outline" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Profile Info</Text>
      </View>

      <View style={styles.formCard}>
        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <Ionicons name="person-outline" size={20} color="#ff6347" style={styles.inputIcon} />
            <TextInput 
              style={styles.input} 
              value={name} 
              onChangeText={setName} 
              placeholder="Enter your name"
              placeholderTextColor="#888"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={20} color="#ff6347" style={styles.inputIcon} />
            <TextInput 
              style={styles.input} 
              value={email} 
              onChangeText={setEmail} 
              placeholder="Enter your email"
              keyboardType="email-address"
              placeholderTextColor="#888"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="#ff6347" style={styles.inputIcon} />
            <TextInput 
              style={styles.input} 
              value={password} 
              onChangeText={setPassword} 
              placeholder="Enter new password"
              secureTextEntry={!showPassword}
              placeholderTextColor="#888"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons 
                name={showPassword ? "eye-off-outline" : "eye-outline"} 
                size={20} 
                color="#ff6347" 
                style={styles.eyeIcon} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Ionicons name="save-outline" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
        <Ionicons name="trash-outline" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profilePicContainer: {
    position: 'relative',
    marginRight: 15,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#ff6347',
  },
  profilePicPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ff6347',
  },
  editOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#ff6347',
    borderRadius: 15,
    padding: 5,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 0,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
  deleteButton: {
    flexDirection: 'row',
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});