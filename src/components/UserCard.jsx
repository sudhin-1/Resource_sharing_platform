import React from 'react'

function UserCard() {
  return (
    <>
        <div className="card shadow-sm border-0 rounded-4 mt-3" style={{ width: "18rem" }}>
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text text-muted">{text}</p>
            <button className="btn btn-primary rounded-pill px-3">
              {btnText}
            </button>
          </div>
        </div>
    </>
  )
}

export default UserCard