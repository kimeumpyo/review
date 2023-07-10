 import PropTypes from  'prop-types';
// const MyComponent = (props) => {
//     const {name, age} = props;
//   return (
//     <>
//       <div>나의 컴포넌트!</div>
//       <div>이름 : {name}</div>
//       <div>나이 : {age}</div>
//     </>
//   );
// };

// export default MyComponent;

const MyComponent = ({name, age, children}) => {
    // const {name, age, children} = props;
  return (
    <>
      <div>나의 컴포넌트!</div>
      <div>이름 : {name}</div>
      <div>나이 : {age}</div>
      <div>내용 : {children}</div>
    </>
  );
};

MyComponent.defaultProps = {
  name : "기본 이름", 
}

MyComponent.propTypes = {
  name : PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
}

export default MyComponent;
