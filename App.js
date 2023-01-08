import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);
  const [courseGoals, setCourseGoals] = useState([]);

  //add goal
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  }
  //delete goal
  function deleteGoalHanlder(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  //modal visibility
  function startAddGoalHanlder() {
    setModalVisible(true);
  }
  //end add goal
  function endAddGoalHandler() {
    setModalVisible(false);
  }
  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalHanlder}
          color="#a065ec"
        />
        <GoalInput
          visible={modalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={(item, index) => {
              return item.id;
            }}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  onDeleteItem={deleteGoalHanlder}
                  id={itemData.item.id}
                  text={itemData.item.text}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,

    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
