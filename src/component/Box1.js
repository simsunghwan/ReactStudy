function Box1(props) {
  console.log(props.children);
  return (
    <>
      <div className="box" style={{ backgroundColor: props.color }}>
        {props.name}
      </div>
    </>
  );
}

Box1.defaultProps = {
  name: '기본상자',
  color: 'white',
};

export default Box1;
