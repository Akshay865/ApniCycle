import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, value);
    // await AsyncStorage.setItem(key, "2704246d9708a5c028ccd954cb9abf12775cebc1");
  } catch (error) {}
};
export const getToken = async (login) => {
 //  await AsyncStorage.setItem(PhoneNumber, "2704246d9708a5c028ccd954cb9abf12775cebc1");
  const value = await AsyncStorage.getItem(login)
  return value;
  if (value !== null) {
    console.log("value",value);
    return value
  }
};
export const clearToken = async () => {
  //  await AsyncStorage.setItem(PhoneNumber, "2704246d9708a5c028ccd954cb9abf12775cebc1");
   await AsyncStorage.clear()

 };
