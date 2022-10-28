import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import styles from "./AddUser.module.css";
import { useState, Fragment } from "react";
const AddUser = (props) => {
  const [Username, SetUsername] = useState("");
  const [Age, SetAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (Username.trim().length === 0 || Age.trim().length === 0) {
      setError({
        title: "Invalid Details !",
        message: "Please enter non-zero Value",
      });
      return;
    }
    if (+Age < 1 ) {
      setError({
        title: "Incorrect Details !",
        message: "Please enter correct Age",
      });
      return;
    }
    props.onAddData(Username, Age);

    SetUsername("");
    SetAge("");
  };
  const usernameHandler = (event) => {
    SetUsername(event.target.value);
  };
  const ageHandler = (event) => {
    SetAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username" type="text">
            USERNAME
          </label>
          <input id="username" value={Username} onChange={usernameHandler} />
          <label htmlFor="age" type="number">
            AGE
          </label>
          <input id="age"  type="number" value={Age} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};
export default AddUser;
