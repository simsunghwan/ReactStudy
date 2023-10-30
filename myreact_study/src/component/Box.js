function Box(props) {
  return (
    <div className="box" style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
}

Box.defaultProps = {
  name: '기본상자',
  color: 'white',
};

export default Box;
