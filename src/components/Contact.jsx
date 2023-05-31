import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    console.log(data);

    setButtonText("Sending...");

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    setButtonText("Send");

    let result = await response.json();
    
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>

            <form method="POST">
              <row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                  />
                  {errors?.firstName && (
                    <p className="erro">Esse Campo deve ser Preenchido!</p>
                  )}
                </Col>

                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                  />
                  {errors?.lastName && (
                    <p className="erro">Esse Campo deve ser Preenchido!</p>
                  )}
                </Col>

                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email", {
                      required: true,
                      validate: (value) => value.includes("@"),
                    })}
                  />
                  {errors?.email && (
                    <p className="erro">Esse Campo deve ser Preenchido!</p>
                  )}
                </Col>

                <Col size={12} sm={6} className="px-1">
                  <input
                    type="number"
                    placeholder="Phone Num."
                    {...register("phone", { required: true, maxLength: 14 })}
                  />
                  {errors?.phone && (
                    <p className="erro">
                      Esse Campo deve ser Preenchido, Tam Max 14!
                    </p>
                  )}
                </Col>

                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    placeholder="Message"
                    {...register("message", { required: true })}
                  ></textarea>
                  {errors?.message && (
                    <p className="erro">Esse Campo deve ser Preenchido!</p>
                  )}
                </Col>

                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </row>
            </form>

            <button onClick={() => handleSubmit(onSubmit)()}>
              <span>{buttonText}</span>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
