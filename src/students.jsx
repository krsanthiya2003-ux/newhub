import React from 'react'

const students = (props) => {
    return (
        <div>
            {
                props.my.map((student, index) => (
                    <div key={index}>
                        <p>Name:{student.name}</p>
                        <p>Age:{student.age}</p>
                        <p>Address:{student.address}</p>
                        <hr/>
                    </div>
                ))}
        </div>
    )
}

export default students