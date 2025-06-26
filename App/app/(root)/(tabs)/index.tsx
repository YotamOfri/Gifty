import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Check, ArrowLeft } from "lucide-react-native";
import product1 from "@/assets/images/product1.jpg";
import product2 from "@/assets/images/product2.png";
import product3 from "@/assets/images/product3.jpg";
import product4 from "@/assets/images/product4.jpeg";
import product5 from "@/assets/images/product5.jpeg";

const { width } = Dimensions.get("window");

// Mock data for the feed
const feedData = [
  {
    id: "1",
    username: "gift_guru",
    userAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    location: "Gift Shop, Tel Aviv",
    image: product1,
    likes: 324,
    caption: "Add this item to his wishlist",
    comments: 12,
    timeAgo: "1 hour ago",
    isLiked: false,
    isSaved: false,
  },
  {
    id: "2",
    username: "techie_gifts",
    userAvatar: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=150&h=150&fit=crop&crop=face",
    location: "Gadget Store, Jerusalem",
    image: product5, // Headphones
    likes: 210,
    caption: "Add this item to his wishlist",
    comments: 8,
    timeAgo: "2 hours ago",
    isLiked: true,
    isSaved: false,
  },
  {
    id: "3",
    username: "flowerpower",
    userAvatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
    location: "Bloom Florist, Haifa",
    image: product2, // Flowers
    likes: 412,
    caption: "Add this item to his wishlist",
    comments: 23,
    timeAgo: "3 hours ago",
    isLiked: false,
    isSaved: true,
  },
  {
    id: "4",
    username: "perfume_lover",
    userAvatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=face",
    location: "Fragrance Boutique, Eilat",
    image: product3, // Perfume
    likes: 178,
    caption: "Add this item to his wishlist",
    comments: 5,
    timeAgo: "5 hours ago",
    isLiked: false,
    isSaved: false,
  },
  {
    id: "5",
    username: "toybox_kids",
    userAvatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
    location: "Toy Store, Netanya",
    image: product4, // Toys
    likes: 295,
    caption: "Add this item to his wishlist",
    comments: 14,
    timeAgo: "1 day ago",
    isLiked: false,
    isSaved: false,
  },
];

