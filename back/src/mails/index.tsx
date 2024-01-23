import nodemailer from "nodemailer";
import mjml2html from "mjml";
import dotenv from "dotenv";
dotenv.config();

class Mail {
  transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async sendWelcomeEmail(email: string) {
    try {
      const htmlOutput = mjml2html(
        `
        <mjml>
          <mj-body>
            <mj-section>
              <mj-column>
                <mj-text>
                  Inscription réussie !
                </mj-text>
              </mj-column>
            </mj-section>
          </mj-body>
        </mjml>
      `
      );

      const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: "Welcome vibes",
        html: htmlOutput.html,
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log("E-mail envoyé :", info.response);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
    }
  }

  async sendForgotPasswordEmail(email: string) {
    try {
      const htmlOutput = mjml2html(
        `
        <mjml>
          <mj-body>
            <mj-section>
              <mj-column>
                <mj-text>
                  Voici le liens pour réinitialiser votre mot de passe :
                  <a href="http://localhost:5218/ResetPassword?email=${encodeURIComponent(
                    email
                  )}">Cliquez ici</a>
                </mj-text>
              </mj-column>
            </mj-section>
          </mj-body>
        </mjml>
      `
      );

      const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: "Forgot password vibes",
        html: htmlOutput.html,
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log("E-mail envoyé :", info.response);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
    }
  }
}

export default Mail;
