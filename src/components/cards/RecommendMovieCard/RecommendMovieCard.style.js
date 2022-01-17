import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    padding: spacing.small,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 20,
    marginTop: spacing.normal,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genreCard: {
    padding: spacing.tiny,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginRight: spacing.small,
  },
  genreView: {
    flexDirection: 'row',
    marginTop: spacing.micro,
  },
  movieName: {
    color: colors.textColor,
    fontSize: fontSizes.big,
    fontWeight: 'bold',
  },
  movieRate: {
    color: '#f1c00e',
    fontSize: fontSizes.normal,
    fontWeight: 'bold',
  },
  movieGenre: {
    color: colors.textColor,
    fontStyle: 'italic',
    fontSize: fontSizes.small,
  },
  recommendText: {
    marginTop: spacing.big,
    fontSize: fontSizes.title,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});