const storiesData = [
  { id: "1", username: "You", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face", hasStory: false },
  { id: "2", username: "techie_gifts", avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face", hasStory: true },
  { id: "3", username: "flowerpower", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", hasStory: true },
  { id: "4", username: "perfume_lover", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", hasStory: true },
  { id: "5", username: "toybox_kids", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", hasStory: true },
  { id: "6", username: "gift_guru", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face", hasStory: true },
];

// Mock wishlists for users (keyed by username)
const userWishlists = {
  "gift_guru": [
    { id: "w1", image: require("@/assets/images/product1.jpg") },
    { id: "w2", image: require("@/assets/images/product2.png") },
    { id: "w3", image: require("@/assets/images/product3.jpg") },
    { id: "w4", image: require("@/assets/images/product4.jpeg") },
    { id: "w5", image: require("@/assets/images/product5.jpeg") },
  ],
  "sarah_photography": [
    { id: "w1", image: require("@/assets/images/product2.png") },
    { id: "w2", image: require("@/assets/images/product3.jpg") },
    { id: "w3", image: require("@/assets/images/product1.jpg") },
  ],
  "techie_gifts": [
    { id: "w1", image: require("@/assets/images/product2.png") },
    { id: "w2", image: require("@/assets/images/product3.jpg") },
    { id: "w3", image: require("@/assets/images/product1.jpg") },
  ],
  "flowerpower": [  
    { id: "w1", image: require("@/assets/images/product2.png") },
    { id: "w2", image: require("@/assets/images/product3.jpg") },
    { id: "w3", image: require("@/assets/images/product1.jpg") },
  ],
  "perfume_lover": [
    { id: "w1", image: require("@/assets/images/product2.png") },
    { id: "w2", image: require("@/assets/images/product3.jpg") },
  ],
  "toybox_kids": [
    { id: "w1", image: require("@/assets/images/product2.png") },
    { id: "w2", image: require("@/assets/images/product3.jpg") },
  ],
  // Add more users as needed
};

// Add a type for story user
interface StoryUser {
  id: string;
  username: string;
  avatar: string;
  hasStory: boolean;
}

const FeedItem = ({ item }: { item: typeof feedData[0] }) => {
  const [isLiked, setIsLiked] = React.useState(item.isLiked);
  const [isSaved, setIsSaved] = React.useState(item.isSaved);

  return (
    <View className="bg-white mb-4">
      {/* Header */}
      <View className="flex-row items-center justify-between p-3">
        <View className="flex-row items-center">
          <Image
            source={{ uri: item.userAvatar }}
            className="w-8 h-8 rounded-full mr-3"
          />
          <View>
            <Text className="font-semibold text-sm">{item.username}</Text>
            <Text className="text-gray-500 text-xs">{item.location}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <MoreHorizontal size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image
        source={item.image}
        className="w-full h-96"
        resizeMode="cover"
      />

      {/* Wishlist and Bought Icon Buttons */}
      <View className="flex-row items-center justify-start px-3 mt-3 mb-2 gap-8">
        <TouchableOpacity
          className="items-center"
          activeOpacity={0.7}
          onPress={() => setIsLiked(!isLiked)}
        >
          <Heart size={28} color={isLiked ? '#3b82f6' : '#6b7280'} fill={isLiked ? '#3b82f6' : 'none'} />
          <Text className={`text-xs mt-1 ${isLiked ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          activeOpacity={0.7}
          onPress={() => setIsSaved(!isSaved)}
        >
          <Check size={28} color={isSaved ? '#14b8a6' : '#6b7280'} />
          <Text className={`text-xs mt-1 ${isSaved ? 'text-teal-600 font-semibold' : 'text-gray-500'}`}>Bought</Text>
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <Text className="font-semibold text-sm mb-1 px-3">{item.likes.toLocaleString()} people wants this item</Text>

      {/* Caption */}
      <View className="flex-row mb-1 px-3">
        <Text className="font-semibold text-sm mr-2">{item.username}</Text>
        <Text className="text-sm flex-1">{item.caption}</Text>
      </View>

      {/* Time */}
      <Text className="text-gray-400 text-xs px-3">{item.timeAgo}</Text>
    </View>
  );
};

const WishlistGrid = ({ user, onBack }: { user: StoryUser, onBack: () => void }) => {
  const wishlist = userWishlists[user.username as keyof typeof userWishlists] || [];
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header with back button */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={onBack} className="mr-4">
          <ArrowLeft size={28} color="#222" />
        </TouchableOpacity>
        <Image source={{ uri: user.avatar }} className="w-8 h-8 rounded-full mr-2" />
        <Text className="text-lg font-bold">{user.username}'s Wishlist</Text>
      </View>
      <FlatList
        data={wishlist}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 12 }}
        columnWrapperStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <View className="bg-white rounded-2xl mb-4 flex-1 overflow-hidden" style={{ aspectRatio: 0.8, marginBottom: 12 }}>
            <Image source={item.image} style={{ width: '100%', height: '100%', borderRadius: 18 }} resizeMode="cover" />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const StoryItem = ({ item, onPress }: { item: typeof storiesData[0], onPress: () => void }) => {
  return (
    <TouchableOpacity className="items-center mr-4" onPress={onPress}>
      <View className={`w-16 h-16 rounded-full p-0.5 ${item.hasStory ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gray-300'}`}>
        <Image
          source={{ uri: item.avatar }}
          className="w-full h-full rounded-full"
        />
      </View>
      <Text className="text-xs mt-1 text-center" numberOfLines={1}>
        {item.username}
      </Text>
    </TouchableOpacity>
  );
};

const Feed = () => {
  const [selectedUser, setSelectedUser] = React.useState<StoryUser | null>(null);

  if (selectedUser) {
    return <WishlistGrid user={selectedUser} onBack={() => setSelectedUser(null)} />;
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white border-b border-gray-200 px-4 py-3">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold" style={{ fontFamily: 'Rubik-Bold' }}>
            Gifty
          </Text>
          <View className="flex-row items-center space-x-4">
            <TouchableOpacity>
              <Text className="text-2xl">+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-2xl">💬</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FlatList
        data={feedData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeedItem item={item} />}
        ListHeaderComponent={
          <View className="bg-white border-b border-gray-200 py-3">
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
              {storiesData.map((story) => (
                <StoryItem key={story.id} item={story} onPress={() => setSelectedUser(story)} />
              ))}
            </ScrollView>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Feed;