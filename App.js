import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text, setText] = useState("")

  const cursos = [{ curso: "JS" }, { curso: "JS" }, { curso: "JS" }, { curso: "JS" }, { curso: "JS" }, { curso: "JS" }, { curso: "JS" }, { curso: "JS" }, { curso: "JS" }, { curso: "JS" }, { curso: "JS" }, { curso: "JS" }, { curso: "JS" },]
  const cursos_ = [{ title: "C", data: ["C", "C++", "C#"] }, { title: "J", data: ["JS", "Java"] },]

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder='Escreva seu nome aqui'
          onChangeText={(e) => setText(e)}

        />
      </View>

      <View style={styles.block}>
        <Text style={styles.nameText}>{text}</Text>
      </View>


      {/* <View>
        <FlatList
          data={cursos}
          renderItem={({ item }) => <Text style={{ color: "#1f1f1f" }}>{item.curso}</Text>}

        >
        </FlatList>
      </View> */}

      <View style={{
        flex: 1,
        paddingTop: 22,
      }}>

        <SectionList
          sections={cursos_}
          renderItem={({ item }) => <Text style={{ color: "#1f1f1f" }}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={item => `basicListEntry-${item}`}
        >

        </SectionList>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100

  },

  block: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    height: 80,
    width: 200
  },

  nameText: {
    color: "#ffffff"
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
