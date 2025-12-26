// propTypes = a mechanism that ensires that the passed value
//             is of the correct datatype.
//             age: PropTypes.number

// defaultProps = default values for props in case they are not
//                passed from the parent component
//                const { name = "Guest", age = 0, isStudent = false } = props;
//                or use default parameters directly in the function signiture

import PropTypes from 'prop-types'

function Student(props){
    const { name = "Guest", age = 0, isStudent = false } = props;

    return(
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
export default Student