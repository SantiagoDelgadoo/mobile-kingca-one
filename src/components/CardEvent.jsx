import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Comments from "./Comments";
import commentAction from "../redux/actions/commentAction";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import commentReducer from "../redux/reducers/commentReducer";
/* import NewComment from "./NewComment"; */

export default function CardEvent(props) {
  let { event } = props;
  let [seeComment, setSeeComment] = useState(false);
  const dispatch = useDispatch();
  let [comments1, setComments] = useState([]);
  const { getComments } = commentAction;
  let commentCheck = false;
 /*  let update = useSelector((store) => store.commentReducer.update); */
  let change = async () => {
    setSeeComment(!seeComment);
    const capurarComments = await dispatch(getComments(event._id));
    setComments(capurarComments.payload.listComment.arrayComment);
  };
/*   useEffect(() => {
    async function peticionComment() {
      const capurarComments = await dispatch(getComments(event._id));
      setComments(capurarComments.payload.listComment.arrayComment);
    }
    peticionComment();
  }, [update]); */
  const filteredComments = comments1.filter(
    (comment) => comment.showId === event._id
  );
  if (filteredComments.length !== 0) {
    commentCheck = true;
  } else {
    commentCheck = false;
  }
  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.containerTotal}>
        <Image
          style={styles.cardImg}
          source={{ uri: event.photo }}
          key={event.id}
        />
        <View style={styles.containerDescription}>
          <Text style={styles.textTitulo}>{event.name}</Text>
          <View style={styles.containercitoDescr}>
            <Text style={styles.textDescription}>
              <Text style={styles.textCapacity}>Date: </Text>
              {event.date.slice(0, 10)}
            </Text>
            <Text style={styles.textDescription}>
              <Text style={styles.textCapacity}>Capacity: </Text>
              {event.price}
            </Text>
          </View>
          <Text style={styles.textDescription2}>{event.description}</Text>
          <Pressable
            style={styles.buttonDetailsCities}
            onPress={change}
            key={event.id}
          >
            <Text style={styles.tituloDetails} key={event.id}>
              Comment
            </Text>
          </Pressable>
        </View>
      </View>
      {seeComment ? (
        <View style={styles.containerComment}>
{/*           <View style={styles.containerCreateComment}>
             <NewComment event={event._id}></NewComment> 
          </View> */}
          {commentCheck ? (
            <View style={styles.containerCommentaries}>
              <ScrollView style={styles.comment}>
                {filteredComments?.map((comment) => (
                  <Comments comment={comment} event={event}></Comments>
                ))}
              </ScrollView>
            </View>
          ) : null}
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    width: "100%",
    display: "flex",
    marginBottom: 50,
    marginLeft: 30,
  },
  comment: {
    width: "100%",
    height:300,
    display: "flex",
    padding: 2,
  },
  containerComment: {
    display: "flex",
    justifContent: "space-around",
    alignItems: "center",
    width: "90%",
    borderRadius: 30,
    backgroundColor: "#e0e0e0",
  },
  containerCommentaries: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifContent: "space-around",
  },
  containerCreateComment: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifContent: "center",
    backgroundColor: "#bebebe4f",
    borderRadius: 30,
  },
  tituloDetails: {
    color: "white",
    textDecoration: "none",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  textDescription2: {
    width: "80%",
    height: "40%",
  },
  containercitoDescr: {
    display: "flex",
    width: "90%",
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonDetailsCities: {
    width: "100%",
    height: 50,
    backgroundColor: "#ea5318",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  containerDescription: {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  textCapacity: {
    fontWeight: "800",
  },
  textTitulo: {
    height: "20%",
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "800",
  },
  textDescription: {
    marginBottom: 15,
  },
  cardImg: {
    width: "100%",
    resizeMode: "cover",
    height: "50%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  containerTotal: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    height: 400,
    backgroundColor: "white",
    marginBottom: 30,
    borderRadius: 30,
  },
  cardTextEvents: {
    width: "100%",
    height: "50%",
  },
});
