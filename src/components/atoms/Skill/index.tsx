import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../../styles/theme';

interface SkillProps {
  name: string;
  level?: number;
}

const Skill: FC<SkillProps> = ({ name }) => {
  return (
    <View style={styles.skillBox}>
      <View style={styles.skillLevel} />
      <Text style={styles.skillText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skillBox: {
    backgroundColor: theme.colors.black400,
    marginBottom: 16,
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    height: 48
  },
  skillLevel: {
    width: 8,
    height: 8,
    backgroundColor: theme.colors.blue,
    marginHorizontal: 16,
    borderRadius: 4
  },
  skillText: {
    color: theme.colors.white,
    fontSize: 16
  }
});

export default Skill;
