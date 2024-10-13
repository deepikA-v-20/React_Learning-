function NewApp() {
    const onClickCaptureHandler = () => {
    console.log("onClickCapture!");
    };
    return (
    <div className="App">
    <h1> Welcome capture</h1>
    <button onClickCapture={onClickCaptureHandler}>
    click Me!
    </button>
    </div>
    );
    }
    export default NewApp;