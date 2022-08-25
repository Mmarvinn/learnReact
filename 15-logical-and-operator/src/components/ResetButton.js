const buttonStyle = { backgroundColor: 'lightgreen' };

function ResetButton({ resetCount }) {
  return (
    <div>
      <button style={buttonStyle} onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
