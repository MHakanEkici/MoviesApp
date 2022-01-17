import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  reviewsButton: {
    alignItems: 'center',
    marginTop: 50,
    padding: spacing.small,
    borderRadius: 15,
    marginHorizontal: 80,
  },
  reviewsButtonText: {
    color: colors.themeColor,
    fontWeight: 'bold',
    fontSize: fontSizes.big,
  },
  inputContainer: {
    marginTop: spacing.big,
    flexDirection: 'row',
  },
  input: {
    padding: spacing.tiny,
    backgroundColor: colors.borderColor,
    fontSize: fontSizes.normal,
    borderRadius: 15,
    width: Dimensions.get('window').width / 1.2,
  },
  buttonContainer: {
    marginLeft: spacing.micro,
  },
  addIcon: {
    color: colors.textColor,
  },
  commentText: {
    fontSize: fontSizes.normal,
    color: colors.textColor,
    fontStyle: 'italic',
  },
  commentView: {
    marginTop: spacing.big,
    padding: spacing.normal,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderBottomWidth: 4,
  },
  noCommentView: {
    marginTop: spacing.large,
  },
  noCommentText: {
    fontSize: fontSizes.big,
    color: colors.textColor,
    fontWeight: 'bold',
  },
});
