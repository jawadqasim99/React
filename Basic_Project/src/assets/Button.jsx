export default function Button(){
    function doSomething(){
        console.log("Button Click listner event!!!");
    }
    return(
        <div>
            {/* <button onClick={doSomething} >Click me!</button> */}
            <p onMouseOver={doSomething}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis autem itaque reiciendis ut numquam saepe inventore debitis, rem quod a! Blanditiis aperiam ad dicta eveniet, perferendis amet fugit quod odio?</p>
        </div>
    );
}