import Form from "react-bootstrap/Form";

function PaymentForm() {
  <form>
    <label class="row justify-content-center">
      <h1>Pay a Bill</h1>
    </label>
    <Form.Group controlId="cardNumber">
      <Form.Control
        type="text"
        placeholder="Card Number"
        class="row justify-content-center"
      />
    </Form.Group>
    <Form.Group controlId="cardHolder">
      <Form.Control
        type="text"
        placeholder="Card Holder"
        class="row justify-content-center"
      />
    </Form.Group>
    <Form.Group controlId="expDate">
      <Form.Control
        type="month"
        placeholder="Exp Date"
        class="row justify-content-center"
      />
    </Form.Group>
    <Form.Group controlId="cvv">
      <Form.Control
        type="text"
        placeholder="cvv"
        class="row justify-content-center"
      />
    </Form.Group>
    <div class="row justify-content-center">
      <div class="btn-group float-right">
        <a
          href="/CustomerDashboard"
          class="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Pay With Stripe
        </a>
      </div>
    </div>
  </form>;
}
export default PaymentForm;
