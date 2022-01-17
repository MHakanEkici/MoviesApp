import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSizes from '../../../styles/fontSizes';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    margin: spacing.big,
    padding: spacing.big,
    borderWidth: 3,
    borderColor: colors.borderColor,
    borderRadius: 30,
    backgroundColor: colors.themeColor,
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
    marginRight: spacing.normal,
  },
  genreView: {
    flexDirection: 'row',
    marginTop: spacing.micro,
  },
  movieName: {
    color: colors.textColor,
    fontSize: fontSizes.huge,
    fontWeight: 'bold',
  },
  movieRate: {
    color: '#f1c00e',
    fontSize: fontSizes.huge,
    fontWeight: 'bold',
  },
  movieGenre: {
    color: colors.textColor,
    fontStyle: 'italic',
    fontSize: fontSizes.small,
  },
  movieBrief: {
    color: colors.textColor,
    fontSize: fontSizes.normal,
    marginTop: spacing.small,
  },
});
