const messageStyle = {
  textAlign: "center",
  fontSize: "1.8rem",
  width: "80%",
  margin: "2rem auto",
  fontWeight: "600",
};

function Message({ message }) {
  return (
    <p style={messageStyle}>
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
