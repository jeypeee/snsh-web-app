//import "./App.css";

function PaymentForm() {
  return (
    <form>
      <label htmlFor="grade">Grade</label>
      <select name="grade" id="grade">
        <option value="grade-7">Grade 7</option>
        <option value="grade-8">Grade 8</option>
        <option value="grade-9">Grade 9</option>
        <option value="grade-10">Grade 10</option>
      </select>

      <label htmlFor="section">Section</label>
      <select name="section" id="section">
        <option value="section-a">Section A</option>
        <option value="section-a">Section B</option>
        <option value="section-a">Section C</option>
      </select>

      <label htmlFor="name">Name</label>
      <input type="text" />

      <label>
        Payment Amount:
        <input type="text" />
      </label>
      <label>
        Payment Date:
        <input type="text" />
      </label>
    </form>
  );
}

export default PaymentForm;
