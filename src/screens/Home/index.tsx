import React from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { styles } from "./style";
import { mangas } from "../../Mock/Data";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons
            name="menu-outline"
            size={24}
            color="white"
            style={styles.icone}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>TOP Mangás</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons
              name="globe-outline"
              size={24}
              color="white"
              style={styles.icone}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="search"
              size={24}
              color="white"
              style={styles.icone}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="pricetag-outline"
              size={24}
              color="white"
              style={styles.icone}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={mangas}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <MangaCard
              title={item.title}
              chapter={item.chapter}
              image={item.image}
            />
          </View>
        )}
      />
    </View>
  );
};

interface PropsMangaCard {
  title: string;
  chapter: string;
  image: ImageSourcePropType;
}

const MangaCard = ({ title, chapter, image }: PropsMangaCard) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.chapter}>{chapter}</Text>
    </TouchableOpacity>
  );
};
