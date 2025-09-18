
import './style.css';
const MyComponent = () => {

    const vduc = [1, 2, 3];
    return (
        <>
            <div> {vduc}Truong Viet</div>
            <div className='child'
                style={
                    { borderRadius: "3000px" }
                }
            >child</div>
        </>

    );
}
export default MyComponent;