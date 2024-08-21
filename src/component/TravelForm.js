import "./TravelForm.css";

export default function TravelForm() {
  return (
    <div className="container">
      <h1>Form input</h1>
      <form action="">
        <section class="names">
          <div>
            <br />
            <label for="">Full Name</label>
            <br />
            <input type="text" placeholder="FirstName LastName" />
          </div>
          <div>
            <br />
            <label for="">Email address</label>
            <br />
            <input type="email" />
          </div>
        </section>
        <div>
          <br />
          <label for="">Select Tour Package</label>
          <br />
          <select name="" id="">
            <option value="">GOA</option>
            <option value="">Doa</option>
          </select>
        </div>
        <section class="Date">
          <div>
            <br />
            <label for="">Arrival Date</label>
            <br />
            <input type="text" placeholder="m/d/y" />
          </div>
          <div>
            <br />
            <label for="">Number of persons</label>
            <br />
            <input type="text" />
          </div>
        </section>

        <br />
        <label for="">What would you want to avail?</label>
        <br />
        <div id="avail">
          <br />
          <label for="">Boarding</label> <input type="checkbox" />
          <br />
          <br />
          <label for="">Fooding</label> <input type="checkbox" />
          <br />
          <br />
          <label for="">Sight seeing</label> <input type="checkbox" />
          <br />
        </div>

        <div>
          <br />
          <label for="">Discount code</label>
          <br />
          <input type="text" />
        </div>
        <div id="code">
          <br />
          <label for="">Terms and Conditions:</label>
          <br />
          <div>
            <label for="">i agree</label>
            <input type="radio" name="terms" />
            <label for="">i disagree</label>
            <input type="radio" name="terms" />
          </div>
        </div>
        <button>Complete reservation</button>
      </form>
    </div>
  );
}
