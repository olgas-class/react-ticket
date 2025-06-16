const Alert = ({ type = "success", message = "Tutt ok" }) => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};

export default Alert;
