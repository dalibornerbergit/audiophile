import { useHistory } from "react-router-dom";

const GoBack = () => {
  const history = useHistory();

  return (
    <p
      style={{ cursor: "pointer", marginBottom: "2rem" }}
      onClick={() => history.goBack()}
    >
      Go back
    </p>
  );
};

export default GoBack;
