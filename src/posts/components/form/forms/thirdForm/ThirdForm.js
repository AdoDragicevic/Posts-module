import Textarea from "../../textarea/Textarea";
import Button from "../../../UI/button/Button";

function ThirdForm({ description, updateDescription, goBack, submit }) {

  return (
    <form onSubmit={submit}>
      <Textarea 
        name="description"
        value={description}
        onChange={updateDescription}
        isRequired 
      />
      <div onClick={goBack}>&#8592;</div>
      <Button type="submit" size="large" color="secondary">
        Submit
      </Button>
    </form>
  )
};

export default ThirdForm;