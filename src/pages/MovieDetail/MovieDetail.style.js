import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    padding: spacing.large,
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
  castCard: {
    padding: spacing.tiny,
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
  },
  genreView: {
    flexDirection: 'row',
    marginTop: spacing.small,
  },
  castList: {
    marginTop: spacing.micro,
    flexDirection: 'row',
  },
  directorView: {
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  movieName: {
    color: colors.textColor,
    fontSize: fontSizes.bigTitle,
    fontWeight: 'bold',
  },
  movieRate: {
    color: '#f1c00e',
    fontSize: fontSizes.title,
    fontWeight: 'bold',
  },
  movieGenre: {
    color: colors.textColor,
    fontStyle: 'italic',
    fontSize: fontSizes.normal,
  },
  movieBrief: {
    color: colors.textColor,
    fontSize: fontSizes.normal,
    marginTop: spacing.small,
  },

  movieDirector: {
    color: colors.textColor,
    fontStyle: 'italic',
    fontSize: fontSizes.huge,
  },
  movieCast: {
    color: colors.textColor,
    fontSize: fontSizes.big,
    marginTop: spacing.micro,
  },
  title: {
    color: colors.textColor,
    fontSize: fontSizes.title,
    marginTop: spacing.big,
    fontWeight: 'bold',
  },
});
