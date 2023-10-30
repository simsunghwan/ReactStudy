import PropsTypes from 'prop-types';

export default function TestProps({first, second, third, fourth='미입력'}) {
    return (
        <>
            <p>첫 번째 Props: {first}</p>
            <p>두 번째 Props: {second}</p>
            <p>세 번째 Props: {third}</p>
            {fourth?<p>네 번째 Props: {fourth}</p>:null }
            {/* <p>세 번째 Props: {props.third?true:false}</p> */}
            <hr />
        </>
    );
}

TestProps.propTypes = {
    // first:PropsTypes.string, 
    // second:PropsTypes.string,
    first:PropsTypes.string.isRequired, // first라는 props값은 string이고 필수 props이다.
    second:PropsTypes.string.isRequired,
    third:PropsTypes.string.isRequired,
    // fourth:PropsTypes.string,
    
    fourth:PropsTypes.oneOf(['남', '여']),
    // third:PropsTypes.any,   // any 모든 타입
    // isRequired, 필수 설정일 경우 사용 
    // third:PropsTypes.bool,  // bool: true, false
}

TestProps.defaultProps={
    first:'영진',
    second:'영진 컴정',
    third:'영진 컴정 일본IT',
}

