import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    marginHorizontal: spacing.big,
    marginBottom: spacing.huge,
    padding: spacing.big,
    borderWidth: 3,
    borderColor: colors.borderColor,
    borderRadius: 40,
    backgroundColor: colors.themeColor,
  },
  genreCard: {
    padding: spacing.tiny,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.borderColor,
    marginTop: spacing.normal,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  movieGenre: {
    color: colors.textColor,
    fontStyle: 'italic',
    fontSize: fontSizes.normal,
  },
  filterButton: {
    alignItems: 'center',
    borderColor: colors.borderColor,
    borderWidth: 2,
    margin: spacing.large,
    padding: spacing.small,
    borderRadius: 15,
    backgroundColor: colors.themeColor,
  },
  filterButtonText: {
    color: colors.textColor,
    fontWeight: 'bold',
    fontSize: fontSizes.big,
  },
  modal: {
    justifyContent: 'flex-start',
  },
});
