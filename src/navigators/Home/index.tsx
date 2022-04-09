import React, { useState } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { Button, Input, ScreenBase, Skill } from '../../components';
import theme from '../../styles/theme';

const Home = () => {
  const [skills, setSkills] = useState([
    {
      name: 'React.JS',
      level: 5
    },
    {
      name: 'Next.JS',
      level: 4
    },
    {
      name: 'React Native',
      level: 3
    },
    {
      name: 'GitHub',
      level: 4
    },
    {
      name: 'GraphQL',
      level: 2
    },
    {
      name: 'Apollo',
      level: 2
    }
  ]);
  const [formData, setFormData] = useState<string>();

  const handleAddToSkill = () => {
    const findMySkillExists = skills?.find((skill) => skill.name === formData);

    if (formData && !findMySkillExists) {
      setSkills((oldState) => [
        ...oldState,
        {
          name: formData,
          level: 5
        }
      ]);
      setFormData('');
    }
  };

  return (
    <ScreenBase>
      <Text style={{ ...styles.title, marginBottom: 24 }}>
        Bem vindo, Fabio Silva
      </Text>
      <Input
        placeholder="Nova skill"
        value={formData}
        onChangeText={setFormData}
      />
      <Button label="Cadastrar" onPress={handleAddToSkill} />
      <Text style={{ ...styles.title, marginTop: 24, fontSize: 18 }}>
        Minhas Habilidades
      </Text>
      <Text style={styles.description}>
        {skills?.length} Habilidades cadastradas
      </Text>
      <FlatList
        data={skills}
        keyExtractor={(_, index) => `skill-item-${index}`}
        renderItem={({ item }) => <Skill name={item.name} level={item.level} />}
      />
    </ScreenBase>
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 12,
    color: theme.colors.grey,
    letterSpacing: 1,
    marginTop: 4,
    marginBottom: 32
  }
});

export default Home;
