import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ReactNode} from 'react';
import {movie} from './data';
import {CARD_SIZE} from '../enums/size';

export interface NavigationScreenProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

export type MovieBackgroundProps = {
  children: ReactNode;
};

export type HeadingProps = {
  title: string;
};

export type Heading2Props = {
  title: string;
  title2: string;
  style?: any;
};

export type InputProps = {
  placeHolder: string;
  isSecure?: boolean;
  value?: string;
  onChange?: (value: string) => void;

  IconRight?: ReactNode;
  IconLeft?: ReactNode;
};

export type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export type HeaderProps = {
  title: string;
  onPress?: () => void;
};

export type CardMovieProps = movie & {
  size?: CARD_SIZE;
  onPress: () => void;
};

export type SelectedDateProps = {
  selectedDay: string | null;
  setSelectedDay: (date: string) => void;
};

export type SelectedTimeProps = {
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
};
