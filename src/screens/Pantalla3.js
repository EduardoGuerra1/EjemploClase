import { StyleSheet, Text, View, Image, FlatList, ScrollView } from "react-native";
import Card from "../components/card";

export default function Pantalla3() {

  const colores1 = [
    "#C6F91F", 
    "#4C2B36", 
    "#DDF45B"
  ];

  const colores2 = [
    "#F75C03",
    "#FFC4B2", 
    "#04A777", 
  ];

  const colores3 = [
    "#FAA613", 
    "#550527", 
    "#90EE90", 
  ];
  

  const DATA_1 = [
    {
      text: "Orochimaru",
      image: "https://th.bing.com/th/id/OIP.lAqW7NjWBruBJRY5xQFFrwAAAA?w=127&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      text: "Madara Uchiha",
      image: "https://th.bing.com/th/id/OIP.G4pUINcrS6IxwztrSksy_gHaGx?w=180&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      text: "Zabuza Momochi",
      image: "https://th.bing.com/th/id/OIP.jDtBlKnZcAfWQi6_bs9__wHaFj?w=263&h=197&c=7&r=0&o=5&pid=1.7"
    },
    {
      text: "Sasuke Uchiha",
      image: "https://th.bing.com/th/id/OIP.5NGcEmv9VitasgOlrjUfagHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      text: "Obito Uchiha",
      image: "https://th.bing.com/th/id/OIP.Ec7Y8PHHVM6n8mtnepa0hgHaEJ?w=272&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      text: "Kabuto Yakushi",
      image: "https://th.bing.com/th/id/OIP.q3iggDq_3vIbOUOkIGx63wHaFj?w=222&h=180&c=7&r=0&o=5&pid=1.7"
    }
  ];
  
  const DATA_2 = [
    {
      text: "OpenAI GPT",
      image: "https://th.bing.com/th/id/OIP.RB8awgdHAq5-HG3BB2ERTgAAAA?w=185&h=183&c=7&r=0&o=5&pid=1.7"
    },
    {
      text: "IBM Watson",
      image: "https://th.bing.com/th/id/OIP.0Vg7NjjAh8yEhyj5dmB9qQHaEK?w=327&h=184&c=7&r=0&o=5&pid=1.7"
    },
    {
      text: "Google DeepMind",
      image: "https://th.bing.com/th/id/OIP.lqcRH5FZNmIV18z0u9z-bgHaHa?w=150&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      text: "Amazon Alexa",
      image: "https://th.bing.com/th/id/OIP.8xDfEdx9fUpw8h1k9_zkVgAAAA?w=188&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      text: "Microsoft Cortana",
      image: "https://th.bing.com/th/id/OIP.sRlFzadIageDCE2Plvw-kQHaE7?w=259&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      text: "Apple Siri",
      image: "https://th.bing.com/th/id/OIP.Jb6QrzORmf6btX-geEv0WAHaE7?w=246&h=180&c=7&r=0&o=5&pid=1.7"
    }
  ];
  
  const DATA_3 = [
    {
      text: "Google Chrome",
      image: "https://th.bing.com/th/id/OIP.KPAxr6ZnAGFYuKgr3T5JAwAAAA?rs=1&pid=ImgDetMain"
    },
    {
      text: "Mozilla Firefox",
      image: "https://th.bing.com/th/id/OIP.wvATbjZdVaUK6mxvM9od0AHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7"
    },
    {
      text: "Microsoft Edge",
      image: "https://static.vecteezy.com/system/resources/previews/021/514/918/original/microsoft-edge-browser-brand-logo-symbol-white-design-software-illustration-with-black-background-free-vector.jpg"
    },
    {
      text: "Safari",
      image: "https://th.bing.com/th/id/R.a71855f7fd49c5346b5d98ee2feb719e?rik=3GpVWUTP9NRj0w&pid=ImgRaw&r=0"
    },
    {
      text: "Opera",
      image: "https://www.liblogo.com/img-logo/op221f6b0-opera-logo-file-opera-2015-icon-svg-wikimedia-commons.png"
    },
    {
      text: "Brave",
      image: "https://th.bing.com/th/id/OIP.LSANoeTRb-es_rcd_f8yVgAAAA?rs=1&pid=ImgDetMain"
    }
  ];
  
  return (
    <ScrollView style={styles.container}>
      <>
        <View style={styles.section}>
          <Text style={styles.title}>Personajes de naruto</Text>
          <FlatList
            style={styles.cardFlatList}
            data={DATA_1}
            numColumns={3}
            columnWrapperStyle={styles.cardColumnWrapper}
            renderItem={({ item }) => (
              <Card
                card_text={item.text}
                card_image={item.image}
                card_color={colores1[Math.floor(Math.random() * colores1.length)]}
                style={styles.card}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>IA´S</Text>
          <FlatList
            style={styles.cardFlatList}
            data={DATA_2}
            numColumns={3}
            columnWrapperStyle={styles.cardColumnWrapper}
            renderItem={({ item }) => (
              <Card
                card_text={item.text}
                card_image={item.image}
                card_color={colores2[Math.floor(Math.random() * colores2.length)]}
                style={styles.card}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Navegadores web</Text>
          <FlatList
            style={styles.cardFlatList}
            data={DATA_3}
            numColumns={3}
            columnWrapperStyle={styles.cardColumnWrapper}
            renderItem={({ item }) => (
              <Card
                card_text={item.text}
                card_image={item.image}
                card_color={colores3[Math.floor(Math.random() * colores3.length)]}
                style={styles.card}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    backgroundColor: "gray",
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 15,
    color: "white",
    fontWeight: "500",
    marginBottom: 10,
  },
  cardFlatList: {
    width: "100%",
  },
  cardColumnWrapper: {
    justifyContent: "space-between",
  },
});