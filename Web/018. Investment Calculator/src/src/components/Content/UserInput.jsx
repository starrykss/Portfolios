export default function UserInput({ onChange, userInput }) {
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>INITIAL INVESTMENT</label>
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
              required
            />
          </p>
          <p>
            <label>ANNUAL INVESTMENT</label>
            <input
              type="number"
              value={userInput.annualInvestment}
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
              required
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>EXPECTED RETURN</label>
            <input
              type="number"
              value={userInput.expectedReturn}
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
              required
            />
          </p>
          <p>
            <label>DURATION</label>
            <input
              type="number"
              value={userInput.duration}
              onChange={(event) => onChange("duration", event.target.value)}
              required
            />
          </p>
        </div>
      </div>
    </>
  );
}
