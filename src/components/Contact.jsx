import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState("");
  const [err, setErr] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setButtonText("Sending..."), setErr(" ");
    setStatus(" ");

    const templateParams = {
      from_name: data.firstName,
      message: data.message,
      email: data.email,
      phone: data.phone,
    };

    emailjs
      .send(
        "service_f1rq3he",
        "template_5zredmy",
        templateParams,
        "Lw8qGVK6c48mANS56"
      )
      .then(
        function (response) {
          if (response.status === 200) {
            setStatus("Sua mensagem foi enviada com sucesso, Obrigado!");
            setButtonText("Send");
            setStatus(" ");
          }
        },
        function (error) {
          if (error) {
            setErr(`Ocorreu um erro, tente novamente mais tarde! cod: ${error.status} = 
            ${error.text}`);
            setButtonText("Send");
          }
        }
      );
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

                {status && (
                  <Col>
                    <p className="success">{status}</p>
                  </Col>
                )}

                {err && (
                  <Col>
                    <p className="danger">{err}</p>
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
