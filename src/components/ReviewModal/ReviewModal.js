import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useComments from '../../hooks/useComments/useComments';
import styles from './ReviewModal.style';

export default function ReviewModal({movieId}) {
  const [reviewsVisible, setReviewsVisible] = useState(false);

  const [userComment, setUserComment] = useState('');

  const {commentData, commentLoading, commentError} = useComments(movieId);

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    setCommentList(commentData);
  }, [commentData]);

  function handleReviewsVisible() {
    setReviewsVisible(!reviewsVisible);
  }

  function handleAddComment(commentText) {
    const newCommentData = [
      ...commentList,
      {
        id: Math.random(),
        movieId: movieId,
        comment: commentText,
      },
    ];
    setCommentList(newCommentData);
  }

  if (commentError) {
    Alert.alert('An error occurred when comments loading');
  }

  const renderComments = item => (
    <View style={styles.commentView}>
      <Text style={styles.commentText}>{item.comment}</Text>
    </View>
  );

  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.reviewsButton,
          backgroundColor: reviewsVisible ? '#adaff2' : 'white',
        }}
        onPress={handleReviewsVisible}>
        <Text style={styles.reviewsButtonText}>
          <Icon name="comment-text-multiple" size={20}></Icon> See Reviews
        </Text>
      </TouchableOpacity>

      {reviewsVisible && (
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Write Your Review Here..."
              onChangeText={setUserComment}
              value={userComment}
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => handleAddComment(userComment)}>
              <Icon
                name="arrow-right-bold-box"
                size={40}
                style={styles.addIcon}></Icon>
            </TouchableOpacity>
          </View>
          {commentLoading && <ActivityIndicator size="large" />}
          {commentList.length == 0 ? (
            <View style={styles.noCommentView}>
              <Text style={styles.noCommentText}>
                No Comments Yet, Be the First to Comment
              </Text>
            </View>
          ) : null}
          {commentList.map(item => renderComments(item))}
        </View>
      )}
    </View>
  );
}
