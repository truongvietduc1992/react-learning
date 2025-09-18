
import './style.css';
const MyComponent = () => {
    return (
        <>
            <div> Truong Viet</div>
            <div className='child'
                style={
                    { borderRadius: "3000px" }
                }
            >child</div>
        </>

    );
}
export default MyComponent;