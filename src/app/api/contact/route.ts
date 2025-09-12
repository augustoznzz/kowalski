import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Verificar se a configuração SMTP está configurada
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('Configuração SMTP não está completa');
      return NextResponse.json(
        { error: 'Serviço de email não configurado. Entre em contato através de suporte@kowalski.com' },
        { status: 503 }
      );
    }

    // Inicializar transporter SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    // Enviar email
    try {
      await transporter.sendMail({
        from: 'Kowalski Contact <noreply@kowalski.com>',
        to: ['augustozuanazzi03@gmail.com'],
        subject: `[Kowalski Contact] ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #CDFF00, #9ACD32); padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="color: #000; margin: 0; font-size: 24px;">Nova mensagem do formulário de contato</h1>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border: 1px solid #e9ecef;">
              <div style="margin-bottom: 15px;">
                <strong style="color: #333;">Nome:</strong>
                <p style="margin: 5px 0; color: #666;">${name}</p>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #333;">Email:</strong>
                <p style="margin: 5px 0; color: #666;">${email}</p>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #333;">Assunto:</strong>
                <p style="margin: 5px 0; color: #666;">${subject}</p>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #333;">Mensagem:</strong>
                <div style="background: white; padding: 15px; border-radius: 5px; margin: 5px 0; color: #333; border-left: 4px solid #CDFF00;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div style="background: #343a40; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
              <p style="margin: 0; font-size: 12px;">
                Esta mensagem foi enviada através do formulário de contato do site Kowalski
              </p>
            </div>
          </div>
        `,
        text: `
          Nova mensagem do formulário de contato Kowalski
          
          Nome: ${name}
          Email: ${email}
          Assunto: ${subject}
          
          Mensagem:
          ${message}
        `
      });
    } catch (emailError) {
      console.error('Erro ao enviar email:', emailError);
      return NextResponse.json(
        { error: 'Erro ao enviar mensagem. Tente novamente.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro na API de contato:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
