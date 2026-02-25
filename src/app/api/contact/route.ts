import { SendEmail } from '@/lib/resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios.' },
        { status: 400 }
      );
    }

    const result = await SendEmail({
      sendTo: 'sirfucho@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de Contacto: ${subject}`,
      body: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nuevo Mensaje de Contacto</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: Arial, sans-serif;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; max-width: 600px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                  
                  <!-- Header Area -->
                  <tr>
                    <td style="background-color: #18181b; padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 1px;">URBAN CONTRACTORS</h1>
                      <div style="width: 40px; height: 3px; background-color: #f29c38; margin: 15px auto 0;"></div>
                    </td>
                  </tr>

                  <!-- Content Area -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #18181b; font-size: 20px; margin-top: 0; margin-bottom: 25px;">Nuevo mensaje desde la página web</h2>
                      
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="padding-bottom: 15px;">
                            <p style="margin: 0; font-size: 13px; color: #71717a; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Nombre</p>
                            <p style="margin: 5px 0 0; font-size: 16px; color: #18181b; font-weight: 500;">${name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom: 15px;">
                            <p style="margin: 0; font-size: 13px; color: #71717a; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Correo Electrónico</p>
                            <p style="margin: 5px 0 0; font-size: 16px; color: #f29c38; font-weight: 500;"><a href="mailto:${email}" style="color: #f29c38; text-decoration: none;">${email}</a></p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom: 0;">
                            <p style="margin: 0; font-size: 13px; color: #71717a; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Asunto</p>
                            <p style="margin: 5px 0 0; font-size: 16px; color: #18181b; font-weight: 500;">${subject}</p>
                          </td>
                        </tr>
                      </table>

                      <div style="background-color: #f8fafc; border-left: 4px solid #f29c38; padding: 20px; border-radius: 0 8px 8px 0;">
                        <p style="margin: 0; font-size: 13px; color: #71717a; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px; margin-bottom: 10px;">Mensaje</p>
                        <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #3f3f46; white-space: pre-wrap;">${message}</p>
                      </div>

                      <div style="margin-top: 40px; text-align: center;">
                        <a href="mailto:${email}?subject=RE: ${subject}" style="display: inline-block; background-color: #f29c38; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: bold; font-size: 15px;">Responder a ${name}</a>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer Area -->
                  <tr>
                    <td style="background-color: #fafafa; padding: 25px 30px; text-align: center; border-top: 1px solid #e4e4e7;">
                      <p style="margin: 0; color: #a1a1aa; font-size: 13px;">Este correo fue generado automáticamente por el formulario de la página web de <strong>Urban Contractors</strong>.</p>
                      <p style="margin: 5px 0 0; color: #a1a1aa; font-size: 12px;">© ${new Date().getFullYear()} Urban Contractors. Todos los derechos reservados.</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: 'Internal server error backend' },
      { status: 500 }
    );
  }
}
