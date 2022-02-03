const Form = () => {
  return (
    <div className="form-container">
      <h1>Component form</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <form>
        <input id="firstname" type="text" name="firstname" value="" />
      </form>
    </div>
  );
};

export default Form;
