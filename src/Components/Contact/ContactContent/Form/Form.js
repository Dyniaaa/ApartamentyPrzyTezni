import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("./mail.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === "success") {
          this.setState({ status: "success" });
        } else {
          this.setState({ status: "error" });
        }
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("There was an error!", error);
      this.setState({ status: "error" });
    }
  };

  render() {
    const success = {
      fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif`,
      textAlign: "center",
      backgroundColor: "#00cc00",
      width: "40%",
      padding: "1rem",
      color: "#323232",
      borderRadius: "5px",
    };

    const error = {
      fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif`,
      textAlign: "center",
      backgroundColor: "#ff4444",
      width: "40%",
      padding: "1rem",
      color: "#323232",
      borderRadius: "5px",
    };

    return (
      <section className="form">
        <p className="contactTitle">Skontaktuj się z nami</p>
        <div className="goldenUnderLine"></div>

        {this.state.status === "success" ? (
          <p style={success}>Wiadomość została wysłana pomyślnie!</p>
        ) : this.state.status === "error" ? (
          <p style={error}>Wystąpił błąd podczas wysyłania wiadomości!</p>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                name="name"
                type="text"
                id="name"
                placeholder="Imię"
                required
              />
            </div>

            <div>
              <input
                name="mail"
                id="mail"
                type="text"
                placeholder="Mail"
                required
              />
            </div>
            <div>
              <textarea
                rows={10}
                name="msg"
                type="text"
                placeholder="Wiadomość"
                required
              />
            </div>

            <button type="submit">Wyślij</button>
          </form>
        )}
      </section>
    );
  }
}

export default Form;
