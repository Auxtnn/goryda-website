import { transporter, mailOptions } from "@/app/config/nodemailer";
import { NextResponse } from "next/server";

// Backend API to handle contact form submissions
export async function POST(request) {
  if (request.method === "POST") {
    const body = await request.json();

    if (!body.email || !body.fullname || !body.message) {
      return NextResponse.json({ error: "Bad request" });
    }

    try {
      // Send email to Goryda's email
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Contact For Goryda",
        text: ` 
          Full Name: ${body.fullname} \n 
          Email: ${body.email} \n 
          Message: ${body.message} \n 
          This message was sent from Goryda Website
        `,
      });

      // Send confirmation email to the user with HTML content
      await transporter.sendMail({
        from: mailOptions.from, // Sender email (your Zoho email)
        to: body.email, // The email provided by the user
        subject: "Thank you for contacting Goryda!",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <div style="text-align: center; margin-bottom: 15px;">
              <img src="https://i.ibb.co/HBZsTcv/goryda.png" alt="Goryda Logo" width="150"/>
            </div>
            <p>Hi ${body.fullname},</p>
            <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
            <p>Best regards,</p>
            <p><strong>Goryda Team</strong></p>

            <hr />

            <div style="text-align: center; margin-top: 20px;">
              <p>Follow us on:</p>
              <a href="https://www.facebook.com/profile.php?id=61562512510404" style="margin-right: 10px;">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" width="25"/>
              </a>
              <a href="https://x.com/GorydaApp?s=09" style="margin-right: 10px;">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="25"/>
              </a>
              <a href="https://www.instagram.com/gorydaapp?igsh=ejM0Y3JycGdzNmg4">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" width="25"/>
              </a>
            </div>
        
        

            <footer style="text-align: center; margin-top: 30px;">
              <p>&copy; 2024 Goryda. All Rights Reserved.</p>
              <p><a href="https://www.goryda.com" style="color: #0066cc; text-decoration: none;">www.goryda.com</a></p>
            </footer>
          </div>
        `,
      });

      return NextResponse.json({ message: "This Worked", success: true });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: "Internal Server Error" });
    }
  }

  return NextResponse.json({ error: "Bad request" });
}

export async function GET(request) {
  return NextResponse.json({ error: "Internal Server Error" });
}
