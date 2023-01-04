import React from "react";
import "./Card.css";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { HiDotsHorizontal } from "react-icons/hi";
import { deleteOne } from "../../app/features/memorie/postSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ post, userId }) => {
  const dispatch = useDispatch();

  return (
    <div class="card h-100">
      {userId === post.user && (
        <div className="d-flex justify-content-end">
          {userId === post.user && <Link className="edit-link" to={`/${post._id}`}><HiDotsHorizontal className="card-icon"  /></Link>}
        </div>
      )}
      <img src={post.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.body.substring(0, 20)}</p>
        <p>{moment(post.createdAt).fromNow()}</p>
      </div>

      <div class="row" style={{ padding: "10px" }}>
        <div class="col d-flex justify-content-start">
         <AiFillLike  className="card-icon" /> like  
        </div>
        {userId === post.user && (
          <>
            <div
              class="col d-flex justify-content-end"
              onClick={() => dispatch(deleteOne(post._id))}
            >
              <MdDelete className="card-icon" /> Delete  
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
