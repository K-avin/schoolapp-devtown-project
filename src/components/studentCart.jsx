import React from 'react'

const StudentCart = ({ data }) => {
    const bgColor = {
        backgroundColor: data.color,
    };
    return (
        <div key={data.id} class="col-md-3 mb-5">
            <div class="card text-center">
                <div class="card-body pt-5 pb-5" style={bgColor}>
                    <h5 class="card-title">{data.name}</h5>
                    <p class="card-text">Class <b>{data.class}</b></p>
                </div>
            </div>
        </div>
    )
}

export default StudentCart