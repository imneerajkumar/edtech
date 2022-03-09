import React from 'react';
import { Modal } from 'react-bootstrap';
import { Avatar } from '@mui/material';
import './Feedback.css'

function FeedbackModal({ show, handleClose, data }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby='contained-modal-title-vcenter '
      centered
    >
      <Modal.Body>
        <div className="blog-details-comment">
          <div className="comment-wrapper" style={{marginTop: "0px"}}>
            <h3 className="title">
              {data.length!==0 && "Feedbacks"}
              {data.length===0 && "No Feedbacks Available"}
            </h3>
            {data.length!==0 && data.map((item, index) => 
              <ul className="comment-items" key={index}>
                <li>
                  <div className="single-comment">
                    <div className="comment-author">
                      <div className="author-thumb">
                      <Avatar
                        sx={{
                          bgcolor: "#309255",
                          width: "60px",
                          height: "60px",
                          fontSize: "1.5rem",
                        }}
                      >{item.name.slice(0, 1)}
                      </Avatar>
                      </div>
                      <div className="author-content">
                        <h4 className="name">{item.name}</h4>
                      </div>
                    </div>
                    <p>{item.feedback}</p>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default FeedbackModal;
      