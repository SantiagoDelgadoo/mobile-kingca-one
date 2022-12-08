import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import commentAction from "../redux/actions/commentAction";
import { useDispatch, useSelector } from "react-redux";
export default function Comments(props) {
  let [update, setUpdate] = useState(false);
  let { event, comment} = props;
  const dispatch = useDispatch();
  let { token,id } = useSelector((store) => store.userReducer);
  const { deleteComment } = commentAction;
  let [checkEdit, setcheckEdit] = useState(false);
  let date = Date.now();
  const commentss = useRef();
  const form = useRef();
  let editBotton = () =>{
    setcheckEdit(!checkEdit);
  }
  let userCheck =false
  if(id===comment.userId._id){
    userCheck=true
  }
  else{
    userCheck=false
  }
  const Delete = () => {
        dispatch(deleteComment({ id: comment._id, token: token }));
        setUpdate(!update)
  }
  let edit = (data) => {
    data.preventDefault();
    let editComment = {
      token: token,
      id:comment._id,
      data: {
        comment: commentss.current.value,
        date: date,
        showId: event._id,
      },
    };
    dispatch(commentAction.editComment(editComment));
    setUpdate(!update)
    form.current.reset();
  };

  return (
    <View style={styles.renglonGrande}>
         <View style={styles.renglonComment}>
         <Image
          style={styles.cardImg}
          source={{ uri: comment.userId.photo }}
          key={event.id}
        />
      <View style={styles.comment2}>
        <View style={styles.textComment}>
          <Text style={styles.textComment}>
            <Text style={styles.nombreComment}>{comment.userId.name}:</Text>{" "}
            {comment.comment}
          </Text>
        </View>
 {/*        {userCheck?(
          <View className="botonesEditar">
            <img
              src="https://cdn-icons-png.flaticon.com/128/860/860814.png"
              onClick={editBotton}
              alt="editar"
              className="imgeditar"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
              onClick={Delete}
              alt="eliminar"
              className="imgeditar"
            />
        </View>
        ) : null
        } */}
      </View>
    </View>
{/*     {checkEdit ? (
          <form ref={form} className="formCommentEdit2">
            <label className="labelEditComment2">
              <textarea
                ref={commentss}
                className="inputComment2"
                type="text"
                placeholder="Enter your comment"
              />
            </label>
            <button onClick={edit} className="botonSubmitEditHotel2">
              edit
            </button>
          </form>
        ) : null} */}
    </View>
  );
}
const styles = StyleSheet.create({
  renglonGrande:{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  renglonComment:{
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
    cardImg: {
    width: 40,
    height:40,
    resizeMode: "cover",
    borderRadius:500,
  },
  comment2:{
    width: "80%",
    backgroundColor: "#e7e7e7",
    padding: 16,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textComment:{
    display: "flex",
    justifyContent: "flex-start",
    width: "90%",
    flexWrap: "wrap",
    textAlign: "left", 
  },
  nombreComment:{
    fontWeight: "800",
  },
});