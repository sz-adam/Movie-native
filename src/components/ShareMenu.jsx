import { View, Share,TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";


const ShareMenu = ({dataDetails}) => {   

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
               `${dataDetails.Title}`,             
              
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      };

  return (
    <TouchableOpacity onPress={onShare} className="flex justify-center items-center my-2">
      <Icon name="share-social" color="white" size={30} />
    </TouchableOpacity>
  );
};

export default ShareMenu;
